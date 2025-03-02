import { injectable } from "inversify";
import { TVerifyAndCreateUserRequestDto, TVerifyAndCreateUserResponseDto } from "@domain/dto/user/create-user.dto"
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { UserModel } from "@infrastructure/models/user.model";
import { ErrorHandler } from "@main/middlewares/error-handler.middleware";
import { customAssert } from "@shared/utils/custom-assert.util";
import { STATUS_CODE } from "@shared/config/http.config";
import { SessionModel } from "@infrastructure/models/session.model";
import { generateAccessToken, generateRefreshToken } from "@shared/utils/token.util";
import { Types } from "mongoose";
import { TSendOtpRequestDto, TSendOtpResponseDto } from "@domain/dto/user/send-otp.dto";
import { VerificationCodeModel } from "@infrastructure/models/verification-code.model";
import { VerificationCodeTypeEnum } from "@shared/constants/verification-code.constant";
import { fifteenMinutesFromNow } from "@shared/utils/date.util";
import { generateOtp } from "@shared/utils/otp.util";
import { TLoginUserResponseDto, TRegisterUserRequestDto, TRegisterUserResponseDto } from "@domain/dto/user/user-auth.dto";
import { TLoginUserRequest } from "@domain/validations/user/user-auth.validation";

type TUserss = { name: string } | undefined;

@injectable()
export class UserMongodbRepository implements IUserRepository {
    async sendOtp(otpData: TSendOtpRequestDto): Promise<TSendOtpResponseDto> {
        // check if user already exist with contact number
        const user = await UserModel.findOne({ contact: otpData.contact })
        customAssert(!user, STATUS_CODE.BAD_REQUEST, "User already exists!");

        // find existing verification code and delete if it expired
        const otp = await VerificationCodeModel.findOne({ contact: otpData.contact });

        if (otp) {
            const isOtpExpired = otp.expiresAt.getTime() < Date.now()
            // if otp is not expired will send response that otp has already sent
            if (!isOtpExpired) {
                customAssert(false, STATUS_CODE.BAD_REQUEST, "Otp has already sent!");
            }
            // if otp is expired we'll delete it and generate a new one
            await otp.deleteOne();
        }

        // generate a new verification code
        const generatedOtp = generateOtp();
        await VerificationCodeModel.create({ contact: otpData.contact, otp: generatedOtp, type: VerificationCodeTypeEnum.ContactVerification, expiresAt: fifteenMinutesFromNow() });
    }

    async verifyAndCreateUser(userData: TVerifyAndCreateUserRequestDto): Promise<TVerifyAndCreateUserResponseDto> {
        // check if the contact number already exist
        const user = await UserModel.findOne({ contact: userData.contact })
        customAssert(!user, STATUS_CODE.BAD_REQUEST, "Invalid contact number!");

        // check if otp exist with that contact number or not
        const verificationCode = await VerificationCodeModel.findOne({ contact: userData.contact });
        customAssert(verificationCode, STATUS_CODE.BAD_REQUEST, "OTP is not valid!");

        // check if otp is expired or not
        const isOtpExpired = verificationCode.expiresAt.getTime() < Date.now();
        customAssert(!isOtpExpired, STATUS_CODE.BAD_REQUEST, "OTP is expired, kindly generate new!");

        // check if otp is verified (equal to the user data or not)
        const isOtpVerified = Number(userData.otp) === Number(verificationCode.otp);
        customAssert(isOtpVerified, STATUS_CODE.BAD_REQUEST, "Invalid OTP Number!");

        // create new contact and verify it
        await UserModel.create({ ...userData, isVerified: true });

        // delete that verification code
        await verificationCode.deleteOne();
    }

    async registerUser(userData: TRegisterUserRequestDto): Promise<TRegisterUserResponseDto> {
        // check if user exists or not
        const user = await UserModel.findOne({ contact: userData.contact });
        customAssert(user, STATUS_CODE.BAD_REQUEST, "User not exists!");

        // registering user details
        const { name, avatar, email } = userData;
        user.name = name;
        user.avatar = avatar;
        user.email = email;
        await user.save();

        // create session
        const userId = user._id as Types.ObjectId;
        const session = await SessionModel.create({ userId, userAgent: userData?.userAgent });

        const sessionId = session._id as Types.ObjectId;

        // generate refreshToken and accessToken
        const refreshToken = generateRefreshToken({ sessionId });
        const accessToken = generateAccessToken({ userId, sessionId });

        return {
            refreshToken,
            accessToken
        }
    }

    async loginUser(userData: TLoginUserRequest): Promise<TLoginUserResponseDto> {
        // check if user exists or not
        const user = await UserModel.findOne({ contact: userData.contact });
        customAssert(user, STATUS_CODE.BAD_REQUEST, "User not exists!");

        // delete user's previous session if it exist
        const userId = user._id as Types.ObjectId;
        await SessionModel.findOneAndDelete({ userId })


        // create a new session
        const session = await SessionModel.create({ userId, userAgent: userData?.userAgent });

        // generate refreshToken and accessToken
        const sessionId = session._id as Types.ObjectId;
        const refreshToken = generateRefreshToken({ sessionId });
        const accessToken = generateAccessToken({ userId, sessionId });

        return {
            refreshToken,
            accessToken
        }
    }
}
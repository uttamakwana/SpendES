import { TVerifyAndCreateUserRequestDto, TVerifyAndCreateUserResponseDto } from "@domain/dto/user/create-user.dto";
import { TSendOtpRequestDto, TSendOtpResponseDto } from "@domain/dto/user/send-otp.dto";
import { TLoginUserResponseDto, TRegisterUserRequestDto, TRegisterUserResponseDto } from "@domain/dto/user/user-auth.dto";
import { TLoginUserRequest } from "@domain/validations/user/user-auth.validation";

export interface IUserRepository {
    verifyAndCreateUser(userData: TVerifyAndCreateUserRequestDto): Promise<TVerifyAndCreateUserResponseDto>;
    sendOtp(otpData: TSendOtpRequestDto): Promise<TSendOtpResponseDto>;
    registerUser(userData: TRegisterUserRequestDto): Promise<TRegisterUserResponseDto>;
    loginUser(userData: TLoginUserRequest): Promise<TLoginUserResponseDto>;
}
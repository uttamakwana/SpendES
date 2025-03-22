import { TCheckContactsRequestDto, TCheckContactsResponseDto } from "@domain/dto/user/check-contacts.dto";
import { TVerifyAndCreateUserRequestDto, TVerifyAndCreateUserResponseDto } from "@domain/dto/user/create-user.dto";
import { TGetUserInfoRequestDto, TGetUserInfoResponseDto } from "@domain/dto/user/get-user-info.dto";
import { TSendOtpRequestDto, TSendOtpResponseDto } from "@domain/dto/user/send-otp.dto";
import { TUpdateUserInfoRequestDto, TUpdateUserInfoResponseDto } from "@domain/dto/user/update-user-info.dto";
import { TLoginUserResponseDto, TRegisterUserRequestDto, TRegisterUserResponseDto } from "@domain/dto/user/user-auth.dto";
import { TLoginUserRequest } from "@domain/validations/user/user-auth.validation";

export interface IUserRepository {
    verifyAndCreateUser(userData: TVerifyAndCreateUserRequestDto): Promise<TVerifyAndCreateUserResponseDto>;
    sendOtp(otpData: TSendOtpRequestDto): Promise<TSendOtpResponseDto>;
    registerUser(userData: TRegisterUserRequestDto): Promise<TRegisterUserResponseDto>;
    loginUser(userData: TLoginUserRequest): Promise<TLoginUserResponseDto>;
    getUserInfo(userId: TGetUserInfoRequestDto): Promise<TGetUserInfoResponseDto>;
    updateUserInfo(userId: TUpdateUserInfoRequestDto): Promise<TUpdateUserInfoResponseDto>;
    checkContacts(contacts: TCheckContactsRequestDto): Promise<TCheckContactsResponseDto>;
}
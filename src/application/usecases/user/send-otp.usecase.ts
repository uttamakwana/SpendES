import { IUserRepository } from "@domain/repositories/user/user.repository";
import { sendOtpSchema, TSendOtpRequest } from "@domain/validations/user/send-otp.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class SendOtpUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepo: IUserRepository) {}

    async sendOtp(input: TSendOtpRequest): Promise<void> {
        const parsedInput = sendOtpSchema.parse(input);
        await this.userRepo.sendOtp(parsedInput);
    }
}
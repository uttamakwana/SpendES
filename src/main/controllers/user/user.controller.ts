import { CreateUserUsecase } from "@application/interfaces/user/verify-and-create-user.usecase";
import { SendOtpUsecase } from "@application/interfaces/user/send-otp.usecase";
import { UserAuthUsecase } from "@application/interfaces/user/user-auth.usecase";
import { UserMongodbRepository } from "@infrastructure/repositories/user/user.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";
import { setAuthCookies } from "@shared/utils/cookies.util";

const userRepository = new UserMongodbRepository();

export const sendOtp = asyncHandler(async (req, res) => {
    const sendOtpUsecase = new SendOtpUsecase(userRepository);
    const data = req.body;

    await sendOtpUsecase.sendOtp(data);
    res.status(STATUS_CODE.CREATED).json({ success: true, message: "OTP send successfully!" })
});

export const verifyAndCreateUser = asyncHandler(async (req, res) => {
    const createUserUsecase = new CreateUserUsecase(userRepository);
    const data = { ...req.body, userAgent: req.headers["user-agent"] };

    await createUserUsecase.verifyAndCreateUser(data);
    res.status(STATUS_CODE.CREATED).json({ success: true, message: "User account created!" });
});

export const register = asyncHandler(async (req, res) => {
    const userAuthUsecase = new UserAuthUsecase(userRepository);
    const data = req.body;

    const { accessToken, refreshToken } = await userAuthUsecase.register(data);
    setAuthCookies(res, accessToken, refreshToken).status(STATUS_CODE.CREATED).json({ success: true, message: "User onboarded successfull!", data: { accessToken, refreshToken } })
});

export const login = asyncHandler(async (req, res) => {
    const userAuthUsecase = new UserAuthUsecase(userRepository);
    const data = req.body;

    const { accessToken, refreshToken } = await userAuthUsecase.login(data);
    setAuthCookies(res, accessToken, refreshToken).status(STATUS_CODE.CREATED).json({ success: true, message: "User logged in successfull!", data: { accessToken, refreshToken } })
});
import { CreateUserUsecase } from "@application/usecases/user/verify-and-create-user.usecase";
import { SendOtpUsecase } from "@application/usecases/user/send-otp.usecase";
import { UserAuthUsecase } from "@application/usecases/user/user-auth.usecase";
import { UserMongodbRepository } from "@infrastructure/repositories/user/user.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";
import { setAuthCookies } from "@shared/utils/cookies.util";
import { GetUserInfoUsecase } from "@application/usecases/user/get-user-info.usecase";
import { TGetUserInfoResponseDto } from "@domain/dto/user/get-user-info.dto";
import { UpdateUserInfoUsecase } from "@application/usecases/user/update-user-info.usecase";
import { TUpdateUserInfoRequestDto, TUpdateUserInfoResponseDto } from "@domain/dto/user/update-user-info.dto";
import { CheckContactsUsecase } from "@application/usecases/user/check-contacts.usecase";
import { TCheckContactsResponseDto } from "@domain/dto/user/check-contacts.dto";

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

export const getUserInfo = asyncHandler<{ user: TGetUserInfoResponseDto }>(async (req, res) => {
    const getUserInfoUsecase = new GetUserInfoUsecase(userRepository);

    const data = req.params.id;

    const user = await getUserInfoUsecase.getUserInfo(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "User information retrived successfully!", data: { user } })
});

export const updateUserInfo = asyncHandler<{ user: TUpdateUserInfoResponseDto }>(async (req, res) => {
    const updateUserInfoUsecase = new UpdateUserInfoUsecase(userRepository);

    const userId = req.userId;
    const name = req.body.name;

    const data = { id: userId, name } as any;
    const user = await updateUserInfoUsecase.updateUserInfo(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "User info updated successfully!", data: { user } })
})

export const checkContacts = asyncHandler<{registeredContacts : TCheckContactsResponseDto}>(async(req,res)=>{
    const checkContactsUsecase = new CheckContactsUsecase(userRepository)

    const userId = req.userId;
    const data = { id : userId, contacts : req.body.contacts} as any;
    const registeredContacts = await checkContactsUsecase.checkContacts(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Contact fetch successfully!", data: { registeredContacts } })
})
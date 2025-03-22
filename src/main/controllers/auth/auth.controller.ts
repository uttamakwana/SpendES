import { RefreshAccessTokenUsecase } from "@application/usecases/auth/refresh-access-token.usecase";
import { AuthMongodbRepository } from "@infrastructure/repositories/auth/auth.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";
import { setAuthCookies } from "@shared/utils/cookies.util";
import { customAssert } from "@shared/utils/custom-assert.util";

export const refreshToken = asyncHandler(async (req, res) => {
    const authRepository = new AuthMongodbRepository();
    const refreshAccessTokenUsecase = new RefreshAccessTokenUsecase(authRepository);

    const refreshToken = req.cookies.refreshToken as string;
    console.log(req.cookies);
    if(!refreshToken) {
        customAssert(false, STATUS_CODE.BAD_REQUEST, "Invalid refresh token!");
    }

    const { newRefreshToken, newAccessToken } = await refreshAccessTokenUsecase.create(refreshToken);
    setAuthCookies(res, newAccessToken, newRefreshToken).status(STATUS_CODE.CREATED).json({ success: true, message: "Access token refreshed successfully!" });
})
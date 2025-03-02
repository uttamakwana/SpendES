import { TRefreshAccessTokenRequestDto, TRefreshAccessTokenResponseDto } from "@domain/dto/auth/refresh-access-token.dto";
import { IAuthRepository } from "@domain/repositories/auth/auth.repository";
import { SessionModel } from "@infrastructure/models/session.model";
import { STATUS_CODE } from "@shared/config/http.config";
import { customAssert } from "@shared/utils/custom-assert.util";
import { ONE_DAY_MS, thirtyDayFromNow } from "@shared/utils/date.util";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "@shared/utils/token.util";
import { Types } from "mongoose";

export class AuthMongodbRepository implements IAuthRepository {
    async refreshAccessToken(refreshToken: TRefreshAccessTokenRequestDto): Promise<TRefreshAccessTokenResponseDto> {
        // verify the refresh token and give back the payload
        const payload = verifyRefreshToken(refreshToken);
        // send back an unauthorized error if there is no payload
        customAssert(payload, STATUS_CODE.UNAUTHORIZED, "Invaliad refresh token!");

        // check if session exists or not
        const session = await SessionModel.findById(payload.sessionId);
        customAssert(session, STATUS_CODE.UNAUTHORIZED, "No Session found!");

        // check if session is expired or not
        const now = Date.now();
        const isSessionExpired = session.expiresAt.getTime() < now; 
        customAssert(!isSessionExpired, STATUS_CODE.UNAUTHORIZED, "Session expired!");

        // refresh the session if it expires within 24 hours
        const isSessionNeedsToBeRefresh = session.expiresAt.getTime() - now < ONE_DAY_MS;
        let newRefreshToken = undefined;
        const sessionId = session._id as Types.ObjectId;
        const userId = session.userId as Types.ObjectId;

        // if session needs to be refresh that change the expired time and genereate a new refreshToken
        if (isSessionNeedsToBeRefresh) {
            session.expiresAt = thirtyDayFromNow();
            await session.save();

            newRefreshToken = generateRefreshToken({ sessionId })
        }

        // if session not needs to refresh then let refreshToken remain whatever it is
        newRefreshToken = refreshToken;
        // generate a new access token 
        const refreshedAccessToken = generateAccessToken({ userId, sessionId });

        // check if the refresh token is valid or not
        customAssert(newRefreshToken, STATUS_CODE.INTERNAL_SERVER_ERROR, "Failed to generate refresh token!");

        return { newAccessToken: refreshedAccessToken, newRefreshToken: newRefreshToken }
    }
}
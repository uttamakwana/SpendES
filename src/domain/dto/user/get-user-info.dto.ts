import { TGetUserInfoRequest } from "@domain/validations/user/get-user-info.validation";
import { TUser } from "@infrastructure/models/user.model";

export type TGetUserInfoRequestDto = TGetUserInfoRequest;
export type TGetUserInfoResponseDto = Omit<Partial<TUser>, "refreshToken" | "_id"> & { id: string };
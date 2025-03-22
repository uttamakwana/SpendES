import { TGetUserInfoResponseDto } from "./get-user-info.dto";
import { TUpdateUserInfoRequest } from "@domain/validations/user/update-user-info.validation";

export type TUpdateUserInfoResponseDto = TGetUserInfoResponseDto;
export type TUpdateUserInfoRequestDto = TUpdateUserInfoRequest;
import { TCheckContactsRequest } from "@domain/validations/user/check-contacts.validation";
import { TUser } from "@infrastructure/models/user.model";

export type TCheckContactsRequestDto = TCheckContactsRequest;
export type TCheckContactsResponseDto = Pick<TUser, "_id" | "name" | "contact">
import { TCheckContactsRequestDto, TCheckContactsResponseDto } from "@domain/dto/user/check-contacts.dto";
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { checkContactsSchema } from "@domain/validations/user/check-contacts.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class CheckContactsUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepository: IUserRepository){ }

    async checkContacts(input:TCheckContactsRequestDto):Promise<TCheckContactsResponseDto>{
        const parsedInput = checkContactsSchema.parse(input);
        return this.userRepository.checkContacts(parsedInput);
    }
}
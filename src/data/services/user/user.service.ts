import { UserRepository } from '@data/repositories/user';
import { IUserDomainService } from '@domain/services/user';
import { TYPES } from '@infrastructure/configs/type';
import { CreateUserDtoSchema, TCreateUserDto, TCreateUserResponseDto } from 'interface-adapters/dto/user';
import { inject } from 'inversify';
import bcryptjs from "bcryptjs";
import { UserModel } from '@data/models/user';

export class UserService implements IUserDomainService {
 constructor(@inject(TYPES.UserRepository) private userRepository: UserRepository) { }
 async createUser(userData: TCreateUserDto): Promise<TCreateUserResponseDto> {
  const validatedData = CreateUserDtoSchema.parse(userData);

  const isUserExists = await this.userRepository.findByEmail(validatedData.email);
  if (isUserExists) {
   throw new Error("User already exists!");
  }

  const hashedPassword = await bcryptjs.hash(validatedData.password, 10)

  const newUser = await UserModel.create({ ...validatedData, password: hashedPassword })

  const savedUser = (await newUser.save())

  return savedUser;
 }
};

import { CreateUserUsecase } from "@application/interfaces/user/create-user.usecase";
import { ICreateUserRequestDto } from "@domain/dto/user/create-user.dto";
import { UserMongodbRepository } from "@infrastructure/repositories/user/user.mongodb.repository";
import { asyncHandler } from "@shared/utils/async-handler";

export const createUser = asyncHandler(async (req, res, next) => {
    const userRepository = new UserMongodbRepository();
    const createUserUsecase = new CreateUserUsecase(userRepository);

    const requestBody: ICreateUserRequestDto = req.body;

    const createdUser = await createUserUsecase.create(requestBody);
    return res.status(201).json({ message: "User created successfully!", data: { user: createdUser } })
})
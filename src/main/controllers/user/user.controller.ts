import { CreateUserUsecase } from "@application/interfaces/user/create-user.usecase";
import { ICreateUserRequestDto } from "@domain/dto/user/create-user.dto";
import { UserMongodbRepository } from "@infrastructure/repositories/user/user.mongodb.repository";
import { Request, Response } from "express-serve-static-core";

export const createUser = async (req: Request, res: Response) => {
    const userRepository = new UserMongodbRepository();
    const createUserUsecase = new CreateUserUsecase(userRepository);

    const requestBody: ICreateUserRequestDto = req.body;

    try {
        const createdUser = await createUserUsecase.create(requestBody);
        res.status(201).json({ message: "User created succesfully!", data: { user: createdUser } })
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({
            success: false,
            message: "Failed to create user.",
        });
    }

}
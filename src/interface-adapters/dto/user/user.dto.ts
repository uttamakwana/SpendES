import { TUserModel } from 'data/models/user';
import { z } from "zod";

export const CreateUserDtoSchema = z.object({
 name: z.string().min(2, { message: "Name must be at least 2 characters!" }),
 email: z.string().email({ message: "Invalid email address!" }),
 password: z.string().min(4, { message: "Password must be at least 4 characters" }),
 pin: z.string().min(4).max(4),
 contact: z.number().min(10).max(10)
})

export type TCreateUserDto = z.infer<typeof CreateUserDtoSchema>
export type TCreateUserResponseDto = Partial<Omit<TUserModel, "password" | "pin">>

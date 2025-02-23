import { UserModel } from "../models/user.model.js";
import { asyncHandler } from "../utils/async-handler.util.js";
import { createUserRequestSchema } from "../validations/user.validation.js";

export const createUser = asyncHandler(async (req, res) => {
    const validatedReqbody = createUserRequestSchema.parse(req.body);

    const { name, email, password, pin, contact } = validatedReqbody;
    const user = await UserModel.findOne({ email });

    if (user) {
        throw new Error("User already exists!");
    }

    const newUser = await UserModel.create({ name, email, password, pin, contact });

    res.status(200).json({ success: true, message: "User created successfully!", data: { user: newUser } })
})
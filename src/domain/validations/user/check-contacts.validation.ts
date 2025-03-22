import { zContactSchema, zIdSchema } from "@shared/utils/validation.util";
import z, { string } from "zod";

export const checkContactsSchema = z.object({
    id: zIdSchema,
    contacts: z.array(zContactSchema)
})

export type TCheckContactsRequest = z.infer<typeof checkContactsSchema>;
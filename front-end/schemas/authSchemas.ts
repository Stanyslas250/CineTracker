import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Must be at email." }),
  password: z.string(),
});

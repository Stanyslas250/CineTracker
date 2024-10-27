import { loginSchema } from "@/schemas/authSchemas";
import * as z from "zod";

export type loginType = z.infer<typeof loginSchema>;

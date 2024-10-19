import { OAuthCredential } from "firebase/auth";
import { z } from "zod";

import { LoginSchema, RegisterSchema } from "@/schemas/AuthSchema";

export type ErrorSign = {
  errorCode: string | null;
  errorMessage: string | null;
  credential: OAuthCredential | null;
  email: string | null;
};

export type LoginData = z.infer<typeof LoginSchema>;

export type RegisterData = z.infer<typeof RegisterSchema>;

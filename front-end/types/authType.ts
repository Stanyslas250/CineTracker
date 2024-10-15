import { OAuthCredential } from "firebase/auth";

export type ErrorSign = {
  errorCode: string | null;
  errorMessage: string | null;
  credential: OAuthCredential | null;
  email: string | null;
};

export type RegisterData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginData = {
  email: string;
  password: string;
};

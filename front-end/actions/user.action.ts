import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ErrorSign, LoginData, RegisterData } from "@/types/authType";

import { auth } from "@/lib/Firebase";

const provider = new GoogleAuthProvider();

/*
TODO: Add update method
*/

export const signInWithGoogle = async (): Promise<User | ErrorSign> => {
  const result = await signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      const e: ErrorSign = {
        credential: credential,
        email: email,
        errorCode: errorCode,
        errorMessage: errorMessage,
      };
      return e;
    });

  return result;
};

export const signInWithEmail = async (data: LoginData) => {
  const response = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  )
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error("Something goes wrong", error);
    });
  return response;
};

export const registerWithEmail = async (data: RegisterData) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  )
    .then(async (user) => {
      const userInfo = user.user;
      await updateProfile(userInfo, { displayName: data.username });
      return userInfo;
    })
    .catch((error) => {
      throw new Error("Something goes wrong", error);
    });
  return response;
};

export const logOut = async () => {
  await signOut(auth);
};

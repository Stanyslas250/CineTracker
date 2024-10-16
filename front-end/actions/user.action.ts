import {
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { LoginData, RegisterData } from "@/types/authType";

import { auth } from "@/lib/Firebase";

const provider = new GoogleAuthProvider();

/*
TODO: Add update method
*/

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      throw new Error("Something goes wrong", error);
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

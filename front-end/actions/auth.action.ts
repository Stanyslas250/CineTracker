'use server';
import { auth, db } from '@/config/firebase';
import { LoginData, RegisterData } from '@/types/AuthTypes';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';

async function registerWithEmailAndPAssword(data: RegisterData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;
    const userInfo = data.username;

    // Save user data in Firestore
    await setDoc(doc(db, 'users', user.uid), { userInfo, user });
    redirect('/api/register');
  } catch (error) {
    console.error('Something goes wrong!', error);
  }
}

async function loginWithEmailAndPAssword(data: LoginData) {
  await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      redirect('/api/login');
    })
    .catch((error) => console.error(error));
}

export { registerWithEmailAndPAssword, loginWithEmailAndPAssword };

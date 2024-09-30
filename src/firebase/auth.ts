// src/firebase/auth.ts

import { auth, googleProvider } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification
} from "firebase/auth";

// Auth operations
export const loginWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerWithEmail = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential;
};

export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const logout = () => {
  return signOut(auth);
};

export const checkEmailVerification = (router: any, setError: (message: string) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (user.emailVerified) {
        router.push('/dashboard');
      } else {
        setError('Please verify your email before accessing the dashboard.');
        sendEmailVerification(user);
      }
    }
  });
};

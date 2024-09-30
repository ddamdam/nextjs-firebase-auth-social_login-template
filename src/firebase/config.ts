// src/firebase/config.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_PROJECT_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_PROJECT_SENDER_ID",
  appId: "YOUR_PROJECT_APP_ID",
  measurementId: "YOUR_PROJECT_MEASUREMENT_ID"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, firestore, storage }; // Export Firestore and Storage

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMnGh3cGfd277xvLJwo4re5QUkSP0uAr0",
  authDomain: "semma-bday-7ab86.firebaseapp.com",
  projectId: "semma-bday-7ab86",
  storageBucket: "semma-bday-7ab86.firebasestorage.app",
  messagingSenderId: "814581372398",
  appId: "1:814581372398:web:decf05581045307039aaff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);


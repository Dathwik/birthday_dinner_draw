// Firebase core
import { initializeApp } from "firebase/app";

// Firestore
import { getFirestore } from "firebase/firestore";

// Firebase configuration (from console)
const firebaseConfig = {
  apiKey: "AIzaSyDMnGh3cGfd277xvLJwo4re5QUkSP0uAr0",
  authDomain: "semma-bday-7ab86.firebaseapp.com",
  projectId: "semma-bday-7ab86",
  storageBucket: "semma-bday-7ab86.appspot.com",
  messagingSenderId: "814581372398",
  appId: "1:814581372398:web:decf05581045307039aaff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and EXPORT IT
export const db = getFirestore(app);

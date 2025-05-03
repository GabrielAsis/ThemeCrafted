// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1wb6kshjEWwLh9NDVD_U-wLAOxW2l0I",
  authDomain: "themecrafted-bb2ce.firebaseapp.com",
  projectId: "themecrafted-bb2ce",
  storageBucket: "themecrafted-bb2ce.firebasestorage.app",
  messagingSenderId: "954294989814",
  appId: "1:954294989814:web:b7437d3a8e588b0f5d8dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrGH2y4sxF-oDWIFfQAyI2-QzMn05pmxI",
  authDomain: "chat-app-c1669.firebaseapp.com",
  projectId: "chat-app-c1669",
  storageBucket: "chat-app-c1669.appspot.com",
  messagingSenderId: "719685172657",
  appId: "1:719685172657:web:10ee36d8dd5511eda05190"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
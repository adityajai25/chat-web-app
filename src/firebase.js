// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9YtXfnCa6D1RRV-xw-a7qm-knSSvH6eU",
  authDomain: "chat-52852.firebaseapp.com",
  projectId: "chat-52852",
  storageBucket: "chat-52852.appspot.com",
  messagingSenderId: "156150165297",
  appId: "1:156150165297:web:73be414a70fd887e360a10",
  measurementId: "G-203N6NMFSS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
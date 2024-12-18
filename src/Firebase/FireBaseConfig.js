// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4AR-k6aNGUoKPulFvF45-bkXqGWTRuto",
  authDomain: "my-task-2517b.firebaseapp.com",
  projectId: "my-task-2517b",
  storageBucket: "my-task-2517b.firebasestorage.app",
  messagingSenderId: "214788551668",
  appId: "1:214788551668:web:d134fae7d77c309fe3ffa1",
  measurementId: "G-N7SSKLJKF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//auth 
export const auth = getAuth()

//database
export const db = getFirestore(app)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBV_hRLV1NHY4bF52LyMQ26DErBVzk_og",

  authDomain: "react-firebase-2-cd3fd.firebaseapp.com",

  projectId: "react-firebase-2-cd3fd",

  storageBucket: "react-firebase-2-cd3fd.firebasestorage.app",

  messagingSenderId: "169272846463",

  appId: "1:169272846463:web:509431789e302c3949f74a",

  measurementId: "G-5RPKB4K0K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

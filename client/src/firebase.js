// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "near-by-1cdb6.firebaseapp.com",
  projectId: "near-by-1cdb6",
  storageBucket: "near-by-1cdb6.appspot.com",
  messagingSenderId: "70005534320",
  appId: "1:70005534320:web:61aff2d9fd486670ddceb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
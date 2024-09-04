// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-19c35.firebaseapp.com",
  projectId: "mern-estate-19c35",
  storageBucket: "mern-estate-19c35.appspot.com",
  messagingSenderId: "442455636080",
  appId: "1:442455636080:web:5aa689550b30952ecd5cb5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


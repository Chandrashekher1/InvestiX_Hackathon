// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbL4FyiFPaOcr_uR_QZNopqKOP4LusCSs",
  authDomain: "investix-3b85f.firebaseapp.com",
  projectId: "investix-3b85f",
  storageBucket: "investix-3b85f.firebasestorage.app",
  messagingSenderId: "1039826868775",
  appId: "1:1039826868775:web:c0d650d967cfd03043cc02",
  measurementId: "G-10H3TR296J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZl03KYMzdsIS5zaOS0wmvLS9JEr5zlAE",
  authDomain: "ecommerce-coder-cd0e2.firebaseapp.com",
  projectId: "ecommerce-coder-cd0e2",
  storageBucket: "ecommerce-coder-cd0e2.appspot.com",
  messagingSenderId: "860654505783",
  appId: "1:860654505783:web:49142334ea07d067fe54b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
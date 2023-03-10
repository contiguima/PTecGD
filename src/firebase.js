// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCYDBhfuwsowILGs62JUyAhYtAVJ6Obno",
  authDomain: "ptecgd.firebaseapp.com",
  projectId: "ptecgd",
  storageBucket: "ptecgd.appspot.com",
  messagingSenderId: "537928767204",
  appId: "1:537928767204:web:c664664ad28c180770fef1",
  measurementId: "G-MDW83DGFDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
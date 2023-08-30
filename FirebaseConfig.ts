// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHc90j-dDFUyKm8aW-9yQR_HBoFoUjhk0",
  authDomain: "campus-connect-5c2cd.firebaseapp.com",
  projectId: "campus-connect-5c2cd",
  storageBucket: "campus-connect-5c2cd.appspot.com",
  messagingSenderId: "311825835201",
  appId: "1:311825835201:web:4d72dfb5091d5a79b6a040",
  measurementId: "G-FY6440NFQV"
};

// Initialize Firebase
export const Firebase_APP = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_APP);
export const firestore_db = getFirestore(Firebase_APP);
// const getanalytics = getAnalytics(APP);

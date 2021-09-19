// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import "firebase/auth"
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_WsrtemSQ5vQvPBEAkkPEHA2kg70B1TI",
  authDomain: "jusoft-taks.firebaseapp.com",
  databaseURL: "https://jusoft-taks-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jusoft-taks",
  storageBucket: "jusoft-taks.appspot.com",
  messagingSenderId: "988078104189",
  appId: "1:988078104189:web:c852813a3043b03765db14",
  measurementId: "G-2YY3M6CEWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

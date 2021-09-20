import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyCeVw1HmIXBAL7wNi_eANHjiDp27_1NKiY",
  authDomain: "jusoft-tasks.firebaseapp.com",
  databaseURL: "https://jusoft-tasks-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jusoft-tasks",
  storageBucket: "jusoft-tasks.appspot.com",
  messagingSenderId: "955398270578",
  appId: "1:955398270578:web:b08da184d9e202f71e1ceb",
  measurementId: "G-SY9WZV4TW6"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkeH9dZ53yTDaUlpLR0kPBSp-NUjbMwsU",
  authDomain: "uio-project.firebaseapp.com",
  projectId: "uio-project",
  storageBucket: "uio-project.appspot.com",
  messagingSenderId: "1055590953157",
  appId: "1:1055590953157:web:6ab0bb93573bf2c31780ac",
  measurementId: "G-BZ0XP6WG0P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
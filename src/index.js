// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    auth.EmailAuthProvider.PROVIDER_ID,
    auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Other config options...
});
import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import {getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCkeH9dZ53yTDaUlpLR0kPBSp-NUjbMwsU",
    authDomain: "uio-project.firebaseapp.com",
    databaseURL: "https://uio-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uio-project",
    storageBucket: "uio-project.appspot.com",
    messagingSenderId: "1055590953157",
    appId: "1:1055590953157:web:6ab0bb93573bf2c31780ac",
    measurementId: "G-BZ0XP6WG0P"
    });

const auth = getAuth(firebaseApp);

// Find the "Sign Up" button by its ID
const signUpButton = document.getElementById('signup-button');

// Bind the signUp() function to the click event of the button
signUpButton.addEventListener('click', signUp);

function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user created:",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
}

function signIn() {
    const email = "1234";
    const password = "12345";
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in:",user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });
}

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in");
    }
    else {
        console.log("No user");
    }
});




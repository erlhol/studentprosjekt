import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';

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
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in");
    }
    else {
        console.log("No user");
    }
});
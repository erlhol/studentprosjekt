// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "uio-project.firebaseapp.com",
  projectId: "uio-project",
  storageBucket: "uio-project.appspot.com",
  messagingSenderId: "1055590953157",
  appId: "1:1055590953157:web:6ab0bb93573bf2c31780ac",
  measurementId: "G-BZ0XP6WG0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
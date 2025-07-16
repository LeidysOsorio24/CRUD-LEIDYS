// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDsgNwl8eSne0ZaBjvFTie6EcgDzO4QBfU",
    authDomain: "crud-b2408.firebaseapp.com",
    projectId: "crud-b2408",
    storageBucket: "crud-b2408.appspot.com", // CORREGIDO
    messagingSenderId: "268984303673",
    appId: "1:268984303673:web:3cb36c59e364ccaa4acde8",
    measurementId: "G-KWX2P4QDRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
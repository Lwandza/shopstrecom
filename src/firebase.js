import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyHF3nEp9MftJEo9biN0DQysvR7mQu9cw",
    authDomain: "eco-app-b9aee.firebaseapp.com",
    projectId: "eco-app-b9aee",
    storageBucket: "eco-app-b9aee.appspot.com",
    messagingSenderId: "732611169948",
    appId: "1:732611169948:web:fca7d25a318ba3a8c06759",
    measurementId: "G-LPPZW92S3M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
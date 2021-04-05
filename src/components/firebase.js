import firebase from "firebase";
require("dotenv").config();

const api_key = process.env.API_KEY;

var firebaseApp = firebase.initializeApp({
  apiKey: "api_key",
  authDomain: "react-cv-contact.firebaseapp.com",
  projectId: "react-cv-contact",
  storageBucket: "react-cv-contact.appspot.com",
  messagingSenderId: "489361060951",
  appId: "1:489361060951:web:2a87fb54a8d372673c9f12",
});

var db = firebaseApp.firestore();

export { db };

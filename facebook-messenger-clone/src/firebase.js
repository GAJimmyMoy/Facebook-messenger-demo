import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyC5mvsub6Ru855OqBRN64MTET3o7_JsNik",
  authDomain: "facebook-messenger-clone-a266e.firebaseapp.com",
  projectId: "facebook-messenger-clone-a266e",
  storageBucket: "facebook-messenger-clone-a266e.appspot.com",
  messagingSenderId: "316786378172",
  appId: "1:316786378172:web:448f4f8339538beb4f17b9",
  measurementId: "G-3M9PLB7347"

});
const db = firebaseApp.firestore();

export default db ;
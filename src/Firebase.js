import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5nTf-y0UPhhaOrd8rgDm76xBovgWGJ1w",
  authDomain: "challange-5f571.firebaseapp.com",
  projectId: "challange-5f571",
  storageBucket: "challange-5f571.appspot.com",
  messagingSenderId: "503154720976",
  appId: "1:503154720976:web:c62be04475cc8025d85ed5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

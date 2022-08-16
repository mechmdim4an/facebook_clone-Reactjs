import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkEdJgdm1AuP3kD9Z0YDst5Tq3wnRRXxE",
  authDomain: "facebook-clone-a7986.firebaseapp.com",
  projectId: "facebook-clone-a7986",
  storageBucket: "facebook-clone-a7986.appspot.com",
  messagingSenderId: "63879821274",
  appId: "1:63879821274:web:7fe7a61ab63eb6d3d5f2e3",
  measurementId: "G-QY00Y66GC0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

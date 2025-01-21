import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhchomOxffBG9DIbZqKA9H4-OuZuKyQ6o",
  authDomain: "unicore-8605.firebaseapp.com",
  projectId: "unicore-8605",
  storageBucket: "unicore-8605.firebasestorage.app",
  messagingSenderId: "437466442906",
  appId: "1:437466442906:web:0dc774993dcc0a27f08323",
  measurementId: "G-BQJ7DT4GYZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db };

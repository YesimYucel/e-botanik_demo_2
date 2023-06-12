import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCSJm1MdUwQ2RHWNIF4Cp_Qtt2D_1w-SxU",
  authDomain: "folder-db-d5c5d.firebaseapp.com",
  projectId: "folder-db-d5c5d",
  storageBucket: "folder-db-d5c5d.appspot.com",
  messagingSenderId: "522553140915",
  appId: "1:522553140915:web:cb82551f604f978dc232c6",
  measurementId: "G-SFQQ4M0KKG"
};



const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);


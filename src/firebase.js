import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA1snaYnRDkl51fxyYLsVWE_LZsHsHDhKE",
  authDomain: "unichat-f07d9.firebaseapp.com",
  projectId: "unichat-f07d9",
  storageBucket: "unichat-f07d9.appspot.com",
  messagingSenderId: "1020153589080",
  appId: "1:1020153589080:web:afe7680f9789ea572f492d"
}).auth();


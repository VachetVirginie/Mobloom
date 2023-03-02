import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDtDfAUEvne4vge8siJS04p8kwk_pZ6s1E",
    authDomain: "mym2ps.firebaseapp.com",
    projectId: "mym2ps",
    storageBucket: "mym2ps.appspot.com",
    messagingSenderId: "810157837152",
    appId: "1:810157837152:web:b7160c25b0088464a6ac05",
    measurementId: "G-11CY4K0Y7P"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

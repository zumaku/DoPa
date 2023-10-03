import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_FIREBASE,
    authDomain: "dopa-4bfdc.firebaseapp.com",
    projectId: "dopa-4bfdc",
    storageBucket: "dopa-4bfdc.appspot.com",
    messagingSenderId: "65039526404",
    appId: "1:65039526404:web:1c6c8b67803174707f2351",
    measurementId: "G-Z6RPK705EJ",
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


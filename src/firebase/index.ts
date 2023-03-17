// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { adminUser } from "./stores";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkvYkMjvceTAIrG97jZsMFFjtSF48Cz0I",
    authDomain: "cyprien-keiser.firebaseapp.com",
    projectId: "cyprien-keiser",
    storageBucket: "cyprien-keiser.appspot.com",
    messagingSenderId: "1089752540519",
    appId: "1:1089752540519:web:b90cc20f96b39bf7817bc2",
    measurementId: "G-NSP7G1HX15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export async function signIn(email: string, password: string) {
    const signInResult = await signInWithEmailAndPassword(auth, email, password);
    adminUser.set(signInResult.user);
}

export const db = getFirestore(app);
export const concertsCollection = collection(db, "concerts");

export async function getConcerts() {
    return getDocs(concertsCollection);
}

export const biosCollection = collection(db, "bios");

export const galleryCollection = collection(db, "gallery");
export async function getPictures() {
    return getDocs(galleryCollection);
}

export const storage = getStorage(app);

const analytics = getAnalytics(app);
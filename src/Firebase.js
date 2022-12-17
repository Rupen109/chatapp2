import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD30YV9NW_e-33lVe5hVyz-HtdZvTWJxjY",
    authDomain: "chat-app-a0f85.firebaseapp.com",
    projectId: "chat-app-a0f85",
    storageBucket: "chat-app-a0f85.appspot.com",
    messagingSenderId: "1037892435630",
    appId: "1:1037892435630:web:15525708d78fa71439f73f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDztWasR_LvDydvhJ-_tkiNTqz305Dg0tE",
  authDomain: "chat-new-8d616.firebaseapp.com",
  projectId: "chat-new-8d616",
  storageBucket: "chat-new-8d616.appspot.com",
  messagingSenderId: "481425849057",
  appId: "1:481425849057:web:a9adad44596b34008215a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
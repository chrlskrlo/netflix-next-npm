// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB4WOXmUs7go-0TfQQ0rYK_T-L_JddvhgU',
  authDomain: 'netflix-next-npm.firebaseapp.com'  ,
  projectId: 'netflix-next-npm',
  storageBucket: 'netflix-next-npm.appspot.com' ,
  messagingSenderId: '650740562707',
  appId: '1:650740562707:web:48eeb3ad2bb0017b9338e6' 
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
import app from 'firebase/app';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA7T8y8sU8 iRE-wNCykjDBkpjYqtWMfYnk",
  authDomain: "primero1-5d70f.firebaseapp.com",
  projectId: "primero1-5d70f",
  storageBucket: "primero1-5d70f.firebasestorage.app",
  messagingSenderId: "188989937165",
  appId: "1:188989937165:web:655eaeebfc02e17f00a744"
};



app.initializeApp({firebaseConfig});

export const auth=firebase.auth();
export const storage = app.storage();
export const db = app.firestore();



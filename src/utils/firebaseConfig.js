import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7GMZzgrsUgedPlRBRW4SHbkjsdKJgsBg",
  authDomain: "basic-01-b2af5.firebaseapp.com",
  projectId: "basic-01-b2af5",
  storageBucket: "basic-01-b2af5.appspot.com",
  messagingSenderId: "889075969276",
  appId: "1:889075969276:web:aff1a250eea6ea7f97fb79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

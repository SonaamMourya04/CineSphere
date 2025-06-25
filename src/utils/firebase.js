// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1fPP9d0pn3ckTbjABZ6amugjjb8DDp8w",
  authDomain: "cinesphere-ab97c.firebaseapp.com",
  projectId: "cinesphere-ab97c",
  storageBucket: "cinesphere-ab97c.firebasestorage.app",
  messagingSenderId: "11865544951",
  appId: "1:11865544951:web:9895d731a5d4ee73765bf2",
  measurementId: "G-P4CDZRC191"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
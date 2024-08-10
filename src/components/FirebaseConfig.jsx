// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Lr9FVEdQaiYPhign8TyLeOmfxFMHIBM",
  authDomain: "codemate-61ccc.firebaseapp.com",
  projectId: "codemate-61ccc",
  storageBucket: "codemate-61ccc.appspot.com",
  messagingSenderId: "429905855079",
  appId: "1:429905855079:web:9acc0bd3e541cf3ee30ac2",
  measurementId: "G-77JCRMHRWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };

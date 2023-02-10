// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGYGYAS6gDALUWGGUFENz1mWB8ztD5f6k",
  authDomain: "personalized-engine.firebaseapp.com",
  projectId: "personalized-engine",
  storageBucket: "personalized-engine.appspot.com",
  messagingSenderId: "457798291652",
  appId: "1:457798291652:web:50b53a664e0d1f546f7991",
  measurementId: "G-SQ3HKQXR52",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPBVu8JhsH2hmuwkxy24Qwrccdh8QJ0eE",
  authDomain: "house-market-da50f.firebaseapp.com",
  projectId: "house-market-da50f",
  storageBucket: "house-market-da50f.appspot.com",
  messagingSenderId: "12338351337",
  appId: "1:12338351337:web:3621a4280bed5ca4f77478",
  measurementId: "G-YWWJP26HWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()
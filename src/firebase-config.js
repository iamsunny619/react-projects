// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVkh6LXb_r1ccYPJpBBRDAbQdVmc0bWZI",
  authDomain: "testdemo-vwewkg.firebaseapp.com",
  databaseURL: "https://testdemo-vwewkg.firebaseio.com",
  projectId: "testdemo-vwewkg",
  storageBucket: "testdemo-vwewkg.appspot.com",
  messagingSenderId: "219924992593",
  appId: "1:219924992593:web:68bcb670748c2ccf131e70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
  appId: "1:219924992593:web:e18a6c0ec390348a131e70",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.timeStamp;

export { projectAuth, projectFirestore, timestamp };

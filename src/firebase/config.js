import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDFJufbg7dfcRQrS1ghqvtLWlrLsKu4N8",
  authDomain: "annymoney-413d6.firebaseapp.com",
  projectId: "annymoney-413d6",
  storageBucket: "annymoney-413d6.appspot.com",
  messagingSenderId: "619636037871",
  appId: "1:619636037871:web:33562793b9ead2c250631a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//inint service
const projectFireStore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;
export { projectFireStore, projectAuth, timestamp };

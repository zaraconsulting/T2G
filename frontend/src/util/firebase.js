import firebase from "firebase/app";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgZSIrzAkIKKIU7KZlJ2U0gvxBVCTPdXE",
  authDomain: "t2g-dashboard.firebaseapp.com",
  databaseURL: "https://t2g-dashboard-default-rtdb.firebaseio.com",
  projectId: "t2g-dashboard",
  storageBucket: "t2g-dashboard.appspot.com",
  messagingSenderId: "42687417989",
  appId: "1:42687417989:web:7d593a7f4ef239a09a63ec",
  measurementId: "G-GNR7QKB80K",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

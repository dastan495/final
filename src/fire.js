import firebase from "firebase/compat/app";

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "@firebase/firestore";

import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAphMb1TW7S_bTaRpq0ImpMgSikwzpG_M4",
  authDomain: "above-71f9c.firebaseapp.com",
  projectId: "above-71f9c",
  storageBucket: "above-71f9c.appspot.com",
  messagingSenderId: "513519225768",
  appId: "1:513519225768:web:83a93a9205dc759ca7ab9d",
};

const fire = firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const storage = getStorage();
export default fire;

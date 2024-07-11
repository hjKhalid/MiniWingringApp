// // firebase/firebase.js
// import firebase from 'firebase/app';
// import {Auth} from'firebase/auth';
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//     apiKey: "AIzaSyCubZBf49SsE9MZg_OXQhcS7cG_GQxeyXs",
//     authDomain: "miniwageringapp.firebaseapp.com",
//     projectId: "miniwageringapp",
//     storageBucket: "miniwageringapp.appspot.com",
//     messagingSenderId: "750287566730",
//     appId: "1:750287566730:web:9f1ab34205cc5fa04eba73"
// };
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCubZBf49SsE9MZg_OXQhcS7cG_GQxeyXs",
  authDomain: "miniwageringapp.firebaseapp.com",
  projectId: "miniwageringapp",
  storageBucket: "miniwageringapp.appspot.com",
  messagingSenderId: "750287566730",
  appId: "1:750287566730:web:9f1ab34205cc5fa04eba73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

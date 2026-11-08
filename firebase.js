
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHFJiYxhUgHMV7V1W0daH-hFKf-oz5Sm8",
  authDomain: "kh-general-store-b7e86.firebaseapp.com",
  projectId: "kh-general-store-b7e86",
  storageBucket: "kh-general-store-b7e86.firebasestorage.app",
  messagingSenderId: "357845139167",
  appId: "1:357845139167:web:4c6719ab99310df0d1336a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };


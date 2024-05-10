// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFsFLNZcg_JmOSXMO6Lv50r7IkueR1tmM",
  authDomain: "engiverse-39dbc.firebaseapp.com",
  projectId: "engiverse-39dbc",
  storageBucket: "engiverse-39dbc.appspot.com",
  messagingSenderId: "963456439026",
  appId: "1:963456439026:web:388265e525a3f8b864b66b",
  measurementId: "G-E681QWZG14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

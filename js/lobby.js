// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", () => {
  // Select the form and name field
  const form = document.getElementById("lobby__form");
  const nameField = form.querySelector('input[name="name"]');

  // Handle changes in authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, retrieve display name
      const displayName = user.displayName;
      if (displayName) {
        // Set the display name in the name field
        nameField.value = displayName;
      }
    } else {
      // User is signed out, handle accordingly
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sessionStorage.setItem("display_name", e.target.name.value);

    let inviteCode = e.target.room.value;
    if (!inviteCode) {
      inviteCode = String(Math.floor(Math.random() * 10000));
    }
    window.location = `room.html?room=${inviteCode}`;
  });
});

/*let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value
    if(!inviteCode){
        inviteCode = String(Math.floor(Math.random() * 10000))
    }
    window.location = `room.html?room=${inviteCode}`
}) */

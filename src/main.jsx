import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0onPKaEhmOwKayIcaPQWx-b4tKhzhbnw",
  authDomain: "gammin-zone.firebaseapp.com",
  projectId: "gammin-zone",
  storageBucket: "gammin-zone.appspot.com",
  messagingSenderId: "147655618205",
  appId: "1:147655618205:web:8d72dafe535fcf5827ee74"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

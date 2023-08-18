// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRsyCaVpushXWNF1SQMtzrq2si8__5Ros",
  authDomain: "something-completely-new.firebaseapp.com",
  projectId: "something-completely-new",
  storageBucket: "something-completely-new.appspot.com",
  messagingSenderId: "1098432979502",
  appId: "1:1098432979502:web:0af1578b00d929ba11f5bf",
  measurementId: "G-WE9TTE2Q1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
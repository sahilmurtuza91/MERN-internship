// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfQPZM-D6Cqfsd7Hf3kccb4bsFGmbVKQk",
  authDomain: "task-manager-app-de928.firebaseapp.com",
  projectId: "task-manager-app-de928",
  storageBucket: "task-manager-app-de928.firebasestorage.app",
  messagingSenderId: "619578878901",
  appId: "1:619578878901:web:11cc6253f54c22477ac7fc",
  measurementId: "G-48MT2RT67W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey: "AIzaSyCfQPZM-D6Cqfsd7Hf3kccb4bsFGmbVKQk",
  authDomain: "task-manager-app-de928.firebaseapp.com",
  projectId: "task-manager-app-de928",
  messagingSenderId: "619578878901",
  appId: "1:619578878901:web:11cc6253f54c22477ac7fc",
});

const messaging = firebase.messaging();
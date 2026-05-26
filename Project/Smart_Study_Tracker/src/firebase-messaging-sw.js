importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCfQPZM-D6Cqfsd7Hf3kccb4bsFGmbVKQk",
  authDomain: "task-manager-app-de928.firebaseapp.com",
  projectId: "task-manager-app-de928",
  storageBucket: "task-manager-app-de928.firebasestorage.app",
  messagingSenderId: "619578878901",
  appId: "1:619578878901:web:11cc6253f54c22477ac7fc",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  self.registration.showNotification(
    payload?.notification.title,
    {
      body: payload?.notification?.body,
      icon: "/logo192.png",
    }
  );

});
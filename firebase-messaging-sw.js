importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAY8vu4D0rV08Z3ztTz4vQsmjJ5w7q3Qsk",
  authDomain: "burundi-jules-tracker.firebaseapp.com",
  projectId: "burundi-jules-tracker",
  storageBucket: "burundi-jules-tracker.firebasestorage.app",
  messagingSenderId: "567725218562",
  appId: "1:567725218562:web:0b9252440cae1b8d58401b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "BURUNDI JULES TRACKER";

  const options = {
    body: payload.notification?.body || "Nouvelle alerte de votre véhicule."
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("./"));
});
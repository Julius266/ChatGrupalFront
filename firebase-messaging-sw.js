importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js"); // Importa el módulo de mensajería

// Configura Firebase con tus credenciales
firebase.initializeApp({
  messagingSenderId: "846224044080"
});

const initMessaging = firebase.messaging();

import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyCLZmwCHtdO53LAFLzzlA4TYgzqUfsWKDY",
    authDomain: "chatgrupal-fa8bd.firebaseapp.com",
    projectId: "chatgrupal-fa8bd",
    storageBucket: "chatgrupal-fa8bd.appspot.com",
    messagingSenderId: "846224044080",
    appId: "1:846224044080:web:998d305acd3e6511adbdf5",
    measurementId: "G-K3E8FH2WXD"
  };

firebase.initializeApp(config)

export default firebase
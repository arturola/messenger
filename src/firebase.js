import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyCsZl_Tv2tJTLINmFE4PlPUxtjV26R3eJ8",
  authDomain: "facebook-messenger-clone-d3a5e.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d3a5e.firebaseio.com",
  projectId: "facebook-messenger-clone-d3a5e",
  storageBucket: "facebook-messenger-clone-d3a5e.appspot.com",
  messagingSenderId: "888134398508",
  appId: "1:888134398508:web:456dd949c54c42eeaf1789",
  measurementId: "G-76P4JP6B0R"

});

const db = firebaseApp.firestore();

export default db;
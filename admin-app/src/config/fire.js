import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_bbhqj98Htw7UHj4ucuAk0U05LL4Ok8Q",
    authDomain: "node-f7aa4.firebaseapp.com",
    databaseURL: "https://node-f7aa4.firebaseio.com",
    projectId: "node-f7aa4",
    storageBucket: "node-f7aa4.appspot.com",
    messagingSenderId: "619927381764",
    appId: "1:619927381764:web:558d95862dbb6abaea1251",
    measurementId: "G-GJE4KBK4V7"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
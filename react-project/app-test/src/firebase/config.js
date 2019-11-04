import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDjkKB_YKUED7nuux5saA9cCdcsF3hmU20",
  authDomain: "tf-food.firebaseapp.com",
  databaseURL: "https://tf-food.firebaseio.com",
  projectId: "tf-food",
  storageBucket: "tf-food.appspot.com",
  messagingSenderId: "641745778138",
  appId: "1:641745778138:web:97fd2376a931847da5fce3",
  measurementId: "G-TNGB3XM1MZ"
};
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;

  export const database = firebase.database();


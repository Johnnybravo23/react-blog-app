import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDCK6GpmYq_e72FkPjyF7-QGumptznJQNg",
    authDomain: "net-ninja-9b01e.firebaseapp.com",
    databaseURL: "https://net-ninja-9b01e.firebaseio.com",
    projectId: "net-ninja-9b01e",
    storageBucket: "net-ninja-9b01e.appspot.com",
    messagingSenderId: "126889034940",
    appId: "1:126889034940:web:f55821f01033440c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAI43vXJXpNnxvU7DVORhsUNXf4Vpf8zQ0",
    authDomain: "school-attendance-app-c0ccb.firebaseapp.com",
    databaseURL: "https://school-attendance-app-c0ccb-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-c0ccb",
    storageBucket: "school-attendance-app-c0ccb.appspot.com",
    messagingSenderId: "714528416622",
    appId: "1:714528416622:web:d6d339a455d0b1f3c4977f"
  };

let app =  firebase.initializeApp(firebaseConfig);
export default firebase.database();
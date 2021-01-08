import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCymgG5CwpYB5JxWf-V1gjuRNsq87a2gZY",
    authDomain: "barter-app-4c8a4.firebaseapp.com",
    projectId: "barter-app-4c8a4",
    storageBucket: "barter-app-4c8a4.appspot.com",
    messagingSenderId: "961035438643",
    appId: "1:961035438643:web:91782ebf993eba7e5eb146"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

  
// suiu


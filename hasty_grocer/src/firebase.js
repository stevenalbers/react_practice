import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDOTMDfDzUCF_rF0dUsDWYnwZiA9MKPfnU",
    authDomain: "hasty-grocer.firebaseapp.com",
    databaseURL: "https://hasty-grocer.firebaseio.com",
    projectId: "hasty-grocer",
    storageBucket: "hasty-grocer.appspot.com",
    messagingSenderId: "784093143335"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const itemRef = firebase.database().ref('items');
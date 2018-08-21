import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDDgXlfTQd4yjecVLmz_qREAf_3DZtuMws",
    authDomain: "goalcoach-26854.firebaseapp.com",
    databaseURL: "https://goalcoach-26854.firebaseio.com",
    projectId: "goalcoach-26854",
    storageBucket: "",
    messagingSenderId: "453199777380"
  };

  export const firebaseApp = firebase.initializeApp(config);
import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    // Import from firebase
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const itemRef = firebase.database().ref('items');
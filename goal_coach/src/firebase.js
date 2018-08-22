import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    // Copy config data from firebase
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnDmYnTK4ZwSAoGexHr18OqeapN6LT9po",
    authDomain: "clone-dea75.firebaseapp.com",
    databaseURL: "https://clone-dea75.firebaseio.com",
    projectId: "clone-dea75",
    storageBucket: "clone-dea75.appspot.com",
    messagingSenderId: "554236983229",
    appId: "1:554236983229:web:f4133337c1ebf3999484d4",
    measurementId: "G-6P73F9XSKC"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

export const db=firebaseApp.database();
export const auth=firebase.auth();
  
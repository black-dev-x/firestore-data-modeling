import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  // your firebase credentials
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

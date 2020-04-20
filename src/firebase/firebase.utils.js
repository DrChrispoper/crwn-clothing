import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAu3Nd-NtUZl6EZGFKn-TUvK-zLACJxl-A',
  authDomain: 'crwn-shop-7eb0a.firebaseapp.com',
  databaseURL: 'https://crwn-shop-7eb0a.firebaseio.com',
  projectId: 'crwn-shop-7eb0a',
  storageBucket: 'crwn-shop-7eb0a.appspot.com',
  messagingSenderId: '113033310847',
  appId: '1:113033310847:web:18426c0346c2fa5e59454a',
  measurementId: 'G-VB128PCK6B',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

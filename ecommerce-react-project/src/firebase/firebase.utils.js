import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBVwjktCownDiFbAl6XQntwhYKeYhagJ3o",
  authDomain: "chungy-clothing.firebaseapp.com",
  databaseURL: "https://chungy-clothing.firebaseio.com",
  projectId: "chungy-clothing",
  storageBucket: "chungy-clothing.appspot.com",
  messagingSenderId: "861236094652",
  appId: "1:861236094652:web:4521d9187359ad805952b9",
  measurementId: "G-1YZV8FGMCT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Always pop up google popup to sign in with Google Account for authenication and sign in.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCqWnh8UT4plvXuL7HnQQtV4OsIjOVQPN4',
  authDomain: 'crwn-db-153b4.firebaseapp.com',
  databaseURL: 'https://crwn-db-153b4.firebaseio.com',
  projectId: 'crwn-db-153b4',
  storageBucket: 'crwn-db-153b4.appspot.com',
  messagingSenderId: '675998441084',
  appId: '1:675998441084:web:72a6bd7e8426196d8df3f9',
  measurementId: 'G-FHTZ6EP4FY'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

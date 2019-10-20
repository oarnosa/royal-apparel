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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

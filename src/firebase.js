import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// require('firebase/auth');
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyANfbrkrdmrrSQ_LYEDyJwAwcLRRLhxKSw",
  authDomain: "netflix-build-397c4.firebaseapp.com",
  projectId: "netflix-build-397c4",
  storageBucket: "netflix-build-397c4.appspot.com",
  messagingSenderId: "235303884322",
  appId: "1:235303884322:web:fc204671df4315e5909c7b",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default db;
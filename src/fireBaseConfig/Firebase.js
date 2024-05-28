// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const Firebase = { 
apiKey: "AIzaSyDMO-QrmXTOsSqRIMNpwr2mCWdu6fMbeqU",
authDomain: "gara-android-store.firebaseapp.com",
projectId: "gara-android-store",
storageBucket: "gara-android-store.appspot.com",
messagingSenderId: "309602433370",
appId: "1:309602433370:web:c4f92a24659b36c5f51b63",
measurementId: "G-25L48DR5H1"
};

const app = initializeApp(Firebase);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMno8l95swN1a6HzY67A0aW3yu7BvnWJs",
  authDomain: "recipe-app-2a656.firebaseapp.com",
  projectId: "recipe-app-2a656",
  storageBucket: "recipe-app-2a656.appspot.com",
  messagingSenderId: "769718842510",
  appId: "1:769718842510:web:3c58eab4b37e94c54b45df",
  measurementId: "G-9XZ39WGTH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//to create the database
export const db = getFirestore();

//provider is instantiate as a class but auth is not
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// this additionalInformation is a object which by default is empty object
//in case some value is null (additionalInformation) this will capture and overwrite the value and store it
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  //doc take 3 argument 1 database,2nd collection of data, 3rd some identifier like uuid
  //if it don't have user object google automatically generate for you
  const userDocRef = doc(db, "users", userAuth.uid);
  // snapshot is kinda like the data also its specific kinf of object
  const userSnapshot = await getDoc(userDocRef);

  //if userSnapshot/ user data does not exist...
  //create/set the document with the data from userAuth in my collection or return if exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //if data does not exist then set the doc with this object {it is like the schema}
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }
  return userDocRef;
};

export const signOutUser = async () => await signOut(auth);

//listening to user state and it accept 2 parameters auth and a callback fn
// call every time when auth state changes || also called observer listener
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

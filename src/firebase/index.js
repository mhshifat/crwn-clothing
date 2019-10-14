import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const configFirebase = {
  apiKey: "AIzaSyDlNwhbsbT96ufYsvDi-GLJgQ3htPNcHAc",
  authDomain: "crwn-db-9fefc.firebaseapp.com",
  databaseURL: "https://crwn-db-9fefc.firebaseio.com",
  projectId: "crwn-db-9fefc",
  storageBucket: "crwn-db-9fefc.appspot.com",
  messagingSenderId: "154730662428",
  appId: "1:154730662428:web:7017a818939fe0cc482dd9",
  measurementId: "G-7WRHR43W9P"
};

firebase.initializeApp(configFirebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const firebaseProvider = new firebase.auth.GoogleAuthProvider();
firebaseProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(firebaseProvider);
export const createUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnapShot = await userRef.get();
  if (userSnapShot.exists) return userRef;
  const { displayName, email } = user;
  try {
    await userRef.set({
      displayName,
      email,
      createdAt: new Date(),
      ...additionalData
    });
  } catch (err) {
    console.log("Create User Profile Error: ", err);
  }
  return userRef;
};

export default firebase;

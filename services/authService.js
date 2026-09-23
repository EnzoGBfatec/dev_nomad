import firebase from "../firebase/firebase"
import {getAuth, signInWithEmailAndPassword, createUserwithEmailAndPassword, signOut} from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase)
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


export const registerUser = (auth, email, password) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(`user.UID ${substring(user.uid, 0, 6)}`)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Code: ${errorCode}, Message: ${errorMessage}`)
  });
}
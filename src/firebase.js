import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCSgmBTwFfBQQG_oIwXtbjyi9GrnF40Q2E",
  authDomain: "netfilx-clone-c2b13.firebaseapp.com",
  projectId: "netfilx-clone-c2b13",
  storageBucket: "netfilx-clone-c2b13.firebasestorage.app",
  messagingSenderId: "676741634008",
  appId: "1:676741634008:web:755a3dd7be99327b1304ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = () => {
    signOut(auth)
}


export {auth, db, login, signUp, logout}
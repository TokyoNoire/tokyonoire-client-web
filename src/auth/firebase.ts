import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFKZuHwxZmJ5wfsM-UFs1PMMsA9n6b-f4",
  authDomain: "tokyo-noire-62a00.firebaseapp.com",
  projectId: "tokyo-noire-62a00",
  storageBucket: "tokyo-noire-62a00.appspot.com",
  messagingSenderId: "287979698490",
  appId: "1:287979698490:web:f94d2332c1bac82e1bf803"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
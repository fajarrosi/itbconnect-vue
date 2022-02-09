import { initializeApp } from "firebase/app";
import { getAuth  } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDllYuW1Hwv8nbeuTsiQnqTz_olDwkgpOg",
  authDomain: "smackchat-7b294.firebaseapp.com",
  projectId: "smackchat-7b294",
  storageBucket: "smackchat-7b294.appspot.com",
  messagingSenderId: "976221876338",
  appId: "1:976221876338:web:80092dae4a51ab246152eb"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth()
  const firebaseDb = getDatabase()
  export { firebaseAuth, firebaseDb }

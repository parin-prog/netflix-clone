import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu8EJo2MO7NkclDRxqhONe4s_tRMIrGZw",
  authDomain: "netflix-clone-959d2.firebaseapp.com",
  projectId: "netflix-clone-959d2",
  storageBucket: "netflix-clone-959d2.appspot.com",
  messagingSenderId: "224900723458",
  appId: "1:224900723458:web:4b8a6032b112d17a94881b",
  measurementId: "G-HY29Z7CC4Q"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth}
  export default db
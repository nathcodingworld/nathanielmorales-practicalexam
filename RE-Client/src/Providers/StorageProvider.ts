import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "firebaseAPiKey",
  authDomain: "firebaseAuthDomain",
  projectId: "anID",
  storageBucket: "storagePAth",
  messagingSenderId: "anData",
  appId: "anID",
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

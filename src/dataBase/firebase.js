import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCTNY1Nws6U6b4PRMAzWXe0ao0Ko9PYV0",
  authDomain: "disneyplus-clone-91efd.firebaseapp.com",
  projectId: "disneyplus-clone-91efd",
  storageBucket: "disneyplus-clone-91efd.appspot.com",
  messagingSenderId: "54113889531",
  appId: "1:54113889531:web:e19853e417b47cf6ca945e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


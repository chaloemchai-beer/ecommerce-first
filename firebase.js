import { initializeApp, getApps, getApp } from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyBmsF8Z2B5wrvsOoB2JMwb_BstZthsKBME",
  authDomain: "next-94cd7.firebaseapp.com",
  projectId: "next-94cd7",
  storageBucket: "next-94cd7.appspot.com",
  messagingSenderId: "531877884292",
  appId: "1:531877884292:web:df66f20f8b39a816b86dd1",
  measurementId: "G-MZ1EZ81WSJ",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export { app };

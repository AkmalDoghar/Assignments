// firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4gNzJJyfGR-QxgphmymyiO5Mb-0Hk6Es",
  authDomain: "ai-chatboat-f609e.firebaseapp.com",
  projectId: "ai-chatboat-f609e",
  storageBucket: "ai-chatboat-f609e.appspot.com",
  messagingSenderId: "850803529187",
  appId: "1:850803529187:web:9f6e4c9deb5348123b3cd6",
  measurementId: "G-WWGT8TQ3JW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Do NOT use top-level await here
let analytics;

function initAnalytics() {
  if (typeof window !== "undefined") {
    import("firebase/analytics").then(({ getAnalytics }) => {
      analytics = getAnalytics(app);
    });
  }
}

initAnalytics(); // ✅ Call the function to initialize analytics (no await)

export { app, auth, db };

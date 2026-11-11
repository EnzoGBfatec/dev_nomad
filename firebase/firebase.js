// Aula0923 - Create e Sign User
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyA8rcCnmJsVw2eMNC53p2oVE1dGEYm9Muc",
  authDomain: "dev-nomad.firebaseapp.com",
  projectId: "dev-nomad",
  storageBucket: "dev-nomad.firebasestorage.app",
  messagingSenderId: "724816279928",
  appId: "1:724816279928:web:d39e8c89d8ba1e2102308d",
  measurementId: "G-JB1VZTTTL9"
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDVqZKEOxSSdW-Aaj6t5bjyBuxQt4lULok",
  authDomain: "dev-nomad-enzo.firebaseapp.com",
  projectId: "dev-nomad-enzo",
  storageBucket: "dev-nomad-enzo.firebasestorage.app",
  messagingSenderId: "709857750578",
  appId: "1:709857750578:web:36a2f109462490dbdb562b",
  measurementId: "G-EEC7CY2SX1"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
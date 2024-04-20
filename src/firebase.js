// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtD_OvE_cqZmOSTLtU_tiJwe66ZqQP89Y",
  authDomain: "hoo-play.firebaseapp.com",
  projectId: "hoo-play",
  storageBucket: "hoo-play.appspot.com",
  messagingSenderId: "41140414215",
  appId: "1:41140414215:web:447c35053eeb1f102d47a2",
  measurementId: "G-EKZFQ29BHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
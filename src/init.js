// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv_4h73KCOVwhdVOw4ZXqJcK7Pn8yjkSI",
  authDomain: "router-with-authentication.firebaseapp.com",
  projectId: "router-with-authentication",
  storageBucket: "router-with-authentication.appspot.com",
  messagingSenderId: "286039759410",
  appId: "1:286039759410:web:7fd5ffdb108c4df77f7a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
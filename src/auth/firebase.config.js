// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: "AIzaSyAzX841Dqgfq6TlpWT3qNmn0FXiU4PFHEA",
//   authDomain: "trektrove-a10.firebaseapp.com",
//   projectId: "trektrove-a10",
//   storageBucket: "trektrove-a10.appspot.com",
//   messagingSenderId: "495984856061",
//   appId: "1:495984856061:web:ff6fd6bc9f4befa2296794"
// };


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

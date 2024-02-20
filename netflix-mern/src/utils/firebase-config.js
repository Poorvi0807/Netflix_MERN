import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgy7DpsMHipScQleMWo2RdfvBWCd8GNyE",
  authDomain: "react-netflix-clone-9206a.firebaseapp.com",
  projectId: "react-netflix-clone-9206a",
  storageBucket: "react-netflix-clone-9206a.appspot.com",
  messagingSenderId: "216658045608",
  appId: "1:216658045608:web:c72cc0c6e0a0be8963309d",
  measurementId: "G-GR5ERG8M60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
// const analytics = getAnalytics(app);
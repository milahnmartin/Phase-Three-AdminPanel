// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/app";
// import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgSIXJlTGBRHpzffEgBYu4a2udGwBI33w",
    authDomain: "phase-three-trading.firebaseapp.com",
    projectId: "phase-three-trading",
    storageBucket: "phase-three-trading.appspot.com",
    messagingSenderId: "311714858255",
    appId: "1:311714858255:web:9be87aeb114a2d02386a7a",
    measurementId: "G-Y3EBSLBD45",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

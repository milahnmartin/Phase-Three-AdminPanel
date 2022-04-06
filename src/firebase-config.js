// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/app";
// import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0UM9krImZ61RCJKxMRijkb0T_5bJa22k",
    authDomain: "phase-three-admin-panel.firebaseapp.com",
    databaseURL:
        "https://phase-three-admin-panel-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "phase-three-admin-panel",
    storageBucket: "phase-three-admin-panel.appspot.com",
    messagingSenderId: "811245831615",
    appId: "1:811245831615:web:20a1ff36310e575d8e8d0a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAIxTeTT0qjZJCOpYisJ4zusi8y2Ey8xA",
    authDomain: "netflix-clone-9b1b8.firebaseapp.com",
    projectId: "netflix-clone-9b1b8",
    storageBucket: "netflix-clone-9b1b8.appspot.com",
    messagingSenderId: "602291953020",
    appId: "1:602291953020:web:381dc0b013995c9c6d98f9",
    measurementId: "G-9PKL779JDB"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);

// export default db;
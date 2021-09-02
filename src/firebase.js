import firebase from "../../reels/node_modules/firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeFuRSOGW0Ry5t6axgVcwBQMTJB0RLlHA",
    authDomain: "resume-builder-98dbf.firebaseapp.com",
    projectId: "resume-builder-98dbf",
    storageBucket: "resume-builder-98dbf.appspot.com",
    messagingSenderId: "226987504170",
    appId: "1:226987504170:web:66851176ba03687176c953"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () =>{
    auth.signInWithPopup(provider);
}

export const firestore = firebase.firestore();


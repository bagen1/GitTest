import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAUfuHIXOiaML4zlZylM_XVoOPINBo4Vcc",
    authDomain: "sort-store.firebaseapp.com",
    databaseURL: "https://sort-store.firebaseio.com",
    projectId: "sort-store",
    storageBucket: "sort-store.appspot.com",
    messagingSenderId: "63049704251"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

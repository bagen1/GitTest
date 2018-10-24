import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDe4bf4su1vqFUHTAJkZkosDsl8ywSOs3U",
    authDomain: "login-45157.firebaseapp.com",
    databaseURL: "https://login-45157.firebaseio.com",
    projectId: "login-45157",
    storageBucket: "login-45157.appspot.com"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;

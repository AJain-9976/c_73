import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYia9Me4eNa0VB-WG62OK1VGSPlFDd95o",
  authDomain: "elibrary-b55b3.firebaseapp.com",
  projectId: "elibrary-b55b3",
  storageBucket: "elibrary-b55b3.appspot.com",
  messagingSenderId: "260388217832",
  appId: "1:260388217832:web:1f92bb049337e4500fba5d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

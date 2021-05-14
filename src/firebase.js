import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDg2f0a_l-P5BOgyqSc3yfEd2FKzE2Gudw",
  authDomain: "whats-app-clone-17bf5.firebaseapp.com",
  projectId: "whats-app-clone-17bf5",
  storageBucket: "whats-app-clone-17bf5.appspot.com",
  messagingSenderId: "19197489099",
  appId: "1:19197489099:web:a184845a0bfee7c586904e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;

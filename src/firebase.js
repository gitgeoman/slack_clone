import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMykDDpL2Hi_cN21KPjvvWFMjzqVUKgss",
  authDomain: "slack-clone-bc88f.firebaseapp.com",
  databaseURL: "https://slack-clone-bc88f.firebaseio.com",
  projectId: "slack-clone-bc88f",
  storageBucket: "slack-clone-bc88f.appspot.com",
  messagingSenderId: "393573644689",
  appId: "1:393573644689:web:441daf12e0604acdde0230",
  measurementId: "G-0EWDDEKR50",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
//6:55

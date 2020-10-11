import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUyUpNv7BsjsFS8WaOvt_n5aPqIy3YDtQ",
  authDomain: "twitter-clone1-7ec70.firebaseapp.com",
  databaseURL: "https://twitter-clone1-7ec70.firebaseio.com",
  projectId: "twitter-clone1-7ec70",
  storageBucket: "twitter-clone1-7ec70.appspot.com",
  messagingSenderId: "27723327296",
  appId: "1:27723327296:web:374ca14900b1d216d8fca5",
  measurementId: "G-T7GTLWGR7X"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

   export default db;
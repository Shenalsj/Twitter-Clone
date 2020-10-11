import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfP2-7TJa5-Lgpw9T28-KYsIx-R3xJeBw",
    authDomain: "twitter-clone-ea951.firebaseapp.com",
    databaseURL: "https://twitter-clone-ea951.firebaseio.com",
    projectId: "twitter-clone-ea951",
    storageBucket: "twitter-clone-ea951.appspot.com",
    messagingSenderId: "430713836337",
    appId: "1:430713836337:web:ed36f5f7af8312207cd610",
    measurementId: "G-CQ3VHMJH46"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

   export default db;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var config = {
    apiKey: "AIzaSyCXbtGIaA32pJCYYKEh-1iLUEgCFhs_1wA",
    authDomain: "testapp-a541c.firebaseapp.com",
    databaseURL: "https://testapp-a541c.firebaseio.com",
    projectId: "testapp-a541c",
    storageBucket: "testapp-a541c.appspot.com",
    messagingSenderId: "79321948681",
    appId: "1:79321948681:web:8c9bbee859b49242a70ed8"
  };
firebase.initializeApp(config);

export default firebase;

import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBOa53DDMLqWw3eeddvVMLeWOapXJ5NKPo",
  authDomain: "sandbox-f25cc.firebaseapp.com",
  databaseURL: "https://sandbox-f25cc.firebaseio.com",
  projectId: "sandbox-f25cc",
  storageBucket: "sandbox-f25cc.appspot.com",
  messagingSenderId: "254678889171"
}

firebase.initializeApp(config)

export const database = firebase.database()
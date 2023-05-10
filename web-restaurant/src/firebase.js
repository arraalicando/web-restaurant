import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnNuvh8f4dUC_386HJ4NAop0qHZFmtxYY",
    authDomain: "web-restaurant-f0906.firebaseapp.com",
    projectId: "web-restaurant-f0906",
    storageBucket: "web-restaurant-f0906.appspot.com",
    messagingSenderId: "1500126668",
    appId: "1:1500126668:web:ae4a8a9ea292a547949169",
    measurementId: "G-VJFMHWLYXK"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();



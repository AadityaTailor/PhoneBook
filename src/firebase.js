import firebase from 'firebase/app'
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyC5Q2oViAmxaPVvKEN5Er2X26WV0KGp9Dc",
    authDomain: "react-crud-906e7.firebaseapp.com",
    databaseURL: "https://react-crud-906e7.firebaseio.com",
    projectId: "react-crud-906e7",
    storageBucket: "react-crud-906e7.appspot.com",
    messagingSenderId: "126447131691",
    appId: "1:126447131691:web:4d6429474905c9628c5e6e"
};
// Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref()
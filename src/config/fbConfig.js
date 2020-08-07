import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyCkJIAkg3CFivdCaHb3wbZPV2EsA69UJKU",
  authDomain: "reactfirebase-backend-da6f3.firebaseapp.com",
  databaseURL: "https://reactfirebase-backend-da6f3.firebaseio.com",
  projectId: "reactfirebase-backend-da6f3",
  storageBucket: "reactfirebase-backend-da6f3.appspot.com",
  messagingSenderId: "889508508075",
  appId: "1:889508508075:web:20d0afbc2d1c4fca22a2ee",
  measurementId: "G-VHDRFKR3YQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;

import firebase from "firebase";   
const firebaseConfig = {
  apiKey: "AIzaSyCcosIX9cgRtabXOnWDAx0q4v-ut93zpnM",
  authDomain: "slack-clone-3d291.firebaseapp.com",
  projectId: "slack-clone-3d291",
  storageBucket: "slack-clone-3d291.appspot.com",
  messagingSenderId: "643104733113",
  appId: "1:643104733113:web:6615d14bf31ed05f02a868"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db,auth , provider};
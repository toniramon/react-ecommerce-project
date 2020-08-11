import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCFb0QafAF_5sijq5HU7LSNSqeFqigtqtw",
    authDomain: "crwn-db-9cf4c.firebaseapp.com",
    databaseURL: "https://crwn-db-9cf4c.firebaseio.com",
    projectId: "crwn-db-9cf4c",
    storageBucket: "crwn-db-9cf4c.appspot.com",
    messagingSenderId: "774902922718",
    appId: "1:774902922718:web:01dd33b174c150ee3db14f",
    measurementId: "G-VM3GZFH87D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
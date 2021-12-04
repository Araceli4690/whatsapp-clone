import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyApOuguhEnAyFpak229_4aKKoLknIZXS2A",
    authDomain: "whatsapp-clone-dcf49.firebaseapp.com",
    projectId: "whatsapp-clone-dcf49",
    storageBucket: "whatsapp-clone-dcf49.appspot.com",
    messagingSenderId: "670492237671",
    appId: "1:670492237671:web:f3c7578b2f49a03ad559c2"
};
//initialze app 
const firebaseApp = firebase.initializeApp(firebaseConfig);
//access firestore instance/db
const db = firebaseApp.firestore();
//authentication
const auth = firebase.auth();
//google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// COLE SEU CÓDIGO DO FIREBASE AQUI

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
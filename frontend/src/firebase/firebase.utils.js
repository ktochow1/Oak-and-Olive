import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
        apiKey: "AIzaSyCkR04UToK4fROUqk3jV6UOD_iS0k6MExU",
        authDomain: "oak-and-olive-301320.firebaseapp.com",
        databaseURL: "https://oak-and-olive-301320-default-rtdb.firebaseio.com",
        projectId: "oak-and-olive-301320",
        storageBucket: "oak-and-olive-301320.appspot.com",
        messagingSenderId: "1078353309732",
        appId: "1:1078353309732:web:ab9ec2b5b8d3bd745c68b1"
 };

 firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

 const provider = new firebase.auth.GoogleAuthProvider(); //gives access to google provider class from google authentication library
 provider.setCustomParameters({ prompt: 'select_account' })
 export const signInWithGoogle = () => auth.signInWithPopup(provider)
 
//  export const createUserProfile = async (userAuth, additionalData) => {

//  }

 

 export default firebase

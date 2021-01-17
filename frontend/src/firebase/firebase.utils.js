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

//  export const createUserProfileDocument = async (userAuth, additionalData) => { //userAuth = user obj i get back upon google signin

//  }

 firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

 const provider = new firebase.auth.GoogleAuthProvider(); //gives access to google provider class from google authentication library
 provider.setCustomParameters({ prompt: 'select_account' })
 export const signInWithGoogle = () => auth.signInWithPopup(provider)
 
 export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return; //if doesn't exist - do nothing
    //if DOES exist, query inside firestore for that user
    //firestore queryRef vs querysnapshot
        //query = request to firestore to give something back from db
            //firestore returns 2 types of obj: document, collection
    const userRef = firestore.doc(`users/${userAuth.uid}`)
        //userRef aka queryReference obj from firestore, does NOT have actual data of collection/doc,
        // it has PROPERTIES/DETAILS about it
        // [firestore.doc('/collection/:id/collection/...')]
        // [firestore.collections('/collection/id/collection')]
    
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName, email} = userAuth 
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef

    // console.log(snapShot)
}

 

 export default firebase

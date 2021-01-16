import React from 'react'
import firebase from 'firebase/app'

import {auth, signInWithGoogle} from '../firebase/firebase.utils'

class SignInForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {username, password} = this.state

       async function login(url, data) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            })
            // console.log(response)
            return response.json() 
        }

        login('http://localhost:3000/api/v1/users', {username, password})
        .then(data => {
            console.log(data)
        });
        // try {

        //     await auth().signInWithEmailAndPassword(email, password)
        //     this.setState({email: '', password: ''})
       
        // } 
        // .catch(error){
        //   console.log(error)
        // }
        // this.setState({email: '', password: ''})
        // console.log(this.state)

        
    }
        
        

        // handleClick = event => {
        //     event.preventDefault()
        //     firebase.auth().signinWithRedirect(provider)
        //     firebase.auth().getRedirectResult()
        //     .then((result) => {
        //         if(result.credential){
        //             let credential = result.credential 
        //             let token = credential.accessToken
        //         }
        //         let user = result.user
        //     }).catch((error) => {
        //         let errorCode = error.code 
        //         let errorMessage = error.errorMessage
        //         let email = error.email 
        //         let credential = error.credential
        //     })
        // }
        // emailStr = this.state.email.toString()
        // passStr = this.state.password.toString()
        // signInWithGoogle = () => {
        //     let provider = new firebase.auth.GoogleAuthProvider()
        //     firebase.auth().signInWithPopup(provider)
        //     .then((result) => {
        //         let credential = result.credential
        //         let token = credential.accessToken 
        //         let user = result.user 
        //     }).catch((error) => {
        //         let errorMessage = error.message
        //     })
        //     firebase.auth().setPersistence(firebase.Auth.Persistence.SESSION)
        //     .then(() => {
        //         return firebase.auth().signInWithEmailAndPassword(emailStr, passStr);
        //     }).catch((error) => {
        //         let message = error.message
        //     })
        // };
        

    render(){
        // let {email, password} = this.state

        // const signInWithGoogle = () => {
        //     let provider = new firebase.auth.GoogleAuthProvider()
        //     auth.signInWithPopup(provider)
        //     .then((result) => {
        //         console.log(result)
        //         // console.log(firebase.auth.OAuthCredential)
        //         let credential = result.credential
        //         let token = credential.accessToken 
        //         let user = result.user 

        //     }).catch((error) => {
        //         // let errorMessage = error.message
        //         let credential = error.credential
        //     })
        //     auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        //     .then((user) => {
        //         console.log(user)
        //         return firebase.auth().signInWithEmailAndPassword(email, password);

        //     }).catch((error) => {
        //         let message = error.message
    

        
    
        return(
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} name="email" value={this.state.email} type="email"/>
                <input onChange={this.handleChange} name="password" value={this.state.password} type="password" />
                <input type="submit" value="Log In"/>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            </form>
        )
    }

}


export default SignInForm 


import React from 'react'
import {auth, createUserProfileDoc} from '../firebase/firebase.utils'

import '../styles/signUpForm.styles.css'

// import {auth, createUserProfile, firebaseSignUpNewUsers} from '../firebase/firebase.utils'


class SignUpForm extends React.Component {

    constructor(){
        super()
        this.state={
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        }
    }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: [event.target.value]
    //     })
    // }

    // handleSubmit = async event => {
    //     console.log("here")
    //     event.preventDefault();
    //     const {username, password, email} = this.state 
    //     // console.log(email)
    //     // let passStr = password.toString()
    //     // let emailStr = email.toString()
    //     // try {
    //     //     const user = await auth.createUserWithEmailAndPassword(emailStr, passStr)
    //     //     createUserProfile(user, {username})
    //     //     console.log(user)
    //     //     this.setState({
    //     //         username: '',
    //     //         email: '',
    //     //         password: '',
    //     //         confirmPassword: ''
    //     //     })
    //     // } catch(error){
    //     //     console.log(error)
    //     // }
    
    //     // const form = event.currentTarget 
    //     // const url = form.action
        
    //     // const formData = new FormData(form)
    //     //  console.log(formData)
    //     //     try {
                
    //     //         const responseData = await postFormDataAsJson({url, formData})
    //     //         console.log({responseData})
    //     //     } 
    //     //     catch (error) {
    //     //         // console.log(error)
    //     //     }

    //     //    async function postData(url, data){
                
    //     //         const response = await fetch(url, {
    //     //             method: 'POST',
    //     //             mode: 'cors',
    //     //             headers: {
    //     //                 "Content-Type": "application/json",
    //     //                 "Accept": "application/json"
    //     //             },
    //     //             body: JSON.stringify(data)
                    
    //     //         });
    //     //         // return response.json();
    //     //     }
        

    //    postData('http://localhost:3000/api/v1/users/new', {username, email, password})
    //    .then(res => {
    //        console.log(res)
    //    })
    //    this.setState({
    //        username: '',
    //        password: '',
    //        email: '',
    //        confirmPassword: ''
    //    })
        
    // }

    // handleLogOut = async event => {
    //     event.preventDefault()
    //     const {username, password, email} = this.state
    //     // console.log(this.props)

    //     async function logout(url, data){
    //         // event.preventDefault()

    //             const response = await fetch(url, {
    //                 method: 'DELETE',
    //                 mode: 'cors',
    //                 headers: {
    //                     "Content-Type": "applciation/json",
    //                     "Accept": "application/json"
    //                 },
    //                 body: JSON.stringify(data)
    //             }) 
    //             return response.json()   
    //         }
    //         logout('http://localhost:3000/logout', {username, email, password})
    //     .then(data => {
    //         // data.json()
    //         console.log(data)
    //     })
    //     }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state 

        if(password !== confirmPassword){
            alert("passwords don't match!")
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDoc(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error){
            console.log(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
        
    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up-form-div">
                <h3 id="signup-title">New? Sign Up Below!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="displayName" className="form-label">Choose a display name</label><br/>
                     <input id="display-name" className="form-input" type="text" name="displayName" value={displayName} onChange={this.handleChange} required /><br />
                    <label for="email" className="form-label">Enter Email</label><br />
                    <input type="email" className="form-input" name="email" value={email} onChange={this.handleChange} required /><br />
                    <label for="password" className="form-label">Choose a Password</label><br />
                    <input type="password" className="form-input" name="password" value={password} onChange={this.handleChange} required /><br />
                    <label for="confirm-password" className="form-label">Confirm Password</label><br />
                    <input type="password" className="form-input" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required /><br />
                    <input type="submit" id="submit-button" value="Sign Up"/>
                </form>
            </div>

        )
    }

}


export default SignUpForm
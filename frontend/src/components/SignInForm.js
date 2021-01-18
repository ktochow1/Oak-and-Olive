import React from 'react'
import firebase from 'firebase/app'

import {auth, signInWithGoogle} from '../firebase/firebase.utils'

import '../styles/signInForm.styles.css'

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

    handleClick = e => {
        e.preventDefault()
         signInWithGoogle()
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch(error) {
            console.log(error)
        }
    }

    render(){ 
        return(
            <div className="sign-in-form-div">
            <h3 className="signin-title">I'm back!</h3>
            <form onSubmit={this.handleSubmit} >
                <label for="email" className="SI-form-label">Email</label><br />
                 <input className="SI-form-input" onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email} type="email"/><br />
                <label for="password" className="SI-form-label">Password</label><br />
                <input className="SI-form-input" onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password} type="password" /><br />
                <input className="submit-button" type="submit" value="Log In"/><br />
                <button className="submit-button" id="google-signin-btn" onClick={this.handleClick}>Sign In with Google</button>
            </form>
            </div>
        )
    }

}


export default SignInForm 


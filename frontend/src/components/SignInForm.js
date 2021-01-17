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

    handleClick = e => {
        e.preventDefault()
         signInWithGoogle()
    }

    render(){ 
        return(
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} placeholder="Email" name="email" value={this.state.email} type="email"/>
                <input onChange={this.handleChange} placeholder="Password" name="password" value={this.state.password} type="password" />
                <input type="submit" value="Log In"/>
                <button onClick={this.handleClick}>Sign In with Google</button>
            </form>
        )
    }

}


export default SignInForm 


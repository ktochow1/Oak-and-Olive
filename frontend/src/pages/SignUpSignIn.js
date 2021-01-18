import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import '../styles/signUpSignInComp.styles.css'

const SignUpSignIn = (userInfo) => {
    return(
        <div className="container">
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default SignUpSignIn

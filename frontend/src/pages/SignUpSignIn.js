import React from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'

const SignUpSignIn = (userInfo) => {
    return(
        <div>
            <h3>I don't have an account</h3>
            <SignUpForm />
            <h3>I'm back!</h3>
            <SignInForm />
        </div>
    )
}

export default SignUpSignIn

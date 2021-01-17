import React from 'react'
import {auth, createUserProfileDoc} from '../firebase/firebase.utils'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="displayName" value={displayName} placeholder="Display Name" onChange={this.handleChange} required />
                    <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} required />
                    <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} required />
                    <input type="password" name="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={this.handleChange} required />
                    <input type="submit" value="Sign Up"/>
                </form>
            </div>

        )
    }

}


export default SignUpForm
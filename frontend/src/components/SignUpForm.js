import React from 'react'

// import {auth, createUserProfile, firebaseSignUpNewUsers} from '../firebase/firebase.utils'


class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            username: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    handleSubmit = async event => {
        console.log("here")
        event.preventDefault();
        const {username, password, email} = this.state 
        // console.log(email)
        // let passStr = password.toString()
        // let emailStr = email.toString()
        // try {
        //     const user = await auth.createUserWithEmailAndPassword(emailStr, passStr)
        //     createUserProfile(user, {username})
        //     console.log(user)
        //     this.setState({
        //         username: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })
        // } catch(error){
        //     console.log(error)
        // }
    
        // const form = event.currentTarget 
        // const url = form.action
        
        // const formData = new FormData(form)
        //  console.log(formData)
        //     try {
                
        //         const responseData = await postFormDataAsJson({url, formData})
        //         console.log({responseData})
        //     } 
        //     catch (error) {
        //         // console.log(error)
        //     }

           async function postData(url, data){
                
                const response = await fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(data)
                    
                });
                // return response.json();
            }
        

       postData('http://localhost:3000/api/v1/users/new', {username, email, password})
       .then(res => {
           console.log(res)
       })
       this.setState({
           username: '',
           password: '',
           email: '',
           confirmPassword: ''
       })
        
    }

    handleLogOut = async event => {
        event.preventDefault()
        const {username, password, email} = this.state
        // console.log(this.props)

        async function logout(url, data){
            // event.preventDefault()

                const response = await fetch(url, {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        "Content-Type": "applciation/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(data)
                }) 
                return response.json()   
            }
            logout('http://localhost:3000/logout', {username, email, password})
        .then(data => {
            // data.json()
            console.log(data)
        })
        }
        
    render(){

        return(
            <div>
                <form name="form-data" onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Set a display name"/><br />
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your email"/><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter a password"/><br />
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="Confirm password"/><br />
                    <input type="submit"/>
                </form> <br />

                    <button onClick={this.handleLogOut}>Log Out</button>

            </div>

        )
    }

}


export default SignUpForm
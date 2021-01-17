import React from 'react'
import {Link} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import {auth} from '../../src/firebase/firebase.utils'
// import {connect} from 'react-redux'
import '../styles/navbar.styles.css'
// import Hat from '../components/Hat'

class NavBar extends React.Component {
    // handleClick = () => {
    //     this.props.image = false
    // }

    
    
    render(){
        const {currentUser} = this.props 
        return(
            <div className="topnav">
                <h1 className="title"><Link to="/">Oak and Olive</Link></h1>
                <div className="links">
                    <Link onClick={this.props.hideImage} to="/tops">Tops</Link>
                    <Link onClick={this.props.hideImage} to="/bottoms">Bottoms</Link>
                    <Link onClick={this.props.hideImage} to="/hats">Hats</Link>
                    <Link onClick={this.props.hideImage} to="/signUp">SignUp/SignIn</Link>
                    {/* <Link to="/logout">Sign Out</Link> */}
                    {/* <Link to="/current_user">Current User</Link> */}
                    {/* <Link to="/logout" onClick ={this.handleClick}>Log Out</Link> */}
                    {/* <Link className="bag" onClick={this.props.hideImage}>My Bag</Link> */}
                </div>
                {currentUser ? <div onClick={() => auth.signOut()}>Sign out</div> : <Link to='login'>Login</Link>}
                
                {/* <a className="new-arrivals" href="www.cc.com">New Arrivals</a> */}
                
            </div>
        )
    }
}

export default NavBar
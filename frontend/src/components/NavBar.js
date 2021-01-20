import React from 'react'
import {Link} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import {auth} from '../../src/firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from './Cart-Icon'

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
                    {/* <Link onClick={this.props.hideImage} to="/signUp">SignUp/SignIn</Link> */}
                    {/* <Link to="/logout">Sign Out</Link> */}
                    {/* <Link to="/current_user">Current User</Link> */}
                    {/* <Link to="/logout" onClick ={this.handleClick}>Log Out</Link> */}
                </div>
                <CartIcon />
                {currentUser ? <div id="dynamic-current-user" onClick={() => auth.signOut()}>Sign out</div> : <Link id="dynamic-current-user-link" onClick={this.props.hideImage} to="/signUp">Sign In</Link> }
                {/* <Link onClick={this.props.hideImage} to="/signUp">SignUp/SignIn</Link>} */}

                {/* <Link className="dynamic-current-user" to='login'>Login</Link>} */}
                
                {/* <a className="new-arrivals" href="www.cc.com">New Arrivals</a> */}
                
            </div>
        )
    }
}


//state obj passed into mapStateToProps is the root reducer's state
const mapStateToProps = state => ({
    currentUser: state.user.currentUser

})

export default connect(mapStateToProps)(NavBar)
import React from 'react'
import HomePage from './pages/HomePage'
import HatContainer from './containers/HatContainer'
import BottomContainer from './containers/BottomContainer'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUpSignIn from './pages/SignUpSignIn'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
// import {setCurrentUser} from './redux/user/user.actions'
// import Routes from './components/Routes'
// import SessionContext from './redux/setSessionCookie'

class App extends React.Component {

  componentDidMount(){
    // const setCurrentUser = this.props
    //user parameter is the user state in my app
    //auth subscriber (onAuthStateChanged) is always listening to user param and keeps sending
    //user authenticated obj UNTIL user signs out
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({
      //   currentUser: user
      // })
      // console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth)
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      // console.log(setCurrentUser)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  unsubscribeFromAuth = null 
  


    render(){
        return(
          // <SessionContext.Provider value={}>
          
            <>
            
            <NavBar hideImage={this.hideImage} />  
             <Switch>  
              <Route exact path='/'><HomePage /></Route>
              <Route path="/hats"><HatContainer /></Route>
              <Route path="/signUp" render={() => this.state.currentUser ? (<Redirect to='/' />) : (<SignUpSignIn />)}><SignUpSignIn /></Route>
              <Route path="/bottoms"><BottomContainer/></Route>
              {/* <Route path="/current_user"></Route> */}
              {/* <Route path="/logout"> */}
               
              {/* </Route> */}
            </Switch>   
           {/* </SessionContext.Provider> */}
          </>
        )
    }
}


// const mapStateToProps = ({user})=> ({
//   currentUser: user.currentUser
// })


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
//dispatch is way for redux to know whatever object being passed is an ACTION object

export default connect(null, mapDispatchToProps)(App)

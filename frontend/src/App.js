import React from 'react'
import HomePage from './pages/HomePage'
import PopularProducts from './components/PopularProducts'
import TopContainer from './containers/TopContainer'
import HatContainer from './containers/HatContainer'
import BottomContainer from './containers/BottomContainer'
import {Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUpSignIn from './pages/SignUpSignIn'
import {auth, createUserProfileDoc} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'
import Checkout from './pages/Checkout'
import '../src/styles/app.styles.css'
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
          <div>
            <NavBar hideImage={this.hideImage} />  
            <hr className="divider" />
             <Switch>  
             <Route path="/popular-products"><PopularProducts /></Route>
              <Route path="/tops"><TopContainer /></Route>
              <Route exact path='/'><HomePage /></Route>
              <Route path="/hats"><HatContainer /></Route>
              <Route exact path="/signUp" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignUpSignIn />)} />
              <Route path="/bottoms"><BottomContainer/></Route>
              <Route path="/checkout"><Checkout /></Route>
            </Switch>
          </div>
          
        )
        }
    
}



const mapStatToProps = ({user}) => ({
  currentUser: user.currentUser
}) 

/* off of state destructure userReducer => ({user})
now have access to this.props.currentUser  */

 const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})  

 /* /* /* //(dispatch) is way for redux to know whatever object being passed is an ACTION object  */

export default connect(mapStatToProps, mapDispatchToProps)(App)

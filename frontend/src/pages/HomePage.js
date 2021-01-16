import React from 'react'
// import NavBar from '../components/NavBar'
import '../styles/homepageimage.styles.css'
// import HatContainer from '../containers/HatContainer'
// import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hidden: false
        }
    }

    hideImage(){
    //    document.getElementsByClassName("home-page-image")[0].style.visibility  == 'visible' ? 'hidden' : 'visible';       
       document.getElementById("test").style.visibility=    document.getElementById("test").style.visibility === 'visible' ? 'hidden' : 'hidden';

    //    

   }

    render(){
        
        return(
            <div className="root">
                {/* <NavBar hideImage={this.hideImage}/>
                <Switch>
                    <Route path="/hats"><HatContainer /></Route>
                    <Route path="/tops">Tops</Route>
                    <Route path="/bottoms">Bottoms</Route>
                </Switch>   */}
                <div id="test" style={{visibility:"visible"}} className="home-page-image" >
                    <img alt="a goddess" id="goddess"  src="https://images.unsplash.com/photo-1592531594467-3d89af555906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" width="600" height="400"/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    image: state.image
})

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(HomePage)
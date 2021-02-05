import React from 'react'
import '../styles/homepageimage.styles.css'


class HomePage extends React.Component {
   
    render(){
        return(
            <div className="root">
                    <div id="test" style={{visibility:"visible"}}  >
                        <img alt="a goddess" id="goddess" className="home-page-image" src="https://images.unsplash.com/photo-1592531594467-3d89af555906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" width="740" height="500"/>
                    </div>
            </div>
        )
    }
}

export default HomePage
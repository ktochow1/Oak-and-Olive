// import React from 'react'
// import {Router, Switch, Route} from 'react-router'
// import {createBrowserHistory} from 'history' 
// import { SessionContext } from '../redux/setSessionCookie'
// import { useEffect } from 'react'

// export const Routes = () => {
//     const [session, setSession] = useState(getSessionCookie())
//     useEffect( () => {
//         setSession(getSessionCookie())
//     },
//     return(
//         <SessionContext.Provider value={session}>
//             <Router history={history}>
//                 <div className="navbar">
//                     <h6 style={{display: "inline"}}>Nav Bar</h6>
//                 </div>
//                 <Switch>
//                     <Route path="/login" component={LoginHandler} /> 
//                     <Route path="/logout" component={LogoutHandler} />
//                     <Route path="*" component={ProtectedHandler} />
//                 </Switch>
//             </Router>
//     </SessionContext.Provider>
//     )
// }
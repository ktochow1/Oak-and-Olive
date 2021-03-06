import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
// import Hat from './components/Hat'
// import rootReducer from './redux/root-reducer'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import store from './redux/store'
import './styles/index.styles.css'


// const store = createStore(rootReducer)



ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  /* </React.StrictMode>, */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

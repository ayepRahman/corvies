import React, { Component } from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import allReducers from "../../reducers/index-reducer"
import { firebaseApp } from "../../../config/firbase-config"
import { logUser } from "../../actions/index-action"
import $ from 'jquery';

import Navbar from "../Navbar/Navbar"
import Home from "../View/Home/Home"
import SignupPage from "../View/Signup/SignupPage"
import LoginPage from "../View/Login/LoginPage"
import MovieList from "../View/Movie/MovieListPage"

// const
const history = createBrowserHistory()
const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(allReducers, middleware);


// User Authentication / Routing
firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    console.log("User Sign In " + user );
    // keys/values from firebase
    const { name, displayName , email  } = user

    store.dispatch( logUser(name, displayName , email) )

    history.push("/movieList")
  } else {
    console.log("Signed Out");
    history.replace("/")
  }
})

class App extends Component {
    constructor(props) {
      super(props);
      
      // for materialize jquery dependencies
      $(document).ready( () => {

          // dropdown
          $(".dropdown-button").dropdown();

          // fixed side nav issues
          $('.button-collapse').sideNav({closeOnClick: true})
          
          $('.button-collapse').click(removeOverlay);
          
          function removeOverlay() {
          $('div[id^=sidenav-overlay]').remove();
          }
      })

  }


  render() {
    return (

      <Provider store={store}>
        <Router history={history} >
          <div>
            <Navbar />
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/movieList" component={MovieList}/>

          </div>
        </Router>
      </Provider>  
      
    );
  }
}

export default App;

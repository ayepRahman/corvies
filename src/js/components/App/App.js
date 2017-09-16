import React, { Component } from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from "../../reducers/index-reducer"

import Navbar from "../Navbar/Navbar"
import Home from "../View/Home/Home"
import SignupPage from "../View/Signup/SignupPage"
import LoginPage from "../View/Login/LoginPage"
import MovieList from "../View/MovieList/MovieListPage"

import { firebaseApp } from "../../../config/firbase-config"
import { logUser } from "../../actions/index-action"

// const
const history = createBrowserHistory()
const store = createStore(allReducers);


// User Authentication / Routing
firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    console.log("User has succcessfully sign in " + user );
    // keys/values from firebase
    const { name, email } = user

    store.dispatch(logUser( name, email))
    history.push("/movieList")
  } else {
    console.log("Signed Out / Need to Login");
    history.replace("/")
  }
})

class App extends Component {
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

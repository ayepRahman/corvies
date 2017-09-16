import React, { Component } from 'react';

import Navbar from "../Navbar/Navbar"
import Home from "../View/Home/Home"
import SignupPage from "../View/Signup/SignupPage"
import LoginPage from "../View/Login/LoginPage"
import MovieList from "../View/MovieList/MovieListPage"
import { firebaseApp } from "../../../config/firbase-config"

import {
  Router,
  Route,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// User Authentication / Routing
firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    console.log("User has succcessfully sign in " + user );
    history.push("/movieList")
  } else {
    console.log("Signed Out / Need to Login");
    history.replace("/")
  }
})


class App extends Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/movieList" component={MovieList}/>
        </div>
      </Router>
    );
  }
}

export default App;

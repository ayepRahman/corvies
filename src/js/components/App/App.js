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
import Movie from "../View/Movie/MoviePage"
import MovieArticlePage from "../View/Movie/MovieArticlePage"
import Footer from "../Footer/Footer"

// const
const history = createBrowserHistory()
const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(allReducers, middleware);


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

          $('.parallax').parallax();

          
      })

  }

  
  componentWillMount() {
    // User Authentication / Routing
    firebaseApp.auth().onAuthStateChanged( user => {
      if (user) {
        console.log("User Sign In " + user );
        // keys/values from firebase
        const { displayName , email  } = user
        store.dispatch( logUser(displayName , email) )
        history.push("/movie")
      } else {
        console.log("Signed Out");
        history.replace("/")
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
            <Route path="/movie" component={Movie} />
            <Route path="/signup" component={SignupPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/article/:id" component={MovieArticlePage}/>
            <Footer />
          </div>
        </Router>
      </Provider>  
      
    );
  }
}

export default App;

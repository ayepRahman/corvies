import React, { Component } from 'react';
import {
  Router,
  Route,
} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Home from "../View/Home/Home"
import SignupPage from "../View/Signup/SignupPage"
import LoginPage from "../View/Login/LoginPage"
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()



class App extends Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}

export default App;

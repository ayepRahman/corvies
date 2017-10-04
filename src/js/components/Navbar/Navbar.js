import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseApp } from "../../../config/firbase-config"

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    }
    
    
    
    componentDidMount() {
        firebaseApp.auth().onAuthStateChanged( (user) => {
            // console.log(user);
            if (user) {
                // console.log("User Status: ", user.Lc);
              this.setState({
                user
              })
            } else {
                this.setState({
                    user: null
                })
            }
          })
    }
    

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        

        return (
            <div>
                
                <nav>
                    <div id="navbarTop" className="nav-wrapper scrollspy">
                        <NavLink to='/' className="brand-logo" href="#">Corvies</NavLink>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <NavLink exact className='nav-link' to='/' >Home</NavLink>
                            </li>

                            {this.state.user ?
                                <li>
                                    <NavLink className='nav-link' to='/movie' >Search Movie</NavLink>
                                </li>
                                :
                                <li>
                                    <NavLink className='nav-link' to='/signup' >Register</NavLink>
                                </li>
                            }

                            {this.state.user ?
                                <li>
                                    <a href="#!" onClick={() => this.signOut()}>Sign Out</a>
                                </li>
                                :
                                <li>
                                    <NavLink className='nav-link' to='/login' href="#">Login</NavLink>
                                </li>
                            }

                        </ul>

                        {/* sidenav */}
                        <ul id="slide-out" className="side-nav">
                            
                            <li><NavLink exact className='nav-link' to='/' href="#">Home</NavLink></li>

                            <li><div className="divider"></div></li>

                            {this.state.user ?
                                <li>
                                    <NavLink className='nav-link' to='/movie' >Search Movie</NavLink>
                                </li>
                                :
                                <li>
                                    <NavLink className='nav-link' to='/signup' >Register</NavLink>
                                </li>
                            }
                            
                            <li><div className="divider"></div></li>

                            {this.state.user ?
                                <li>
                                    <a href="#!" onClick={() => this.signOut()}>Sign Out</a>
                                </li>
                                :
                                <li>
                                    <NavLink className='nav-link' to='/login' href="#">Login</NavLink>
                                </li>
                            }

                            <li><div className="divider"></div></li>
                            
                        </ul>
                        <a href="/" data-activates="slide-out" className="button-collapse"><i className="fa fa-bars fa-2x"></i></a>

                    </div>
                </nav>
               
            </div>
        );
    }
}

export default Navbar;

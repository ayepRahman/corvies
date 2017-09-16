import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { firebaseApp } from "../../../config/firbase-config"

class Navbar extends Component {
    constructor(props) {
        super(props);

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

    signOut() {
        firebaseApp.auth().signOut();
    }

    render() {
        return (
            <div>
                
                <nav>
                    <div className="nav-wrapper">
                        <NavLink to='/' className="brand-logo" href="#">Corvies</NavLink>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <NavLink exact className='nav-link' to='/' href="#">Home</NavLink>
                            </li>

                            <li>
                                <NavLink className='nav-link' to='/signup' href="#">Register</NavLink>
                            </li>

                            <li>
                                <NavLink className='nav-link' to='/login' href="#">Login</NavLink>
                            </li>

                            <li>
                                <a 
                                    className='dropdown-button nav-link' 
                                    href="#!"
                                    data-activates="dropdown1"
                                    >
                                    <i className="fa fa-chevron-down"></i> 
                                </a>
                            </li>
                        </ul>

                        {/* sidenav */}
                        <ul id="slide-out" className="side-nav">

                            <li>
                                <div className="user-view">
                                    <div className="background">
                                        <img src="images/office.jpg" alt="" />
                                    </div>
                                </div>
                            </li>

                            <li><div className="divider"></div></li>
                            
                            <li><NavLink exact className='nav-link' to='/' href="#">Home</NavLink></li>

                            <li><div className="divider"></div></li>

                            <li><NavLink className='nav-link' to='/signup' href="#">Register</NavLink></li>
                            
                            <li><div className="divider"></div></li>

                            <li><NavLink className='nav-link' to='/login' href="#">Login</NavLink></li>

                            <li><div className="divider"></div></li>

                            <li><a href="#!" onClick={() => this.signOut()}>Sign Out</a></li>
                            
                        </ul>
                        <a href="/" data-activates="slide-out" className="button-collapse"><i className="fa fa-bars fa-2x"></i></a>

                    </div>
                </nav>
                {/* dropdown */}
                <ul id="dropdown1" className="dropdown-content">
                    <li>
                        <NavLink className='nav-link' to='/signup' href="#">Register</NavLink>
                    </li>

                    <li className="divider"></li>

                    <li>
                        <NavLink className='nav-link' to='/login' href="#">Login</NavLink>
                    </li>

                    <li className="divider"></li>

                    <li>
                        <a href="#!" onClick={() => this.signOut()}>Sign Out</a>
                    </li>
                </ul> 
            </div>
        );
    }
}

export default Navbar;

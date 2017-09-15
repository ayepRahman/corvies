import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

class Navbar extends Component {
    constructor(props) {
        super(props);

        $(document).ready( () => {

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
                        </ul>

                        <ul id="slide-out" className="side-nav">
                            
                            <li><NavLink exact className='nav-link' to='/' href="#">Home</NavLink></li>

                            <li><div className="divider"></div></li>

                            <li><NavLink className='nav-link' to='/signup' href="#">Register</NavLink></li>
                            
                            <li><div className="divider"></div></li>

                            <li><NavLink className='nav-link' to='/login' href="#">Login</NavLink></li>
                            
                        </ul>
                        <a href="/" data-activates="slide-out" className="button-collapse"><i className="fa fa-bars fa-2x"></i></a>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

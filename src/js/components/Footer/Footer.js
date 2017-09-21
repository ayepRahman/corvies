import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
// import brandLogo from '../../assets/images/brand-logo2.png'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-distributed">

                    <div className="footer-left">
                        <h3>Corvies</h3>
                        <p className="footer-links">
                            <NavLink className='nav-link' to="/" href="#">
                                Home
                            </NavLink>
                            ·
                            <NavLink className='nav-link' to="/signup" href="#">
                                Register
                            </NavLink>
                            ·
                            <NavLink className='nav-link' to="/login" href="#">
                                Login
                            </NavLink>
                           
                        </p>
                        <p className="footer-company-name">Company Name &copy; 2015</p>

                        <div className="footer-icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-github"></i></a>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p>Contact Us</p>

                        <form action="#" method="post">

                            <input type="text" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message"></textarea>
                            <button>Send</button>

                        </form>

                    </div>

		        </footer>
            </div>
            
        );
    }
}

export default Footer;
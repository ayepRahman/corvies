import React, { Component } from 'react';
// import bannerImg from "../../../img/movie-banner.jpg"
import { NavLink } from "react-router-dom"


class Banner extends Component {

    render() {

        return (
            <div className="banner-img">

                <br/>

                <h1 className="header center teal-text text-lighten-2">Corvies</h1>
                <div className="row center">
                    <h5 className="header col s12 teal-text light">The Core place to search for your favourite movies</h5>
                </div>

                <div className="row center banner-btn">

                    <NavLink 
                        className='btn waves-effect waves-light teal lighten-1' to="/signup" 
                        href="#"
                        >
                        Get Started
                    </NavLink>
                </div>

            </div>
        );
    }
}

export default Banner;
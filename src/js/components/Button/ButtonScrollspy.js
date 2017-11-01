import React, { Component } from 'react';
import $ from "jquery"

class ScrollButton extends Component {
    constructor(props) {
        super(props);

        
    $(document).ready(function(){
        $('.scrollspy').scrollSpy();
    });

    }

    render() {
        return (
            <div>
                <a className="btn-floating teal right scrollBtn" href="#navbarTop">
                    <i className="fa fa-arrow-up center-align"></i>
                </a>
            </div>
        );
    }
}

export default ScrollButton;
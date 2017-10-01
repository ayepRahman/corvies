import React, { Component } from 'react';
import $ from "jquery"
import { reviewRef } from "../../../config/firbase-config"
import noImage from "../../../img/movie-banner.jpg"

class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: []
        }

        $(document).ready(function(){
            $('.collapsible').collapsible();
        });

    }

    componentDidMount() {

        let newReviews = []

        reviewRef.on("value", snap => {
            snap.forEach((childSnap) => {
                console.log("reviews Snap: ",childSnap.val());
                newReviews.push(childSnap.val())
            })
        })

        this.setState({
            reviews: newReviews
        })

    }
    

    render() {
        console.log("Reviews",this.state.reviews);
        let reviews = this.state.reviews

        let filteredReviews = reviews.filter((review) => {
            console.log("filter review",review.email);
        })
        
        return (
            <div className="container">
                <div className='row'>
                    <div className='col s12'>
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Reviews</h4></li>

                            <li className="collection-item avatar">
                                <img src={ noImage } alt="" className="circle" />
                                <span className="title"><b>Email</b></span>
                                <div className='divider'></div>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam. </p>

                                <a href="#!" className="secondary-content"><i className="fa fa-trash-o"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;
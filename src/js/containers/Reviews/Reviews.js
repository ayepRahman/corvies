import React, { Component } from 'react';
import { connect } from "react-redux"
import $ from "jquery"
import { db } from "../../../config/firbase-config"
import noImage from "../../../img/movie-banner.jpg"

class Reviews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: null
        }

        $(document).ready(function(){
            $('.collapsible').collapsible();
        });

    }

    componentWillMount() {
        // querying db equal to movei_id
        let reviewsRef = db.ref().child("reviews")
        let query = reviewsRef
                        .orderByChild("movie_id")
                        .equalTo(this.props.movieId)
         
        let filteredRev = []  
        
        query.on("value", (snap) => {
            this.setState({
                reviews: snap.val()
            })
        })

        // query.on("value", (snap) => {
        //     snap.forEach((childSnap) => {
        //         // console.log("ChidlSnap: ", childSnap.val());
        //         filteredRev.push(childSnap.val())
        //     })
        // })

        // this.setState({
        //     reviews: filteredRev
        // })
        

    }
    

    render() {
        let latestReviews = this.state.reviews
        console.log("Latest Reviews: ", latestReviews );
        
        // let filteredReviews = latestReviews.filter((review) => {
        //     return review.movie_id.indexOf(
        //         this.props.movieId
        //     )
        // })
        // console.log(JSON.stringify(Object.keys(latestReviews), null, 3));
        // console.log("Filtered Reviews: ", filteredReviews);
        
        return (
            <div className="container">
                <div className='row'>
                    <div className='col s12'>
                        <ul className="collection with-header">
                            <li className="collection-header"><h4>Reviews</h4></li>
                            { !latestReviews ? (
                                <div className=''></div>
                            ) : (
                                Object.keys(latestReviews).map((key, index) => {
                                    console.log(latestReviews[key].email);
                                    const { email, review } = latestReviews[key]
                                    return(
                                        <li className="collection-item avatar">
                                            <img src={ noImage } alt="" className="circle" />
                                            <span className="title"><b>{email}</b></span>
                                            <p>{review}</p>
                                            <a href="#!" className="secondary-content"><i className="fa fa-trash-o"></i></a>
                                        </li>
                                    )
                                })
                            ) }
                            

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;
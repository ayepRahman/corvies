import React, { Component } from 'react';
import { connect } from "react-redux"
import { db } from "../../../config/firbase-config"
import $ from "jquery"
import noImage from "../../../img/movie-banner.jpg"
import { setReviews } from "../../actions/index-action"

class Reviews extends Component {
    constructor(props) {
        super(props)

        $(document).ready(function(){
            $('.collapsible').collapsible();
        });

        // this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        // querying db equal to movei_id
        let reviewsRef = db.ref().child("reviews")
        let query = reviewsRef
                        .orderByChild("movie_id")
                        .equalTo(this.props.movieId)
        
        query.on("value", (snap) => {
            this.props.setReviews(snap.val())
        })

    }

    onDelete(key) {
        let reviewsRef = db.ref().child("reviews")
        reviewsRef.child(key).remove()
        console.log("delete receive", key);
    }
    

    render() {
        // console.log(this.props.reviews);
        let latestReviews = this.props.reviews
        let isUserEmail = this.props.users.email
        // console.log("isUser: ", this.props.users);
        // console.log(JSON.stringify(Object.keys(latestReviews), null, 3));
        // console.log("Filtered Reviews: ", filteredReviews);
        
        return (
            <div className="custom-container">
                <div className='row'>
                    <div className='col s12'>
                        <ul className="collection with-header ">
                            <li className="collection-header"><h4>Reviews</h4></li>
                            { 
                                !latestReviews ? (
                                    <li className="collection-item">
                                        <span className="title">
                                            Reviews not avaible yet
                                        </span>
                                    </li>
                                ) : (
                                    Object.keys(latestReviews).map((key, index) => {
                                        // console.log(key);
                                        const { email, review } = latestReviews[key]
                                        return(
                                            <li key={key} className="collection-item avatar">
                                                <img src={ noImage } alt="" className="circle" />
                                                <span className="title"><em>{email}</em></span>
                                                <p>{review}</p>
                                                {
                                                    isUserEmail === email  ? (
                                                        <a 
                                                        href="#!" 
                                                        className="secondary-content "
                                                        onClick={this.onDelete.bind(this, key)}
                                                        >
                                                            <i className="fa fa-trash-o fa-2x"></i>
                                                        </a>
                                                    ) : (
                                                       <div className=''></div>
                                                    )
                                                }   
                                            </li>
                                        )
                                    })
                                ) 
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log("MSTP REVIEWS: ", state.users);
    return {
        reviews: state.reviews,
        users: state.users
    }
}

export default connect(mapStateToProps , { setReviews })(Reviews);
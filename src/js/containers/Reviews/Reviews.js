import React, { Component } from 'react';
import { connect } from "react-redux"
import $ from "jquery"
import { db } from "../../../config/firbase-config"
import noImage from "../../../img/movie-banner.jpg"
import { setReviews } from "../../actions/index-action"

class Reviews extends Component {
    constructor(props) {
        super(props)

        $(document).ready(function(){
            $('.collapsible').collapsible();
        });

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
        console.log(this.props.reviews);
        let latestReviews = this.props.reviews
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
                                    // console.log(key);
                                    const { email, review } = latestReviews[key]
                                    return(
                                        <li key={key} className="collection-item avatar">
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

function mapStateToProps(state) {
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps , { setReviews })(Reviews);
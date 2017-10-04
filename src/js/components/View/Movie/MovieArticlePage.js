import React, { Component } from 'react';
import { connect } from "react-redux"
import LineLoading from "../../ProgressBar/LineLoading"
import MovieArticleBanner from "./MovieArticleBanner"
import AddReview from "../../../containers/Reviews/AddReview"
import Reviews from "../../../containers/Reviews/Reviews"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: {},
            loading: true,

        }
    }
    
    componentDidMount() {

        setTimeout(() => this.setState({
            loading: false
        }), 1000)
    }
     
    render() {
        // console.log("MOVIE ID:",this.props.match.params);
        const { id } = this.props.match.params
        const { loading } = this.state
        const isLogin = this.props.users.email
        console.log("islogin:",isLogin);
        // const isUser = this.state.users

        // display loading and rerender adter setinterval change to false
        if (loading) {
            return (
                <div className='custom-container_marginBottom'>
                    <div className='row'>
                        <div className='col s12 custom-container center-align'>
                            <LineLoading />
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <MovieArticleBanner 
                        loading={this.state.loading}
                        movieData={this.state.movieData}
                        id={id}
                    />

                    <Reviews 
                        movieId={ id }
                    />

                    {
                        !isLogin ? (
                            <div className='container'>
                                <div className="card-panel yellow accent-1">
                                    <span className="black-text">Please login to add Review</span>
                                </div>
                            </div>
                        ) : (
                            <AddReview movieId={ id } />
                        )
                    }
                   

                </div>
            )
        }
        

        
       
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, null)(MovieArticle)
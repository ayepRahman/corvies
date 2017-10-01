import React, { Component } from 'react';
import LineLoading from "../../ProgressBar/LineLoading"
import MovieArticleBanner from "./MovieArticleBanner"
import AddReview from "../../../containers/Reviews/AddReview"
import Reviews from "../../../containers/Reviews/Reviews"
import { firebaseApp } from "../../../../config/firbase-config"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: {},
            loading: true,
            users: null
        }
    }

    
    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({
                    users: user
                })
            }
        })
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
        const isUser = this.state.users

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

                    <Reviews />
                    {!isUser ? (
                            <div className=''></div>
                        ) : (
                            <AddReview movieId={ id } />
                        )
                    }
                   

                </div>
            )
        }
        

        
       
    }
}

export default MovieArticle;
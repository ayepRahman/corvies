import React, { Component } from 'react';
import LineLoading from "../../ProgressBar/LineLoading"
import MovieArticleBanner from "./MovieArticleBanner"
import AddReview from "../../Reviews/AddReview"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: {},
            loading: true
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
        let { loading } = this.state

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
                    <AddReview
                        movieId={ id }
                    />
                </div>
            )
        }
        

        
       
    }
}

export default MovieArticle;
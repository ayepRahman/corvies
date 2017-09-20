import React, { Component } from 'react';
import { connect } from "react-redux"
import MovieCard from "../../components/View/Movie/MovieCard"

class MovieContainer extends Component {

    render() {
        let searchMovies = this.props.searchMovies
        let genreMovies = this.props.genreMovies
        console.log("searchMovies:", searchMovies);
        console.log("genreMovies:", genreMovies);

        if(!searchMovies && !genreMovies) {
            return (
                <div className='center-align'>
                    <i className="fa fa-search fa-4x"></i>
                    <p>Please search a movie</p>
                </div>
            )
        } else if(searchMovies && genreMovies){
            return (
                <div className=''>
                    <MovieCard moviesData={genreMovies.data} />
                </div>
                
            )
        } else if(genreMovies) {
            return (
                <div className=''>
                    <MovieCard moviesData={genreMovies.data} />
                </div>
            )
        } else if(searchMovies) {
            return (
                <div className=''>
                    <MovieCard moviesData={searchMovies.data} />
                </div>
            )
        }

        
    }
}

function mapStateToProps(state) {
    return {
        searchMovies: state.searchMovies,
        genreMovies: state.genreMovies
    }
}

export default connect(mapStateToProps, null)(MovieContainer)
import React, { Component } from 'react';
import MovieListContainer from "../../../containers/MovieList/MovieListContainer"


class MovieListPage extends Component {
    
    
    render() {
        return (
            <div>
                MovieList
               <MovieListContainer />
            </div>
        );
    }
}

export default MovieListPage;
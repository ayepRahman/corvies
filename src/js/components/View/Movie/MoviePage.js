import React, { Component } from 'react';
import UserDetails from "../../../containers/User/UserDetails"
import SearchBar from "../../../containers/SearchBar/SearchBar"
import MovieCard from "../../../containers/Movie/MovieCard"

class MovieListPage extends Component {
    
    
    render() {
        return (
            <div>
                <div className='row custom-margin'>
                    <UserDetails />
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='row'>
                                <SearchBar />
                                <p>SelectCategory</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <MovieCard />
                </div>
     
            </div>
        );
    }
}

export default MovieListPage;
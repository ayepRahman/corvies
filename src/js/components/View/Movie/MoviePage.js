import React, { Component } from 'react';
import UserDetails from "../../../containers/User/UserDetails"
import SearchBar from "../../../containers/SearchBar/SearchBar"
import SelectBar from "../../../containers/SelectBar/SelectBar"
import MovieCard from "../../../containers/Movie/MovieCard"

class MovieListPage extends Component {
    
    
    render() {
        return (
            <div> 
                <div className='container'>
                    <div className='row custom-margin right-align'>
                        <UserDetails />
                    </div>
                </div>    
                

                <div className='container'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='row'>
                                <SearchBar />
                                <SelectBar />
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
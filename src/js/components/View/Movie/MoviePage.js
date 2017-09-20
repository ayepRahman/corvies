import React, { Component } from 'react';
import UserDetails from "../../../containers/User/UserDetails"
import SearchBar from "../../../containers/SearchBar/SearchBar"
import SelectBar from "../../../containers/SelectBar/SelectBar"
import MovieContainer from "../../../containers/Movie/MovieContainer"


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
                    {/* filter components */}
                    <div className='row'>
                        <div className='col s12'>
                            <SearchBar />
                            <SelectBar />
                        </div>
                    </div>
                                {/* Smart Component*/}
                    <div className='row'>
                        <MovieContainer />
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieListPage;
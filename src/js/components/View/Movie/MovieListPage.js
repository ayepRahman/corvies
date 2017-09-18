import React, { Component } from 'react';
import UserDetails from "../../../containers/User/UserDetails"

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
                                <p>SearchBar</p>
                                <p>SelectCategory</p>
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>
        );
    }
}

export default MovieListPage;
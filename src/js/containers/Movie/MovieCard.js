import React, { Component } from 'react';
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class MovieCard extends Component {

    render() {
        let searchMovies = this.props.searchMovies
        if(!searchMovies) {
            return (
                <div className=''>Are you searching yet?</div>
            )
        }
        return (
            <div>
                <ul>
                    {searchMovies.data.map((movie) => {
                        return(
                            <li key={movie.id} className=''>{movie.title}</li>
                        )
                    })}  
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchMovies: state.searchMovies
    }
}

export default connect(mapStateToProps, null)(MovieCard)
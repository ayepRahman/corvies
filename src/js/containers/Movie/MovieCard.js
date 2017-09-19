import React, { Component } from 'react';
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

class MovieCard extends Component {

    render() {
        let searchMovies = this.props.searchMovies
        if(!searchMovies) {
            return (
                <div className='row'>
                    <div className='col s12 center-align'>
                        <i className="fa fa-search fa-5x"></i>
                        <h5>not searching yet?</h5>
                    </div>
                    
                </div>
            )
        }
        return (
            <div>
                <div className="row">
                    {searchMovies.data.map((movie) => {
                        return(
                            <div key={movie.id} className="col s12 m12 l4">
                                <div className="card horizontal z-depth-4">
                                    <div className="card-image">
                                        <NavLink className='nav-link' to={"/movie/:"+ movie.id} href="#">
                                            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                                        </NavLink>  
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">  
                                            <h5><b>{movie.title}</b></h5>
                                            <p><i className="fa fa-star-o"></i>{movie.vote_average}</p>
                                            <p><i className="fa fa-calendar"></i>{movie.release_date}</p>
                                        </div>
                                        <div className="card-action">
                                            <NavLink className='nav-link' to={"/movie/:"+ movie.id} href="#">
                                                more details...
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}  
                </div>
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
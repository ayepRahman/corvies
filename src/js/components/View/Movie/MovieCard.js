import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class MovieCard extends Component {
    render() {
        let movies = this.props.moviesData

        return(
                <div>
                    { movies.map((movie) => {

                        return (

                            <div key={movie.id} className="col s12 m12 l4">
                                <div className="card horizontal z-depth-4">
                                    <div className="card-image">
                                        <NavLink className='nav-link' to={"/article/"+ movie.id} href="#">
                                            <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="" />
                                        </NavLink>  
                                    </div>
                                    <div className="card-stacked">
                                        <div className="card-content">  
                                            <h6><b>{movie.title}</b></h6>
                                            <p><i className="fa fa-star-o"></i>{movie.vote_average}</p>
                                            <p><i className="fa fa-calendar"></i>{movie.release_date}</p>
                                        </div>
                                        <div className="card-action">
                                            <NavLink className='nav-link' to={"/article/"+ movie.id} href="#">
                                                more details...
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        
                    })}

                </div>
            )
           
    }
}

export default MovieCard;
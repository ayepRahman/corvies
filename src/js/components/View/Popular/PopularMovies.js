import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import noImage from "../../../../img/no-image.png"

class PopularMovies extends Component {

    render() {
        let popularMovie = this.props.popularMovies
        // console.log(popularMovie);
        let popularCard = popularMovie.map((data) => {
            return (
                
                
                <div key={data.id} className="col s12 m12 l4">
                    <div className="card horizontal z-depth-4">
                        <div className="card-image">
                            <NavLink className='nav-link' to={"/article/"+ data.id } href="#">
                                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt={noImage} />
                            </NavLink>  
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">  
                                <h6><b>{data.title}</b></h6>
                                <p><i className="fa fa-star-o"></i>{data.vote_average}</p>
                                <p><i className="fa fa-calendar"></i>{data.release_date}</p>
                            </div>
                            <div className="card-action">
                                <NavLink className='nav-link' to={"/article/"+ data.id } href="#">
                                    more details...
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                       
            )
        })
        
        return (
            <div className="container">
                <div className='row center-align'>
                    <h4>Popular Movies</h4>
                </div>
                <div className='row'>
                    {popularCard}
                </div>    
            </div>
        );
    }
}

export default PopularMovies;
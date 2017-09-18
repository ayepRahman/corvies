import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class PopularMovies extends Component {

    render() {
        let popularMovie = this.props.popularMovies
        console.log(popularMovie);
        let popularCard = popularMovie.map((data) => {
            return (
                // <div className='col s12 m6 l4'>
                //     <div className='card large' key={data.id}>
                //         <div className='card-image'>
                //             <NavLink className='nav-link' to={"/moviemodal/:"+ data.id} href="#">
                //                 <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt='' />
                //             </NavLink>
                //             <span className="card-title">{data.title}</span>
                //         </div>
                //         <div className='card-content'>
                //             <p>{data.overview}</p>
                //         </div>
                //         <div className=''>
                //             <NavLink className='nav-link' to={"/moviemodal/:"+ data.id} href="#">
                //                 more details...
                //             </NavLink>
                //         </div>   
                //     </div>
                // </div>
                
                <div key={data.id} className="col s12 m12 l4">
                    <div className="card horizontal">
                        <div className="card-image">
                            <NavLink className='nav-link' to={"/movie/:"+ data.id} href="#">
                                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="" />
                            </NavLink>  
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">  
                                <h5><b>{data.title}</b></h5>
                                <p><i className="fa fa-star-o"></i>{data.vote_average}</p>
                                <p><i className="fa fa-calendar"></i>{data.release_date}</p>
                            </div>
                            <div className="card-action">
                                <NavLink className='nav-link' to={"/movie/:"+ data.id} href="#">
                                    more details...
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                       
            )
        })
        // <ul>
        // {popularMovies.map((data,index) => {
        //     return (
        //         <div key={data.id} className=''>
        //             <li className='' key={data.id}>{data.title}</li>
        //             <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="aha" />
        //         </div>
                
        //     )
        // })}
        // </ul>

        return (
            <div className="container">
                <div className='row center-align'>
                    <h3>Popular Movies</h3>
                </div>
                <div className='row'>
                    {popularCard}
                </div>    
            </div>
        );
    }
}

export default PopularMovies;
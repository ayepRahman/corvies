import React, { Component } from 'react';
import axios from "axios"
import noImage from "../../../../img/no-image.png"

class MovieArticleBanner extends Component {
    constructor(props) {
        super(props)

        this.state= {
            movieData: {}

        }
    }

    componentWillMount() {
        // const { id } = this.props.id
        const url = "https://api.themoviedb.org/3/movie/"+ this.props.id +"?api_key=" + process.env.REACT_APP_IMDB_KEY
        // console.log("In CDM", id);
        // console.log(url);
        axios.get(url)
        .then((response) => {
            // console.log("reponse: ", response);
            this.setState ({
                movieData: response.data,
            })
        })
        .catch((err) => {
            throw(err)
        })
    }

    render() {
        let movie = this.state.movieData
        
        const { 
            title, 
            release_date, 
            overview, 
            genres,
            vote_average ,
            backdrop_path, 
            poster_path 
        } = movie

        let bdImage = {
            position: "relative",
            backgroundImage: 'linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)),url(https://image.tmdb.org/t/p/original' + backdrop_path + ')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        // console.log("backdrop: ",backdrop_path);

        return (
            <div>
                <div className='col s12' style={bdImage}>
                    <div className='custom-container'>
                        <div className='row'>
                            <div className='col s12 m4 l4 '>
                                <div className="card z-depth-5">
                                    <div className="card-image">
                                        <img src={"https://image.tmdb.org/t/p/w500/" + poster_path } alt={noImage} />
                                    </div>  
                                </div>
                            </div>

                            <div className='col s12 m8 l6 card-articles'>
                                <h4>{title}</h4>
                                <ul>
                                    <li><i className="fa fa-calendar-o fa-1x"></i> {release_date}</li>
                                    <li><i className="fa fa-star-o fa-1x"></i>{vote_average}</li>
                                </ul>
                                <h5>Overview </h5>
                                <p>{overview}</p>
                            </div>
                
                        </div>
                    </div>
                </div>  
            </div>
        );
        
    }
}

export default MovieArticleBanner;
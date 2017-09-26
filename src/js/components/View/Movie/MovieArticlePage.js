import React, { Component } from 'react';
import axios from "axios"
import noImage from "../../../../img/no-image.png"
import CircleLoading from "../../ProgressBar/CircleLoading"
import LineLoading from "../../ProgressBar/LineLoading"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: {},
        }
    }
    
    componentWillMount() {
        const { id } = this.props.match.params
        const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + process.env.REACT_APP_IMDB_KEY
        // console.log("In CDM", id);
        // console.log(url);
        axios.get(url)
        .then((response) => {
            console.log(response);
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
            id,
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

        console.log(bdImage);

        console.log(genres)
        console.log("MOVIEDATA", movie)

        if (!movie) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 custom-container center-align'>
                            <LineLoading />
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='col s12' style={bdImage}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col s12 m4 l4 '>
                                    <div className="card z-depth-4">
                                        <div className="card-image">
                                            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path } alt={noImage} />
                                        </div>  
                                    </div>
                                </div>

                                <div className='col s12 m8 l8'>
                                    <h4>{title}</h4>
                                    <ul>
                                        <li className=''>{release_date}</li>
                                        <li className=''>{vote_average}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        <li className=''>{overview}</li>
                                        
                                    </ul>
                                </div>
                    
                            </div>
                        </div>
                    </div>  
                </div>
            );
        }

        
       
    }
}

export default MovieArticle;
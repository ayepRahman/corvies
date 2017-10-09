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
        console.log("M.A.B: ", movie);
        
        const { 
            title, 
            release_date, 
            overview,
            runtime, 
            genres,
            vote_average ,
            backdrop_path, 
            poster_path,
            tagline
        } = movie

        let bdImage = {
            position: "relative",
            backgroundImage: 'linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5)),url(https://image.tmdb.org/t/p/original' + backdrop_path + ')',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }

        console.log("type of:",typeof genres);

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
                                { 
                                    !genres ? (
                                        <div className=''></div>
                                    ) : (
                                        Object.keys(genres).map((key, index) => {
                                            console.log(genres[key].name);
                                            const { name } = genres[key]
                                            return(
                                                <ul className="custom-list">
                                                    <li className=''>{name}</li>
                                                </ul>
                                                
                                            )
                                        })
                                    )
                                   
                                }
                                <ul>
                                    <li><i className="fa fa-calendar-o fa-1x"></i> {release_date}</li>
                                    <li><i className="fa fa-star-o fa-1x"></i>{vote_average}</li>
                                    <li><i className="fa fa-clock-o fa-1x"></i>{runtime} mins</li>
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
import React, { Component } from 'react';
import axios from "axios"
import noImage from "../../../../img/no-image.png"
import CircleLoading from "../../ProgressBar/CircleLoading"
import LineLoading from "../../ProgressBar/LineLoading"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: "",
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
        const { title, release_date, overview, genres, backdrop_path } = movie

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
                    
                    <div className='custom-gradient col s12'>
                        <img 
                            className="article-bd-img"
                            src={"https://image.tmdb.org/t/p/original/" + backdrop_path } 
                            alt={"noImage"} 
                        />
                        <div className='container'>
                            <div className='row'>
                                <div className='col s12 m12 l4'>
    
                                </div>
                                <div className='col s12 m12 l4'>
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
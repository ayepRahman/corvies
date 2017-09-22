import React, { Component } from 'react';
import axios from "axios"
import noImage from "../../../../img/no-image.png"


class MovieArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieData: ""
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + process.env.REACT_APP_IMDB_KEY
        // console.log("In CDM", id);
        // console.log(url);
        axios.get(url)
        .then((response) => {
            console.log(response);
            this.setState ({
                movieData: response.data
            })
        })
        .catch((err) => {
            throw(err)
        })
    }
    

    render() {
        let movie = this.state.movieData
        // let genres = movie.genres
        // let backdrop = movie.backdrop_path
        const { title, release_date, overview, genres, backdrop_path } = movie
        console.log(genres);
    
        console.log("MOVIEDATA", movie)

        
        return (
            <div>
                <div className='custom-gradient'>
                    <img 
                        className="article-bd-img"
                        src={"https://image.tmdb.org/t/p/original/" + backdrop_path } 
                        alt={noImage} 
                    />
                </div>
            </div>
        );
    }
}

export default MovieArticle;
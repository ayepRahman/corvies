import React, { Component } from 'react';
import axios from "axios"

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

        console.log("MOVIEDATA", movie)
        return (
            <div className="container">
                <ul>
                    <li className=''>{movie.title}</li>
                    <li className=''>{movie.release_date}</li>
                    <li className=''>{movie.overview}</li>
                </ul>
            </div>
        );
    }
}

export default MovieArticle;
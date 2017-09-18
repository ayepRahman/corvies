import React, { Component } from 'react';
import PopularMovies from "../../View/Popular/PopularMovies"
import Banner from "../../Banner/Banner"
import axios from "axios"

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popularMovie: []
        }
    }

    componentDidMount() {
        const url = "https://api.themoviedb.org/3/movie/popular?api_key="+ process.env.REACT_APP_IMDB_KEY +"&language=en-US&page=1"
        // console.log(url);
        
        axios.get(url)
            .then((response) => {
    
                this.setState ({
                    popularMovie: response.data.results
                })
            })
            .catch((err) => {
                throw(err)
            })
    }

    render() {
        
        return (
            <div>
                <Banner />
                <PopularMovies 
                    popularMovies={this.state.popularMovie} 
                />      
            </div>
            
        )
    }
}

export default Home;
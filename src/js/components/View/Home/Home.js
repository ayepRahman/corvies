import React, { Component } from 'react';
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
        console.log(this.state.popularMovie);
        let popularMovies = this.state.popularMovie
        return (
            <div className=''>
                <ul>
                    {popularMovies.map((data,index) => {
                        return (
                            <div key={data.id} className=''>
                                <li className='' key={data.id}>{data.title}</li>
                                <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt="aha" />
                            </div>
                            
                        )
                    })}
                </ul>
                
            </div>
            
        )
    }
}

export default Home;
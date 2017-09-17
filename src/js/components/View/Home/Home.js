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
                console.log( response.data );
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
                            <li className='' key={data.id}>{data.title}</li>
                        )
                    })}
                </ul>
                
            </div>
            
        )
    }
}

export default Home;
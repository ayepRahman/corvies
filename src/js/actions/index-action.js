import { SIGNED_IN, FETCH_SEARCH, FETCH_GENRE, SET_REVIEWS} from "../constants"
import axios from "axios"


export function logUser( displayName, email ) {
    const action = {
        type: SIGNED_IN,
        displayName,
        email,
    }
    return action
}

export function searchQueryApi(query) {
    // console.log("Succesfully passing query to action", query);
    const url = "https://api.themoviedb.org/3/search/movie?api_key="+ process.env.REACT_APP_IMDB_KEY +"&language=en-US&page=1&include_adult=false&query=" + query
    
    return function(dispatch) {
        return axios.get(url)
            .then((res) => {
                dispatch({
                    type: FETCH_SEARCH,
                    payload: res.data.results
                })
            })
    }
}

export function selectQueryApi(genre_id) {
    console.log("Success passing ID:", genre_id );
    const url = "https://api.themoviedb.org/3/genre/"+ genre_id +"/movies?api_key="+ process.env.REACT_APP_IMDB_KEY +"&language=en-US&include_adult=false&sort_by=created_at.asc"

    return function(dispatch) {
        return axios.get(url)
            .then((res) => {
                dispatch({
                    type: FETCH_GENRE,
                    payload: res.data.results
                })
            })
    }
}

export function setReviews(reviews) {
    // console.log("FROM REVIEWS", reviews);
    const action = {
        type: SET_REVIEWS,
        reviews
    }
    return action
}


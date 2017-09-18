import { SIGNED_IN, FETCH_SEARCH } from "../constants"
import axios from "axios"


export function logUser(name, displayName, email ) {
    const action = {
        type: SIGNED_IN,
        name,
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


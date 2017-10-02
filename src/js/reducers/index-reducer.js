import { combineReducers } from 'redux';
import users from "./users-reducer";
import searchMovies from "./search-movie-reducer"
import genreMovies from "./select-genre-reducer"
import reviews from "./reviews-reducer"

const allReducers = combineReducers({
    users,
    searchMovies,
    genreMovies,
    reviews
});

export default allReducers;
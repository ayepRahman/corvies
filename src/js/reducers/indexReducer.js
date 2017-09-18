import { combineReducers } from 'redux';
import users from "./usersReducer";
import searchMovies from "./searchMovieReducer"

const allReducers = combineReducers({
    users,
    searchMovies
});

export default allReducers;
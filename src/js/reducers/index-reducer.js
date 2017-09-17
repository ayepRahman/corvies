import { combineReducers } from 'redux';
import users from "./usersReducer";
import popularMovie from "./popularMovieReducer";

const allReducers = combineReducers({
    users,
    popularMovie
});

export default allReducers;
import { combineReducers } from 'redux';
import UserReducer from "./users-reducer"
// import UserReducer from './users-reducer';
// import Data from './dump-reducer';

const allReducers = combineReducers({
    users: UserReducer,
});

export default allReducers;
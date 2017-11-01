import { FETCH_GENRE } from "../constants"


export default (state=null, action) => {
    switch (action.type) {
        case FETCH_GENRE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
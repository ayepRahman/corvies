import { FETCH_SEARCH } from "../constants"


export default (state=null, action) => {
    switch (action.type) {
        case FETCH_SEARCH:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
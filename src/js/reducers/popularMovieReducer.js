import { FETCH_POPULAR } from "../constants"

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_POPULAR:
        return {
            ...state,
            popular: action.payload
        }
        default:
            return state
    }

}


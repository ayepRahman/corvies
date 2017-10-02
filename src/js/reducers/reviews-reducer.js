import { SET_REVIEWS } from "../constants"


export default (state=null, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
import { SET_REVIEWS } from "../constants"


export default (state=null, action) => {
    switch (action.type) {
        case SET_REVIEWS:
            const { reviews } = action
            return reviews
        default:
            return state
    }
}
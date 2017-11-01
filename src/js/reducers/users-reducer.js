import { SIGNED_IN } from "../constants"

let user = {
    displayName: null,
    email: null
}

export default ( state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { displayName, email } = action;
            user = {
                displayName,
                email
            }
            return user;
        default:
            return state
    }
}
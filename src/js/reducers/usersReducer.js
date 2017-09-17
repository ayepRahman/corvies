import { SIGNED_IN } from "../constants"

let user = {
    name: '',
    email: null
}

export default ( state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { name, displayName, email } = action;
            user = {
                name,
                displayName,
                email
            }
            return user;
        default:
            return state
    }
}
import { SIGNED_IN } from "../constants/constants"

let user = {
    name: '',
    email: null
}

export default ( state = user, action) => {
    switch (action.type) {
        case SIGNED_IN:
            const { name, email } = action;
            user = {
                name,
                email
            }
            return user;
        default:
            return state
    }
}
import { SIGNED_IN } from "../constants/constants"

export function logUser(name, email) {
    const action = {
        type: SIGNED_IN,
        name: name,
        email: email
    }
    return action
}
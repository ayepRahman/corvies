import { SIGNED_IN } from "../constants"


export function logUser(name, displayName, email ) {
    const action = {
        type: SIGNED_IN,
        name,
        displayName,
        email,
    }
    return action
}


// Import components, functions, types, and variables
import { Dispatch } from 'redux'

// Types and interfaces
export interface IDispatchLogoutUser {
    type: typeof LOGOUT_USER
}

// Action
export const LOGOUT_USER = 'LOGOUT_USER'

export default function logoutUser() {
    return async (dispatch: Dispatch<IDispatchLogoutUser>) => {
        dispatch({
            type: LOGOUT_USER
        })
    }
}

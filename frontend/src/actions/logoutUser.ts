// Import components, functions, types, variables, and styles
import { Dispatch } from 'redux'

// Types and interfaces
export interface IDispatchLogoutUser {
    type: typeof LOGOUT_USER
}

// Action types
export const LOGOUT_USER = 'LOGOUT_USER'

// Actions
export default function logoutUser() {
    return async (dispatch: Dispatch<IDispatchLogoutUser>) => {
        dispatch({
            type: LOGOUT_USER
        })
    }
}

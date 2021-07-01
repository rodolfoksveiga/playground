// Import components, functions, types, variables, and styles
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    TDispatchRegisterUser
} from '../actions/registerUser'
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    TDispatchLoginUser
} from '../actions/loginUser'
import {
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    TDispatchLogoutUser
} from '../actions/logoutUser'
import { User } from '@firebase/auth-types'

// Types and interfaces
interface IAuthUserState {
    user: null | User
    message: null | string
}

type TDispatchAuthUser =
    | TDispatchRegisterUser
    | TDispatchLoginUser
    | TDispatchLogoutUser

// Global variables
const initialState = {
    user: null,
    message: null
}

// Reducer
export function authUserReducer(
    state: IAuthUserState = initialState,
    action: TDispatchAuthUser
) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                user: action.payload,
                message: null
            }
        case REGISTER_USER_FAIL:
            return {
                user: null,
                message: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                user: action.payload,
                message: null
            }
        case LOGIN_USER_FAIL:
            return {
                user: null,
                message: action.payload
            }
        case LOGOUT_USER_SUCCESS:
            return {
                user: null,
                message: null
            }
        case LOGOUT_USER_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}

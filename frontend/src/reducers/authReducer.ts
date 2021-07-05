// Import components, functions, types, variables, and styles
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    TDispatchRegisterUser
} from '../actions/registerUser'
import {
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    TDispatchLoadUser,
    IUser
} from '../actions/loadUser'
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    TDispatchLoginUser
} from '../actions/loginUser'
import { LOGOUT_USER, IDispatchLogoutUser } from '../actions/logoutUser'

// Types and interfaces
type TDispatchAuth =
    | TDispatchRegisterUser
    | TDispatchLoadUser
    | TDispatchLoginUser
    | IDispatchLogoutUser

interface IAuthState {
    isAuthenticated: boolean
    accessToken: null | string
    refreshToken: null | string
    user: null | IUser
    message: null | string
}

// Global variables
const initialState = {
    isAuthenticated: false,
    accessToken: null,
    refreshToken: null,
    user: null,
    message: null
}

// Reducer
export function authReducer(
    state: IAuthState = initialState,
    action: TDispatchAuth
) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                isAuthenticated: true,
                accessToken: null,
                refreshToken: null,
                user: null,
                message: action.payload
            }
        case REGISTER_USER_FAIL:
            return {
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                user: null,
                message: action.payload
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                message: null
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                accessToken: null,
                message: null
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.access,
                refreshToken: action.payload.refresh,
                message: null
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                message: action.payload
            }
        case LOGOUT_USER:
            return {
                isAuthenticated: false,
                accessToken: null,
                refreshToken: null,
                user: null,
                message: null
            }
        default:
            return state
    }
}

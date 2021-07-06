// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

// Types and interfaces
interface IRegisterUserSuccess {
    type: typeof REGISTER_USER_SUCCESS
    payload: string
}

interface IRegisterUserFail {
    type: typeof REGISTER_USER_FAIL
    payload: string
}

export type TDispatchRegisterUser = IRegisterUserSuccess | IRegisterUserFail

// Action
const URL = 'http://localhost:8000/api/auth/'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'

export default function registerUser(
    username: string,
    email: string,
    password: string,
    passwordConfirm: string
) {
    return async (dispatch: Dispatch<TDispatchRegisterUser>) => {
        const body = JSON.stringify({
            username: username,
            email: email,
            password: password,
            re_password: passwordConfirm
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            await axios.post(URL + 'users/', body, config)

            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload:
                    'User registered. Please, check your email to activate your account.'
            })
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: 'Registration failed. Please, try again.'
            })

            console.log(error)
        }
    }
}

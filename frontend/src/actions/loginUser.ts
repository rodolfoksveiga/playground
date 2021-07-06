// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

import loadUser from './loadUser'

// Types and interfaces
interface ILoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS
    payload: string
}

interface ILoginUserFail {
    type: typeof LOGIN_USER_FAIL
    payload: string
}

export type TDispatchLoginUser = ILoginUserSuccess | ILoginUserFail

// Action
const URL = 'http://localhost:8000/api/auth/'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

export default function loginUser(username: string, password: string) {
    return async (dispatch: Dispatch<TDispatchLoginUser>) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            username,
            password
        })

        try {
            const response = await axios.post(URL + 'jwt/create/', body, config)

            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: response.data.access
            })

            // TODO: Check which type to use here (Mon 05 Jul 2021 01:27:09 PM CEST).
            dispatch<any>(loadUser(response.data.access))
        } catch (error) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: 'No active account found with the given credentials.'
            })

            console.log(error)
        }
    }
}

// Import components, functions, types, variables, and styles
import axios from 'axios'
import { Dispatch } from 'redux'

// Types and interfaces
interface IActivateUserSuccess {
    type: typeof ACTIVATE_USER_SUCCESS
    payload: string
}

interface IActivateUserFail {
    type: typeof ACTIVATE_USER_FAIL
    payload: string
}

export type TDispatchActivateUser = IActivateUserSuccess | IActivateUserFail

// Action types
const URL = 'http://localhost:8000/api/auth/'
export const ACTIVATE_USER_SUCCESS = 'ACTIVATE_USER_SUCCESS'
export const ACTIVATE_USER_FAIL = 'ACTIVATE_USER_FAIL'

// Actions
export default function activateUser(userId: string, token: string) {
    return async (dispatch: Dispatch<TDispatchActivateUser>) => {
        const body = JSON.stringify({
            uid: userId,
            token: token
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            await axios.post(URL + 'users/activation/', body, config)

            dispatch({
                type: ACTIVATE_USER_SUCCESS,
                payload: 'Account is active!'
            })
        } catch (error) {
            let message = ''
            const hasUId = error.response.data.hasOwnProperty('uid')
            const hasToken = error.response.data.hasOwnProperty('token')

            if (hasUId) {
                message =
                    'Invalid user identification. Please, check your credentials.'
            } else if (hasToken) {
                message =
                    'Invalid activation token. Please, check your credentials.'
            } else {
                message = 'User is already active..! Please, login.'
            }

            dispatch({
                type: ACTIVATE_USER_FAIL,
                payload: message
            })

            console.log(error)
        }
    }
}

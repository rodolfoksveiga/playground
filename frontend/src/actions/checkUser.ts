// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

// Types and interfaces
interface ICheckUserSuccess {
    type: typeof CHECK_USER_SUCCESS
}

interface ICheckUserFail {
    type: typeof CHECK_USER_FAIL
}

export type TDispatchCheckUser = ICheckUserSuccess | ICheckUserFail

// Action
const URL = 'http://localhost:8000/api/auth/'
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS'
export const CHECK_USER_FAIL = 'CHECK_USER_FAIL'

export default function checkUser(token: null | string) {
    return async (dispatch: Dispatch<TDispatchCheckUser>) => {
        if (token) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            }

            const body = JSON.stringify({
                token: token
            })

            try {
                const response = await axios.post(
                    URL + 'jwt/verify/',
                    body,
                    config
                )

                if (response.data.code !== 'token_not_valid') {
                    dispatch({
                        type: CHECK_USER_SUCCESS
                    })
                } else {
                    dispatch({
                        type: CHECK_USER_FAIL
                    })
                }
            } catch (error) {
                dispatch({
                    type: CHECK_USER_FAIL
                })

                console.log(error)
            }
        } else {
            dispatch({
                type: CHECK_USER_FAIL
            })
        }
    }
}

// Import components, functions, types, variables, and styles
import { Dispatch } from 'react'
import { auth } from '../firebase'
import { User } from '@firebase/auth-types'

// Types and interfaces
interface ILoginUserSuccess {
    type: typeof LOGIN_USER_SUCCESS
    payload: User
}

interface ILoginUserFail {
    type: typeof LOGIN_USER_FAIL
    payload: string
}

export type TDispatchLoginUser = ILoginUserSuccess | ILoginUserFail

// Action types
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

// Actions
export default function loginUser(email: string, password: string) {
    return async (dispatch: Dispatch<TDispatchLoginUser>) => {
        try {
            const response = await auth.signInWithEmailAndPassword(
                email,
                password
            )

            if (response.user) {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: response.user
                })
            }
        } catch (error) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: 'Login failed. Please, try again.'
            })

            console.log(error)
        }
    }
}

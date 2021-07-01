// Import components, functions, types, variables, and styles
import { Dispatch } from 'redux'
import { auth } from '../firebase'
import { User } from '@firebase/auth-types'

// Types and interfaces
interface IRegisterUserSuccess {
    type: typeof REGISTER_USER_SUCCESS
    payload: User
}

interface IRegisterUserFail {
    type: typeof REGISTER_USER_FAIL
    payload: string
}

export type TDispatchRegisterUser = IRegisterUserSuccess | IRegisterUserFail

// Action types
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'

// Actions
export default function registerUser(email: string, password: string) {
    return async (dispatch: Dispatch<TDispatchRegisterUser>) => {
        try {
            const response = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            if (response.user) {
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: response.user
                })
            }
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: 'Registration failed. Please, try again.'
            })

            console.log(error)
        }
    }
}

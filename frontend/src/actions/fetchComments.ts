// Import components, functions, types, variables, and styles
import axios from 'axios'
import { Dispatch } from 'redux'

import { TComments } from '../components/blog/PostDetails'

// Action types
const URL = 'http://localhost:8000/api/comments/'
export const FETCH_COMMENTS_LOADING = 'FETCH_COMMENTS_LOADING'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const FETCH_COMMENTS_FAIL = 'FETCH_COMMENTS_FAIL'

// Types and interfaces
interface IFetchCommentsLoading {
    type: typeof FETCH_COMMENTS_LOADING
}

interface IFetchCommentsSuccess {
    type: typeof FETCH_COMMENTS_SUCCESS
    payload: TComments
}

interface IFetchCommentsFail {
    type: typeof FETCH_COMMENTS_FAIL
    payload: string
}

export type TDispatchFetchComments =
    | IFetchCommentsLoading
    | IFetchCommentsSuccess
    | IFetchCommentsFail

// Action
export default function fetchComments() {
    return async (dispatch: Dispatch<TDispatchFetchComments>) => {
        try {
            dispatch({
                type: FETCH_COMMENTS_LOADING
            })

            const response = await axios.get(URL)

            dispatch({
                type: FETCH_COMMENTS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: FETCH_COMMENTS_FAIL,
                payload: 'Error while loading the comments. Reload the page.'
            })

            console.log(error)
        }
    }
}

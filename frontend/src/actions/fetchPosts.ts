// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

import { TPosts } from '../components/blog/PostsList'

// Types and interfaces
interface IFetchPostsLoading {
    type: typeof FETCH_POSTS_LOADING
}

interface IFetchPostsSuccess {
    type: typeof FETCH_POSTS_SUCCESS
    payload: TPosts
}

interface IFetchPostsFail {
    type: typeof FETCH_POSTS_FAIL
    payload: string
}

export type TDispatchFetchPosts =
    | IFetchPostsLoading
    | IFetchPostsSuccess
    | IFetchPostsFail

// Action
export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL'

export default function fetchPosts() {
    return async (dispatch: Dispatch<TDispatchFetchPosts>) => {
        try {
            dispatch({
                type: FETCH_POSTS_LOADING
            })

            const response = await axios.get(process.env.POSTS_URL + '/')

            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: FETCH_POSTS_FAIL,
                payload: 'Error while loading the Posts List. Reload the page.'
            })

            console.log(error)
        }
    }
}

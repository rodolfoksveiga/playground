// Import components, functions, types, variables, and styles
import axios from 'axios'
import { Dispatch } from 'redux'

import { TPosts } from '../pages/blog/PostsList'

// Action types
const URL = 'http://localhost:8000/api/posts/'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL'

// Types and interfaces
interface IFetchPostsSuccess {
    type: typeof FETCH_POSTS_SUCCESS
    payload: TPosts
}

interface IFetchPostsFail {
    type: typeof FETCH_POSTS_FAIL
    payload: string
}

export type TDispatchFetchPosts = IFetchPostsSuccess | IFetchPostsFail

// Action
export default function fetchPosts() {
    return async (dispatch: Dispatch<TDispatchFetchPosts>) => {
        try {
            const response = await axios.get(URL)

            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: response.data,
            })
        } catch (error) {
            dispatch({
                type: FETCH_POSTS_FAIL,
                payload: 'Error while loading the Posts List. Reload the page.',
            })

            console.log(error)
        }
    }
}

// Import components, functions, types, variables, and styles
import {
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    TDispatchFetchPosts,
} from '../actions/fetchPosts'
import { TPosts } from '../pages/blog/PostsList'

// Types and interfaces
interface IFetchPostsState {
    data: TPosts | null
    message: string | null
}

// Global variables
const initialState = {
    data: null,
    message: null,
}

// Reducer
export function postsReducer(
    state: IFetchPostsState = initialState,
    action: any
) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                message: null,
            }
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                data: null,
                message: action.payload,
            }
        default:
            return state
    }
}

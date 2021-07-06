// Import components, functions, types, and variables
import {
    FETCH_POSTS_LOADING,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    TDispatchFetchPosts
} from '../actions/fetchPosts'
import { TPosts } from '../components/blog/PostsList'

// Types and interfaces
interface IPostsState {
    isLoading: boolean
    data: null | TPosts
    message: null | string
}

// Variables
const initialState = {
    isLoading: false,
    data: null,
    message: null
}

// Reducer
export function postsReducer(
    state: IPostsState = initialState,
    action: TDispatchFetchPosts
) {
    switch (action.type) {
        case FETCH_POSTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                message: null
            }
        case FETCH_POSTS_FAIL:
            return {
                isLoading: false,
                data: null,
                message: action.payload
            }
        default:
            return state
    }
}

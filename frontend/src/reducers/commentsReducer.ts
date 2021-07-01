// Import components, functions, types, variables, and styles
import {
    FETCH_COMMENTS_LOADING,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAIL,
    TDispatchFetchComments
} from '../actions/fetchComments'
import {
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAIL,
    TDispatchDeleteComment
} from '../actions/deleteComment'
import { TComments } from '../components/blog/PostDetails'

// Types and interfaces
interface ICommentsState {
    isLoading: boolean
    data: null | TComments
    message: null | string
}

type TDispatchComment = TDispatchFetchComments | TDispatchDeleteComment

// Global variables
const initialState = {
    isLoading: false,
    data: null,
    message: null
}

// Reducer
export function commentsReducer(
    state: ICommentsState = initialState,
    action: TDispatchComment
) {
    switch (action.type) {
        case FETCH_COMMENTS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                isLoading: false,
                data: action.payload,
                message: null
            }
        case FETCH_COMMENTS_FAIL:
            return {
                isLoading: false,
                data: null,
                message: action.payload
            }
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                message: null
            }
        case DELETE_COMMENT_FAIL:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

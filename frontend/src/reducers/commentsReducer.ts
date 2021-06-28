// Import components, functions, types, variables, and styles
import {
    FETCH_COMMENTS_LOADING,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAIL,
    TDispatchFetchComments,
} from '../actions/fetchComments'
import { TComments } from '../pages/blog/PostDetails'

// Types and interfaces
interface IFetchCommentsState {
    isLoading: boolean
    data: null | TComments
    message: null | string
}

// Global variables
const initialState = {
    isLoading: false,
    data: null,
    message: null,
}

// Reducer
export function commentsReducer(
    state: IFetchCommentsState = initialState,
    action: TDispatchFetchComments
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
                message: null,
            }
        case FETCH_COMMENTS_FAIL:
            return {
                isLoading: false,
                data: null,
                message: action.payload,
            }
        default:
            return state
    }
}

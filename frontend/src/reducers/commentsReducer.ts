// Import components, functions, types, variables, and styles
import {
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAIL,
    TDispatchFetchComments,
} from '../actions/fetchComments'
import { TComments } from '../pages/blog/PostDetails'

// Types and interfaces
interface IFetchCommentsState {
    data: TComments | null
    message: string | null
}

// Global variables
const initialState = {
    data: null,
    message: null,
}

// Reducer
export function commentsReducer(
    state: IFetchCommentsState = initialState,
    action: any
) {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                message: null,
            }
        case FETCH_COMMENTS_FAIL:
            return {
                ...state,
                data: null,
                message: action.payload,
            }
        default:
            return state
    }
}

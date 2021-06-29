// Import components, functions, types, variables, and styles
import axios from 'axios'
import { Dispatch } from 'redux'

// Types and interfaces
interface IDeleteCommentSuccess {
    type: typeof DELETE_COMMENT_SUCCESS
}

interface IDeleteCommentFail {
    type: typeof DELETE_COMMENT_FAIL
    payload: string
}

export type TDispatchDeleteComment = IDeleteCommentSuccess | IDeleteCommentFail

// Action types
const URL = 'http://localhost:8000/api/comments/'
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCESS'
export const DELETE_COMMENT_FAIL = 'DELETE_COMMENT_FAIL'

// Action
export default function deleteComment(id: string) {
    return async (dispatch: Dispatch<TDispatchDeleteComment>) => {
        try {
            await axios.delete(URL + id + '/')

            dispatch({
                type: DELETE_COMMENT_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: DELETE_COMMENT_FAIL,
                payload: 'Error while deleting the comment. Try again.'
            })

            console.log(error)
        }
    }
}

// Import components, functions, types, and variables
import axios from 'axios'
import { Dispatch } from 'redux'

import { IComment } from '../components/blog/PostDetails'
import { ICommentForm } from '../components/blog/CommentForm'

// Types and interfaces
interface ICreateCommentSuccess {
    type: typeof CREATE_COMMENT_SUCCESS
    payload: IComment
}

interface ICreateCommentFail {
    type: typeof CREATE_COMMENT_FAIL
    payload: string
}

export type TDispatchCreateComment = ICreateCommentSuccess | ICreateCommentFail

// Action
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCESS'
export const CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL'

export default function createComment(form: ICommentForm) {
    return async (dispatch: Dispatch<TDispatchCreateComment>) => {
        try {
            const response = await axios.post(
                process.env.COMMENTS_URL + '/',
                form
            )

            dispatch({
                type: CREATE_COMMENT_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: CREATE_COMMENT_FAIL,
                payload:
                    'Error while creating the comment. Check the input fields.'
            })

            console.log(error)
        }
    }
}

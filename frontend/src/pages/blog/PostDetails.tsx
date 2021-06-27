// Import components, functions, types, variables, and styles
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { TRootState } from '../../reducers/rootReducer'
import { TPosts } from './PostsList'

// Types and interfaces
export interface ICommentParams {
    id: string
}

interface IComment {
    id: number
    modified_at: string
    post: number
    deleted: boolean
    user: number
}

export type TComments = IComment[]

interface IPostDetailsProps {
    posts: null | TPosts
    comments: null | TComments
    message: null | string
}

// Component
export function PostDetails({ posts, comments, message }: IPostDetailsProps) {
    const history = useHistory()
    const { id } = useParams<ICommentParams>()

    return <div></div>
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    posts: state.posts.data,
    comments: state.comments.data,
})

export default connect(mapStateToProps)(PostDetails)

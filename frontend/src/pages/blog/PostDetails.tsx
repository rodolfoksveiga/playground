// Import components, functions, types, variables, and styles
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'

import { TRootState } from '../../reducers/rootReducer'
import { TPosts } from './PostsList'

// Types and interfaces
export interface ICommentParams {
    id: string
}

interface IComment {
    id: number
    modified_at: string
    comment: string
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
    const { id } = useParams<ICommentParams>()

    let post = null
    if (posts) {
        post = posts.find((item) => String(item.id) === id)
    }

    return (
        <Container>
            {message ? (
                <h3>{message}</h3>
            ) : (
                post && (
                    <Container className="d-flex flex-column justify-content-center">
                        <img
                            className="my-3 shadow"
                            src={post.image}
                            alt={post.legend}
                        />
                        <h2 className="display-2 text-center my-3">
                            {post.title}
                        </h2>
                        <div>{parse(post.body)}</div>
                    </Container>
                )
            )}
        </Container>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    posts: state.posts.data,
    comments: state.comments.data
})

export default connect(mapStateToProps)(PostDetails)

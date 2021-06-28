// Import components, functions, types, variables, and styles
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { useEffect } from 'react'

import { TRootState } from '../../reducers/rootReducer'
import { TPosts } from './PostsList'
import fetchComments from '../../actions/fetchComments'
import CommentCard from './CommentCard'

// Types and interfaces
export interface ICommentParams {
    id: string
}

interface IComment {
    id: number
    modified_at: string
    body: string
    post: number
    deleted: boolean
    username: string
}

export type TComments = IComment[]

interface IPostDetailsProps {
    posts: null | TPosts
    comments: null | TComments
    message: null | string
    fetchComments: Function
}

// Component
export function PostDetails({
    posts,
    comments,
    message,
    fetchComments
}: IPostDetailsProps) {
    const { id } = useParams<ICommentParams>()

    useEffect(() => {
        fetchComments()
    }, [fetchComments])

    let post = null
    if (posts) {
        post = posts.find((item) => String(item.id) === id)
    }

    let filteredComments = null
    if (comments) {
        console.log(comments)
        filteredComments = comments.filter((item) => String(item.post) === id)
    }

    return (
        <Container>
            {message ? (
                <h3>{message}</h3>
            ) : (
                post && (
                    <Container className="d-flex flex-column justify-content-center shadow">
                        <img
                            className="my-3 shadow"
                            src={post.image}
                            alt={post.legend}
                        />
                        <h2 className="display-2 mt-3 mb-1">{post.title}</h2>
                        <div className="mx-2">{parse(post.body)}</div>
                    </Container>
                )
            )}
            {filteredComments && (
                <Container className="d-flex flex-column justify-content-center">
                    <h3 className="display-4 mt-4 mx-3 px-3 border shadow">
                        Comments
                    </h3>
                    {filteredComments.map((comment) => {
                        return (
                            <CommentCard
                                username={comment.username}
                                body={comment.body}
                                time={comment.modified_at}
                            />
                        )
                    })}
                </Container>
            )}
        </Container>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    posts: state.posts.data,
    comments: state.comments.data
})

export default connect(mapStateToProps, { fetchComments })(PostDetails)

// Import components, functions, types, variables, and styles
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'

import { TRootState } from '../../reducers/rootReducer'
import { TPosts } from './PostsList'
import fetchComments from '../../actions/fetchComments'
import CommentCard from './CommentCard'
import { Button, Container, Row } from 'react-bootstrap'
import CommentForm from './CommentForm'

// Types and interfaces
export interface ICommentParams {
    id: string
}

export interface IComment {
    id: number
    modified_at: string
    body: string
    post: number
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
    const [triggerReload, setTriggerReload] = useState<boolean>(false)
    const [toggleCreate, setToggleCreate] = useState<boolean>(false)
    const [vertical, setVertical] = useState<boolean>(window.innerWidth >= 768)

    useEffect(() => {
        fetchComments()
        window.addEventListener('resize', () =>
            setVertical(window.innerWidth >= 768)
        )
        setTriggerReload(false)
    }, [fetchComments, triggerReload])

    let post = null
    if (posts) {
        post = posts.find((item) => String(item.id) === id)
    }

    let filteredComments = null
    if (comments) {
        filteredComments = comments.filter((item) => String(item.post) === id)
    }

    function handleToggleCreate() {
        setToggleCreate(!toggleCreate)
    }

    function handleTriggerReload() {
        setTriggerReload(!triggerReload)
    }

    return (
        <Container>
            {message ? (
                <p className="display-4">{message}</p>
            ) : (
                post && (
                    <Container className="d-flex flex-column justify-content-center shadow">
                        <img
                            className="my-3 shadow"
                            src={post.image}
                            alt={post.legend}
                        />
                        <h2 className="display-3 text-center mt-3 mb-1">
                            {post.title}
                        </h2>
                        <div className="mx-2">{parse(post.body)}</div>
                    </Container>
                )
            )}
            <Container className="my-3">
                <h3 className="display-4 mb-4 mx-3 px-3 border shadow">
                    Comments
                </h3>
                {!toggleCreate ? (
                    <Row className="justify-content-center">
                        <Button
                            className="font-weight-bold p-1 p-md-3 shadow"
                            variant="success"
                            onClick={handleToggleCreate}
                        >
                            Add a new comment
                        </Button>
                    </Row>
                ) : (
                    <CommentForm
                        initialFormData={{
                            body: '',
                            post: Number(id),
                            user: 1
                        }}
                        vertical={vertical}
                        handleToggleCreate={handleToggleCreate}
                        handleTriggerReload={handleTriggerReload}
                    />
                )}
            </Container>
            {filteredComments && (
                <Container>
                    {filteredComments.map((comment) => {
                        return (
                            <CommentCard
                                key={'c' + String(comment.id)}
                                comment={comment}
                                vertical={vertical}
                                handleTriggerReload={handleTriggerReload}
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

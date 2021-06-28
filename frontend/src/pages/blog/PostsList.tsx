import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import fetchPosts from '../../actions/fetchPosts'
import fetchComments from '../../actions/fetchComments'
import { TRootState } from '../../reducers/rootReducer'
import PostCard from './PostCard'
import { Container } from 'react-bootstrap'

// Types and interfaces
export interface IPost {
    id: number
    created_at: string
    title: string
    body: string
    deleted: boolean
}

export type TPosts = IPost[]

interface IPostsListProps {
    posts: null | TPosts
    message: null | string
    fetchPosts: Function
    fetchComments: Function
}

// Component
export function PostsList({
    posts,
    message,
    fetchPosts,
    fetchComments
}: IPostsListProps) {
    const history = useHistory()

    useEffect(() => {
        fetchPosts()
        fetchComments()
    }, [fetchPosts, fetchComments])

    return (
        <Container
            fluid="md"
            className="d-flex flex-wrap justify-content-center"
        >
            {message ? (
                <h3>{message}</h3>
            ) : (
                posts &&
                posts.map((post) => {
                    return (
                        <PostCard
                            title={post.title}
                            date={post.created_at}
                            id={post.id}
                        />
                    )
                })
            )}
        </Container>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    posts: state.posts.data,
    message: state.posts.message
})

export default connect(mapStateToProps, { fetchPosts, fetchComments })(
    PostsList
)

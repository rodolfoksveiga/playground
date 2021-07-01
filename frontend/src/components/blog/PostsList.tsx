import { useEffect } from 'react'
import { connect } from 'react-redux'

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
    image: string
    legend: string
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
    useEffect(() => {
        fetchPosts()
        fetchComments()
    }, [fetchPosts, fetchComments])

    return (
        <Container fluid="md" className="d-flex flex-column align-items-center">
            <h1 className="display-3">Blog Posts</h1>
            {message ? (
                <p className="display-4">{message}</p>
            ) : (
                <Container className="d-flex flex-wrap justify-content-center align-items-center">
                    {posts &&
                        posts.map((post) => {
                            return (
                                <PostCard
                                    title={post.title}
                                    image={post.image}
                                    legend={post.legend}
                                    date={post.created_at}
                                    id={post.id}
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
    message: state.posts.message
})

export default connect(mapStateToProps, { fetchPosts, fetchComments })(
    PostsList
)

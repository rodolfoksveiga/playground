import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import fetchPosts from '../../actions/fetchPosts'
import fetchComments from '../../actions/fetchComments'
import { TRootState } from '../../reducers/rootReducer'

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
    fetchComments,
}: IPostsListProps) {
    const history = useHistory()

    useEffect(() => {
        fetchPosts()
        fetchComments()
    }, [fetchPosts, fetchComments])

    return (
        <div>
            {message ? (
                <h3>{message}</h3>
            ) : (
                posts &&
                posts.map((post) => {
                    return (
                        <div className="text-center">
                            <h2>{post.title}</h2>
                            <h3>{post.body}</h3>
                        </div>
                    )
                })
            )}
        </div>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    posts: state.posts.data,
    message: state.posts.message,
})

export default connect(mapStateToProps, { fetchPosts, fetchComments })(
    PostsList
)

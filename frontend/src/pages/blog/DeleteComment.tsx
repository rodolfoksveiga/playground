// Import components, functions, types, variables, and styles
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import deleteComment from '../../actions/deleteComment'

// Types and interfaces
interface IDeleteCommentProps {
    id: number
    deleteComment: Function
}

// Main component
export function DeleteComment({ id, deleteComment }: IDeleteCommentProps) {
    function handleDelete() {
        deleteComment(id)
    }

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
    )
}

// Connect to Redux
export default connect(null, { deleteComment })(DeleteComment)

// Import components, functions, types, and variables
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import deleteComment from '../../actions/deleteComment'

// Types and interfaces
interface IDeleteCommentProps {
    id: number
    deleteComment: Function
    handleTriggerReload: Function
}

// Component
export function DeleteComment({
    id,
    deleteComment,
    handleTriggerReload
}: IDeleteCommentProps) {
    function handleDelete() {
        deleteComment(id)
        handleTriggerReload()
    }

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
    )
}

// Redux
export default connect(null, { deleteComment })(DeleteComment)

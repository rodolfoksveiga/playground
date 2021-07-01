import { useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import CommentForm from './CommentForm'
import DeleteComment from './DeleteComment'
import { IComment } from './PostDetails'

interface ICommentCardProps {
    comment: IComment
    vertical: boolean
    handleTriggerReload: Function
}

export default function CommentCard({
    comment,
    vertical,
    handleTriggerReload
}: ICommentCardProps) {
    const [toggleUpdate, setToggleUpdate] = useState<boolean>(false)

    function handleToggleUpdate() {
        setToggleUpdate(!toggleUpdate)
    }

    const initialFormData = {
        ...comment,
        user: 1
    }

    return !toggleUpdate ? (
        <Card className="my-2 mx-5 shadow">
            <Container fluid className="p-0">
                <Row className="m-0">
                    <Col md={10} className="px-0">
                        <Card.Header
                            className="font-weight-bold py-1 px-3"
                            as="h4"
                        >
                            {comment.username}
                            <Card.Subtitle
                                className="font-italic mt-1 text-muted"
                                style={{ fontSize: '0.75rem' }}
                            >
                                {comment.modified_at}
                            </Card.Subtitle>
                        </Card.Header>
                        <Card.Body className="py-1 px-3">
                            <Card.Text>{comment.body}</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col
                        md={2}
                        className="d-flex border-top border-left py-1 py-md-0 m-0 text-center justify-content-center align-items-center"
                    >
                        <ButtonGroup vertical={vertical}>
                            <Button onClick={handleToggleUpdate}>Update</Button>
                            <DeleteComment
                                id={comment.id}
                                handleTriggerReload={handleTriggerReload}
                            />
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </Card>
    ) : (
        <CommentForm
            initialFormData={initialFormData}
            vertical={vertical}
            handleTriggerReload={handleTriggerReload}
            handleToggleUpdate={handleToggleUpdate}
        />
    )
}

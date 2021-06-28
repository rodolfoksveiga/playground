import { Card, Button } from 'react-bootstrap'

interface ICommentCardProps {
    username: string
    body: string
    time: string
}

export default function CommentCard({
    username,
    body,
    time
}: ICommentCardProps) {
    return (
        <Card className="my-2 mx-5 shadow">
            <Card.Header className="font-weight-bold py-1 px-3" as="h4">
                {username}
                <Card.Subtitle className="mt-1 text-muted">
                    {time}
                </Card.Subtitle>
            </Card.Header>
            <Card.Body className="py-1 px-3">
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

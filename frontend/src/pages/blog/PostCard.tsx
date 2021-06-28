import { Card, Button } from 'react-bootstrap'

interface IPostCardProps {
    title: string
    date: string
    id: number
}

export default function PostCard({ title, date, id }: IPostCardProps) {
    return (
        <Card className="m-1 m-md-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{date}</Card.Text>
                <Button variant="primary" href={'/blog/' + id + '/'}>
                    Read more
                </Button>
            </Card.Body>
        </Card>
    )
}

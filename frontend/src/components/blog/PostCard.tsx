// Import components, functions, types, and variables
import { Card, Button } from 'react-bootstrap'

// Types and interfaces
interface IPostCardProps {
    title: string
    image: string
    legend: string
    date: string
    id: number
}

// Component
export default function PostCard({
    title,
    image,
    legend,
    date,
    id
}: IPostCardProps) {
    return (
        <Card className="m-2 m-md-3 shadow" style={{ width: '18rem' }}>
            <Card.Img
                className="p-1 pb-0"
                variant="top"
                src={image}
                alt={legend}
            />
            <Card.Body className="text-center">
                <Card.Title className="font-weight-bold" as="h2">
                    {title}
                </Card.Title>
                <Card.Text className="font-italic text-muted">{date}</Card.Text>
                <Button variant="primary" href={'/blog/' + id + '/'}>
                    Read more
                </Button>
            </Card.Body>
        </Card>
    )
}

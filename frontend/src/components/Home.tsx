import { Col, Container, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <Container className="h-75">
            <Row style={{ height: '40vw' }}>
                <Col xs={7} className="border">
                    Text
                </Col>
                <Col xs={5} className="border">
                    Text
                </Col>
            </Row>
        </Container>
    )
}

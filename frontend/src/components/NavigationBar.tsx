import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavigationBar() {
    return (
        <Navbar className="d-flex flex-md-column flex-lg-row">
            <Navbar.Brand>Rodolfo Kirch Veiga</Navbar.Brand>
            <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resume/">Resume</Nav.Link>
                <Nav.Link href="/projects/">Projects</Nav.Link>
                <Nav.Link href="/blog/">Blog</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

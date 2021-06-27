import { Navbar, Nav } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar className="d-flex flex-column flex-md-row justify-content-between">
            <Navbar.Brand className="ml-2">Rodolfo Kirch Veiga</Navbar.Brand>
            <Nav className="mr-2">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resume/">Resume</Nav.Link>
                <Nav.Link href="/projects/">Projects</Nav.Link>
                <Nav.Link href="/blog/">Blog</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

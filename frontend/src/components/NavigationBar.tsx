import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import logoutUser from '../actions/logoutUser'
import { useHistory } from 'react-router-dom'

interface INavigationBarProps {
    logoutUser: Function
}

export function NavigationBar({ logoutUser }: INavigationBarProps) {
    const history = useHistory()

    function handleLogout() {
        logoutUser()
        history.push('/user/login/')
    }

    return (
        <Navbar className="mb-2 mb-md-3 d-flex flex-column flex-md-row justify-content-between shadow">
            <Navbar.Brand className="ml-2 font-size">
                <b className="font-weight-bold">Rodolfo</b> Kirch Veiga
            </Navbar.Brand>
            <Nav className="mr-2">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/resume/">Resume</Nav.Link>
                <Nav.Link href="/projects/">Projects</Nav.Link>
                <Nav.Link href="/blog/">Blog</Nav.Link>
                <Nav.Link href="/contact/">Contact</Nav.Link>
                <Nav.Link href="/user/">Profile</Nav.Link>
                <Nav.Link href="/user/register/">Register</Nav.Link>
                <Nav.Link href="/user/login/">Login</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default connect(null, { logoutUser })(NavigationBar)

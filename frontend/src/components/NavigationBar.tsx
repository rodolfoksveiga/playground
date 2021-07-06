import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import logoutUser from '../actions/logoutUser'
import { useHistory } from 'react-router-dom'
import { TRootState } from '../reducers/rootReducer'

interface INavigationBarProps {
    isAuthenticated: boolean
    logoutUser: Function
}

export function NavigationBar({
    isAuthenticated,
    logoutUser
}: INavigationBarProps) {
    const history = useHistory()

    function handleLogout() {
        logoutUser()
        history.push('/user/login/')
    }

    return (
        <Navbar
            className="shadow"
            bg="dark"
            variant="dark"
            sticky="top"
            expand="md"
            collapseOnSelect
        >
            <Navbar.Brand className="ml-2">
                <b>Rodolfo</b> Kirch Veiga
            </Navbar.Brand>
            <Navbar.Toggle className="mr-2" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-2 ml-md-0 mr-md-2">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/resume/">Resume</Nav.Link>
                    <Nav.Link href="/projects/">Projects</Nav.Link>
                    <Nav.Link href="/blog/">Blog</Nav.Link>
                    <Nav.Link href="/contact/">Contact</Nav.Link>
                    {isAuthenticated ? (
                        <Nav>
                            <Nav.Link href="/user/">Profile</Nav.Link>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link href="/user/login/">Login</Nav.Link>
                            <Nav.Link href="/user/register/">Register</Nav.Link>
                        </Nav>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logoutUser })(NavigationBar)

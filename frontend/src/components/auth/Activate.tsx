// Import components, functions, types, and variables
import { useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import activateUser from '../../actions/activateUser'
import { TRootState } from '../../reducers/rootReducer'
import { Button, Container } from 'react-bootstrap'

// Types and interfaces
interface IActivateUserProps {
    isAuthenticated: boolean
    message: null | string
    activateUser: Function
}

interface IActivateUserParams {
    userId: string
    token: string
}

// Component
export function Activate({
    isAuthenticated,
    activateUser
}: IActivateUserProps) {
    const { userId, token } = useParams<IActivateUserParams>()
    const history = useHistory()

    function handleActivateUser() {
        activateUser(userId, token)
    }

    if (isAuthenticated) {
        history.push('/')
    }

    return (
        <Container className="py-2 py-md-4">
            <Button variant="success" onClick={handleActivateUser}>
                Activate account
            </Button>
        </Container>
    )
}

// Redux
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { activateUser })(Activate)

// Import components, functions, types, variables, and styles
import { useParams } from 'react-router-dom'
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

// Main component
export function Activate({
    isAuthenticated,
    message,
    activateUser
}: IActivateUserProps) {
    const { userId, token } = useParams<IActivateUserParams>()

    function handleActivateUser() {
        activateUser(userId, token)
    }

    return (
        <Container>
            <Button variant="success" onClick={handleActivateUser}>
                Activate account
            </Button>
        </Container>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message
})

export default connect(mapStateToProps, { activateUser })(Activate)

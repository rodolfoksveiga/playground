// Import components, functions, types, and variables
import { Card } from 'react-bootstrap'
import { TRootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'
import { IUser } from '../../actions/loadUser'

// Types and interfaces
interface IProfileProps {
    user: null | IUser
}

// Component
export function Profile({ user }: IProfileProps) {
    return (
        <Card>
            <Card.Header>
                <h1 className="display-3">Profile</h1>
            </Card.Header>
            <Card.Body>
                <strong>Username:</strong> {user && user.username}
                <strong>Email:</strong> {user && user.email}
            </Card.Body>
        </Card>
    )
}

// Redux
const mapStateToProps = (state: TRootState) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Profile)

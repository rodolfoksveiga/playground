import { Card } from 'react-bootstrap'
import { TRootState } from '../../reducers/rootReducer'
import { connect } from 'react-redux'
import { User } from '@firebase/auth-types'

interface IProfileProps {
    user: null | User
}

export function Profile({ user }: IProfileProps) {
    return (
        <Card>
            <Card.Header>
                <h1 className="display-3">Profile</h1>
            </Card.Header>
            <Card.Body>
                <strong>Email:</strong> {user && user.email}
            </Card.Body>
        </Card>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    user: state.auth.user
})

export default connect(mapStateToProps)(Profile)

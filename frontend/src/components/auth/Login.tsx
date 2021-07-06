// Import components, functions, types, and variables
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import loginUser from '../../actions/loginUser'
import { TRootState } from '../../reducers/rootReducer'

// Types and interfaces
interface ILoginProps {
    isAuthenticated: boolean
    loginUser: Function
}

// Variables
const FormSchema = yup.object().shape({
    username: yup.string().required('Required field.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/^\S*$/, 'Password must not have any white space.')
        .required('Required field.')
})

// Component
export function Login({ loginUser }: ILoginProps) {
    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                loginUser(form.username, form.password)
                resetForm()
                setSubmitting(false)
            }}
            validationSchema={FormSchema}
            validateOnChange={false}
        >
            {({ values, touched, errors, handleSubmit, handleChange }) => (
                <Form
                    className="d-flex justify-content-center pb-4"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <Card className="shadow">
                        <Card.Header
                            className="display-3 text-center py-2"
                            as="h1"
                        >
                            Login
                        </Card.Header>
                        <Card.Body className="my-2 py-0">
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    value={values.username}
                                    type="username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    isInvalid={!!errors.username}
                                    isValid={
                                        touched.username && !errors.username
                                    }
                                    required
                                />
                                <Form.Control.Feedback
                                    className="pl-2"
                                    type="invalid"
                                >
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={values.password}
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                    isValid={
                                        touched.password && !errors.password
                                    }
                                    required
                                />
                                <Form.Control.Feedback
                                    className="pl-2"
                                    type="invalid"
                                >
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                className="w-100 my-2"
                                variant="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            Still don't have an account? Register{' '}
                            <Link to="/user/register/">here</Link>!
                        </Card.Footer>
                    </Card>
                </Form>
            )}
        </Formik>
    )
}

// Redux
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)

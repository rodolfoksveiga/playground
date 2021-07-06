// Import components, functions, types, and variables
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'

import registerUser from '../../actions/registerUser'
import { TRootState } from '../../reducers/rootReducer'

// Types and interfaces
interface IRegisterProps {
    isAuthenticated: boolean
    failed: boolean
    message: null | string
    registerUser: Function
}

// Variables
const FormSchema = yup.object().shape({
    username: yup.string().required('Required field.'),
    email: yup.string().email('Invalid email.').required('Required field.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/^\S*$/, 'Password must not have any white space.')
        .required('Required field.'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match.')
})

// Component
export function Register({
    isAuthenticated,
    failed,
    message,
    registerUser
}: IRegisterProps) {
    const history = useHistory()

    if (isAuthenticated) {
        history.push('/')
    }

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                passwordConfirm: ''
            }}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                registerUser(
                    form.username,
                    form.email,
                    form.password,
                    form.passwordConfirm
                )
                resetForm()
                setSubmitting(false)
            }}
            validationSchema={FormSchema}
            validateOnChange={false}
        >
            {({ values, touched, errors, handleSubmit, handleChange }) => (
                <Form
                    className="d-flex justify-content-center py-2 py-md-4"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <Card className="shadow" style={{ width: '400px' }}>
                        <Card.Header
                            className="display-3 text-center py-2"
                            as="h1"
                        >
                            Register
                        </Card.Header>
                        <Card.Body className="my-2 py-0">
                            {message && (
                                <Alert variant={failed ? 'danger' : 'success'}>
                                    {message}
                                </Alert>
                            )}
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    value={values.username}
                                    type="text"
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
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={values.email}
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    isValid={touched.email && !errors.email}
                                    required
                                />
                                <Form.Control.Feedback
                                    className="pl-2"
                                    type="invalid"
                                >
                                    {errors.email}
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
                            <Form.Group controlId="passwordConfirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control
                                    value={values.passwordConfirm}
                                    type="password"
                                    placeholder="Password confirmation"
                                    onChange={handleChange}
                                    isInvalid={!!errors.passwordConfirm}
                                    isValid={
                                        touched.passwordConfirm &&
                                        !errors.passwordConfirm
                                    }
                                    required
                                />
                                <Form.Control.Feedback
                                    className="pl-2"
                                    type="invalid"
                                >
                                    {errors.passwordConfirm}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button
                                className="w-100 my-2"
                                variant="success"
                                type="submit"
                            >
                                Sign Up
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            Already have an account? Login{' '}
                            <Link to="/user/login/">here</Link>!
                        </Card.Footer>
                    </Card>
                </Form>
            )}
        </Formik>
    )
}

// Redux
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    failed: state.auth.failed,
    message: state.auth.message
})

export default connect(mapStateToProps, { registerUser })(Register)

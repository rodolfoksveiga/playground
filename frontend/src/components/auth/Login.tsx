import { Formik } from 'formik'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import loginUser from '../../actions/loginUser'

interface ILoginProps {
    loginUser: Function
}

const FormSchema = yup.object().shape({
    email: yup.string().email('Invalid email.').required('Required field.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/^\S*$/, 'Password must not have any white space.')
        .required('Required field.')
})

export function Login({ loginUser }: ILoginProps) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                passwordConfirm: ''
            }}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                loginUser(form.email, form.password)
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

export default connect(null, { loginUser })(Login)

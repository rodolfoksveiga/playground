// Import components, functions, types, and variables
import { connect } from 'react-redux'
import { Formik } from 'formik'
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap'
import * as yup from 'yup'

import createComment from '../../actions/createComment'

// Types and interfaces
export interface ICommentForm {
    body: string
    post: number
    user: number
}

interface ICommentFormProps {
    initialFormData: ICommentForm
    vertical: boolean
    createComment: Function
    handleToggleCreate?: Function
    handleToggleUpdate?: Function
    handleTriggerReload: Function
}

// Variables
const FormSchema = yup.object().shape({
    body: yup
        .string()
        .trim()
        .required('You must write something in your comment.')
        .max(600, 'Comment must have less than 600 characters.')
})

// Component
export function CommentForm({
    initialFormData,
    vertical,
    createComment,
    handleToggleCreate,
    handleToggleUpdate,
    handleTriggerReload
}: ICommentFormProps) {
    function handleSubmit(formData: ICommentForm) {
        if (handleToggleCreate) {
            createComment(formData)
            handleToggleCreate()
        }
        if (handleToggleUpdate) {
            createComment(formData)
            handleToggleUpdate()
        }
    }

    function handleCancel() {
        if (handleToggleCreate) {
            handleToggleCreate()
        }

        if (handleToggleUpdate) {
            handleToggleUpdate()
        }
    }

    return (
        <Formik
            initialValues={initialFormData}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                handleSubmit(form)
                resetForm()
                setSubmitting(false)
                handleTriggerReload()
            }}
            validationSchema={FormSchema}
        >
            {({
                values,
                touched,
                errors,
                handleSubmit,
                handleChange,
                handleReset
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Card className="my-2 mx-5 shadow">
                        <Container fluid className="p-0">
                            <Row className="mx-0">
                                <Col md={10} className="p-0">
                                    <Card.Header
                                        className="font-weight-bold py-1 px-3"
                                        as="h4"
                                    >
                                        <Form.Label>Comment</Form.Label>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <Form.Group controlId="body">
                                            <Form.Control
                                                className="border-0"
                                                value={values.body}
                                                type="text"
                                                as="textarea"
                                                placeholder="Write your comment here..."
                                                rows={3}
                                                onChange={handleChange}
                                                isInvalid={!!errors.body}
                                                isValid={
                                                    touched.body && !errors.body
                                                }
                                            />
                                            <Form.Control.Feedback
                                                className="pl-2"
                                                type="invalid"
                                            >
                                                {errors.body}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Card.Body>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex border-top border-left py-1 py-md-0 my-0 text-center justify-content-center align-items-center"
                                >
                                    <ButtonGroup vertical={vertical}>
                                        <Button variant="success" type="submit">
                                            Save
                                        </Button>
                                        <Button
                                            variant="secondary"
                                            type="reset"
                                            onClick={handleReset}
                                        >
                                            Clear
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Form>
            )}
        </Formik>
    )
}

// Redux
export default connect(null, { createComment })(CommentForm)

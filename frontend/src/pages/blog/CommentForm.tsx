import { connect } from 'react-redux'
import { Formik } from 'formik'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import * as yup from 'yup'

import createComment from '../../actions/createComment'

export interface ICommentForm {
    body: string
    post: number
    user: number
}

interface ICommentFormProps {
    id: string
    createComment: Function
}

const FormSchema = yup.object().shape({
    body: yup
        .string()
        .trim()
        .required('You must write something in your comment.')
        .max(600, 'Comment must have less than 600 characters.')
})

export function CommentForm({ id, createComment }: ICommentFormProps) {
    function handleCreateComment(formData: ICommentForm) {
        createComment(formData)
    }

    return (
        <Formik
            initialValues={{
                body: '',
                post: Number(id),
                user: 1
            }}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                console.log(form)
                handleCreateComment(form)
                resetForm()
                setSubmitting(false)
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
                <Form
                    className="d-flex flex-column mx-5 my-2 shadow border"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="px-3 py-1" controlId="body">
                        <Form.Label className="font-weight-bold px-4">
                            New comment
                        </Form.Label>
                        <Form.Control
                            value={values.body}
                            type="text"
                            as="textarea"
                            placeholder="Write your comment here..."
                            rows={3}
                            onChange={handleChange}
                            isInvalid={!!errors.body}
                            isValid={touched.body && !errors.body}
                        />
                        <Form.Control.Feedback className="pl-2" type="invalid">
                            {errors.body}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <ButtonGroup className="align-self-center pb-1 mb-3">
                        <Button variant="primary" type="submit">
                            Add comment
                        </Button>
                        <Button
                            variant="secondary"
                            type="reset"
                            onClick={handleReset}
                        >
                            Clear
                        </Button>
                    </ButtonGroup>
                </Form>
            )}
        </Formik>
    )
}

export default connect(null, { createComment })(CommentForm)

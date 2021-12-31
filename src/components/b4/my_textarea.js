import React from 'react';
import { Form } from 'react-bootstrap';

import { useField } from 'formik';

const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Form.Group className="mb-3">
            <div className="form-group">
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className={`form-control ${meta.touched && meta.error ? 'error' : null}`}
                    {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="input-feedback">{meta.error}</div>
                ) : null}
            </div>
        </Form.Group>
    );
};
export default MyTextarea;
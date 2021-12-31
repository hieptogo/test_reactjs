import React from 'react';
import { Form as FormBootstrap } from 'react-bootstrap';

import { useField } from 'formik';

const MyCheckbox = ({ lable, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <FormBootstrap.Group className="mb-3">
            <FormBootstrap.Check
                {...field} {...props}
                id={field.name}
                label={lable}
            />
            {meta.touched && meta.error ? (
                <div className="input-feedback">{meta.error}</div>
            ) : null}
        </FormBootstrap.Group>
    );
};
export default MyCheckbox;
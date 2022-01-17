import React from 'react';
import { Form as FormBootstrap } from 'react-bootstrap';
import TextField from '@mui/material/TextField';

import { useField } from 'formik';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormBootstrap.Group className="mb-3">
            <div className="form-group">
                <label htmlFor={props.id || props.name} className={`${meta.touched && meta.error ? 'input-feedback' : null}`}>{label}</label>
                {/* <TextField
                    fullWidth
                    error={meta.touched && meta.error}
                    id={props.name}
                    label={label}
                    {...field} {...props}
                /> */}
                <input className={`form-control ${meta.touched && meta.error ? 'error' : null}`}
                    {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="input-feedback">{meta.error}</div>
                ) : null}
            </div>
        </FormBootstrap.Group>
    );
};
export default MyTextInput;
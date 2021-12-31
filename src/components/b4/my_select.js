import React from 'react';
import { Form as FormBootstrap } from 'react-bootstrap';

import { useField } from 'formik';

const MySelect = ({ label, dataOptions, ...props }) => {
    const [field, meta] = useField(props);

    const listOption = dataOptions.map((item) =>
        <option key={item.value} value={item.value}>{item.name}</option>
    );
    return (
        <FormBootstrap.Group className="mb-3">
            <label htmlFor={props.id || props.name}>{label}</label>
            <FormBootstrap.Select {...field} {...props}
                className={`form-control ${meta.touched && meta.error ? 'error' : null}`}
            >
                <option value="">Select a item</option>
                {listOption}
            </FormBootstrap.Select>
            {
                meta.touched && meta.error ? (
                    <div className="input-feedback">{meta.error}</div>
                ) : null
            }
        </FormBootstrap.Group>
    );
};
export default MySelect;
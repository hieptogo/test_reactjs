import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

import MyTextInput from './../../components/b4/my_input';
import MyCheckbox from './../../components/b4/my_checkbox';

const LogIn = () => {
    const submitForm = e => {
        e.preventDefault();
    };
    return (
        <>
            <h1>Đăng nhập</h1>
            <Formik
                initialValues={{
                    userName: '',
                    passWord: '',
                    acceptedTerms: true,
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .email('Địa chỉ email không hợp lệ')
                        .required('Required'),
                    passWord: Yup.string()
                        .min(8, 'Password ít nhất 8 ký tự')
                        .required('Required'),
                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
                })}
                onSubmit={e => submitForm(e)}
            >
                <Form>
                    <MyTextInput
                        label="UserName"
                        name="userName"
                        type="email"
                        placeholder="Username"
                    />

                    <MyTextInput
                        label="PassWord"
                        name="passWord"
                        type="password"
                        placeholder="Password"
                    />
                    <MyCheckbox name="acceptedTerms" lable="I accept the terms and conditions" />
                    <Button variant="primary" className="mt-2" type="submit">Submit</Button>
                </Form>
            </Formik>
        </>
    );
};
export default LogIn;
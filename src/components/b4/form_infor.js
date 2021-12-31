import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import MySelect from './../../components/b4/my_select';
import MyTextInput from './../../components/b4/my_input';
import MyTextarea from './../../components/b4/my_textarea';

const LogIn = () => {
    const dataOptions = [];
    let history = useHistory();

    for(let i = 1; i <= 100; i++){
        dataOptions.push({
            value: i,
            name: i,
        })
    }
    const submitForm = () => {
        history.push("/");
    };
    return (
        <>
            <h1>Đăng nhập</h1>
            <Formik
                initialValues={{
                    userName: '',
                    age: '',
                    address: '',
                    note: '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .required('Required'),
                    address: Yup.string()
                        .required('Required'),
                    age: Yup.number()
                        .required('Required'),
                })}
                onSubmit={() => submitForm()}
            >
                <Form>
                    <MyTextInput
                        label="Họ Tên"
                        name="userName"
                        type="text"
                        placeholder="Nhập họ tên đầy đủ"
                    />

                    <MySelect label="Tuổi" name="age" dataOptions={dataOptions} />

                    <MyTextInput
                        label="Địa chỉ"
                        name="address"
                        type="text"
                        placeholder="Nhập địa chỉ"
                    />

                    <MyTextarea
                        label="Ghi chú"
                        name="note"
                        placeholder="Ghi chú"
                    />

                    <Button variant="primary" className="mt-2" type="submit">Submit</Button>
                </Form>
            </Formik>
        </>
    );
};
export default LogIn;
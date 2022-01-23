import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import MySelect from '../b4/my_select';
import MyTextInput from '../b4/my_input';

const ageOptions = [];
const positionOptions = [
    {
        value: "develop",
        name: "Developer"
    },
    {
        value: "test",
        name: "Tester"
    },
];

for (let i = 1; i <= 100; i++) {
    ageOptions.push({
        value: i,
        name: i,
    })
}

const ModalAddEditStaff = ({ show, hideModal, submitForm, data }) => {
    const [dataStaff, setDataStaff] = useState({
        code: null,
        name: null,
        age: null,
        address: null,
        positions: null,
    });

    useEffect(() => {
        if (data) {
            setDataStaff(data);
        }
    }, [data]);

    return (
        <Modal show={show} onHide={() => hideModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={{
                        code: '',
                        name: '',
                        address: '',
                        age: '',
                        positions: '',
                    }}
                    validationSchema={Yup.object({
                        code: Yup.string()
                            .required('Required'),
                        name: Yup.string()
                            .required('Required'),
                        address: Yup.string()
                            .required('Required'),
                        age: Yup.number()
                            .required('Required'),
                        positions: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            submitForm(values)
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form id="submit-staff">
                        <MyTextInput
                            label="Mã nhân viên"
                            name="code"
                            type="text"
                            value={dataStaff.code}
                        />
                        <MyTextInput
                            label="Họ tên"
                            name="name"
                            type="text"
                            value={dataStaff.name}
                        />
                        <MySelect
                            label="Tuổi"
                            name="age"
                            dataOptions={ageOptions}
                            value={dataStaff.age}    
                        />
                        <MyTextInput
                            label="Quê quán"
                            name="address"
                            type="text"
                            value={dataStaff.address}
                        />
                        <MySelect
                            label="Chức vụ"
                            name="positions"
                            dataOptions={positionOptions}
                            value={dataStaff.positions}
                        />
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => hideModal()}>Close</Button>
                <Button variant="success" size="sm" className="mt-2" type="submit" form="submit-staff">Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalAddEditStaff;
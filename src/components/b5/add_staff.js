import React, { useState } from "react";

import { connect } from "react-redux";
import { actAddStaff } from "../../actions/index";

import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import MySelect from '../b4/my_select';
import MyTextInput from '../b4/my_input';

const mapDispatchToProps = (dispatch) => {
    return {
        addStaff: (staff) => {
            dispatch(actAddStaff(staff));
        },
    };
};

const AddStaff = (props) => {
    const [flag, setFlag] = useState(false);
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
    const submitForm = (staff) => {
        props.addStaff(staff);
        hideModal();
    };

    const hideModal = () => setFlag(false);
    const showModal = () => setFlag(true);

    return (
        <>
            <Modal show={flag} onHide={() => hideModal()}>
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
                            position: '',
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
                            position: Yup.string()
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
                            />
                            <MyTextInput
                                label="Họ tên"
                                name="name"
                                type="text"
                            />
                            <MySelect label="Tuổi" name="age" dataOptions={ageOptions} />
                            <MyTextInput
                                label="Quê quán"
                                name="address"
                                type="text"
                            />
                            <MySelect label="Chức vụ" name="position" dataOptions={positionOptions} />
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={() => hideModal()}>Close</Button>
                    <Button variant="success" size="sm" className="mt-2" type="submit" form="submit-staff">Submit</Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col className="text-right mb-2">
                    <Button variant="primary" size="sm"
                        onClick={() => showModal()}
                        className="mt-auto font-weight-bold"
                        variant="success"
                        block
                    >
                        Thêm mới
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default connect(null, mapDispatchToProps)(AddStaff);
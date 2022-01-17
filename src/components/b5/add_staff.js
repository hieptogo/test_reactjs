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
                            staff_code: '',
                            staff_name: '',
                            staff_address: '',
                            staff_age: '',
                            staff_position: '',
                        }}
                        validationSchema={Yup.object({
                            staff_code: Yup.string()
                                .required('Required'),
                            staff_name: Yup.string()
                                .required('Required'),
                            staff_address: Yup.string()
                                .required('Required'),
                            staff_age: Yup.number()
                                .required('Required'),
                            staff_position: Yup.string()
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
                                name="staff_code"
                                type="text"
                            />
                            <MyTextInput
                                label="Họ tên"
                                name="staff_name"
                                type="text"
                            />
                            <MySelect label="Tuổi" name="staff_age" dataOptions={ageOptions} />
                            <MyTextInput
                                label="Quê quán"
                                name="staff_address"
                                type="text"
                            />
                            <MySelect label="Chức vụ" name="staff_position" dataOptions={positionOptions} />
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
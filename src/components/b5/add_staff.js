import React, { useState } from "react";

import { connect } from "react-redux";
import { actAddStaff } from "../../actions/index";

import { Button, Row, Col } from 'react-bootstrap';
import ModalAddEditStaff from './modal_add_edit';

const mapDispatchToProps = (dispatch) => {
    return {
        addStaff: (staff) => {
            dispatch(actAddStaff(staff));
        },
    };
};

const AddStaff = (props) => {
    const [flag, setFlag] = useState(false);
    const submitForm = (staff) => {
        props.addStaff(staff);
        hideModal();
    };

    const hideModal = () => setFlag(false);
    const showModal = () => setFlag(true);

    return (
        <>
            <ModalAddEditStaff show={flag} hideModal={hideModal} submitForm={submitForm} />
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
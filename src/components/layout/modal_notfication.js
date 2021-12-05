import React from "react";
import { Modal, Button } from 'react-bootstrap';

function ModalNotfication({ show, dataName, hideModal }) {
    return (
        <Modal show={show} onHide={() => hideModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Cảm ơn bạn đã đặt {dataName}!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => hideModal()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalNotfication;
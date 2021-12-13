//Import react vào trong dự án
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const ModalShow = ({ show, data, hideModal }) => {
    return (
        <Modal show={show} onHide={() => hideModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {data}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="sm" onClick={() => hideModal()}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

const ShowModal = () => {
    const [input, setInput] = useState('')
    const [flag, setFlag] = useState(false)
    const [submit, setSubmit] = useState(false)

    const hideModal = () => setFlag(false);

    const changeInputValue = e => {
        setInput(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault();
        setSubmit(true)
    }

    useEffect(() => {
        if(submit){
            setFlag(true)
        }
    }, [submit])

    return (
        <>
            <ModalShow show={flag} data={input} hideModal={hideModal} />
            <form onSubmit={e => submitForm(e)} className="mt-5">
                <div className="form-group mb-1">
                    <label htmlFor="text">Bạn hãy điền gì đó vào đây:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Bạn hãy điền gì đó vào đây"
                        onChange={e => changeInputValue(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    )

}

export default ShowModal;
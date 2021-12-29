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

    const submitForm = e => {
        e.preventDefault();
        setSubmit(true)
    }

    useEffect(() => {
        if(submit){
            setFlag(true)
            setSubmit(false)
        }
    }, [submit])

    return (
        <>
            <ModalShow show={flag} data={input} hideModal={setFlag} />
            <form onSubmit={e => submitForm(e)} className="mt-5">
                <div className="form-group mb-1">
                    <label htmlFor="text">Bạn hãy điền gì đó vào đây:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bạn hãy điền gì đó vào đây"
                        onChange={e => setInput(e.target.value)}
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
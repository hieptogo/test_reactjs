//Import react vào trong dự án
import React, { useState } from "react";

const FormSubmit = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [title, setTitle] = useState('')

    const submitForm = e => {
        e.preventDefault();
        setTitle(input1 + '_' + input2 + '_' + input3);
    }

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={e => submitForm(e)} >
                <div className="form-group">
                    <label htmlFor="text">Nhập số:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="input1"
                        placeholder="Enter number"
                        onChange={e => setInput1(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Nhập text:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="input2"
                        placeholder="Enter text"
                        onChange={e => setInput2(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Nhập ký tự đặc biệt:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="input3"
                        placeholder="Enter @#$%^"
                        onChange={e => setInput3(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default FormSubmit;
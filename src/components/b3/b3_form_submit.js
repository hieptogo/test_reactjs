//Import react vào trong dự án
import React, { useState } from "react";

const FormSubmit = () => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [title, setTitle] = useState('')

    const validationForm = () => {
        let returnData = {
            error: false,
            msg: ''
        }

        // Check input1
        const re1 = /[0-9]$/;
        if (input1.trim() && !re1.test(input1)) {
            returnData = {
                error: true,
                msg: 'Input 1 Chỉ được nhập số'
            }
        }

        // Check input1
        const re2 = /[a-zA-Z]$/;
        if (input2.trim() && !re2.test(input2)) {
            returnData = {
                error: true,
                msg: 'Input 2 Chỉ được nhập text'
            }
        }

        // Check input1
        const re3 = /[~!@#$%^&*()_+]$/;
        if (input3.trim() && !re3.test(input3)) {
            returnData = {
                error: true,
                msg: 'Input 3 Chỉ được nhập ký tự đặt biệt'
            }
        }
        
        return returnData;
    }
    const submitForm = e => {
        e.preventDefault();
        const validation = validationForm()

        //Kiểm tra lỗi của input trong form và hiển thị
        if (validation.error) {
            alert(validation.msg)
        } else {
            const newText = input1.concat("_", input2, "_", input3)
            setTitle(newText);
        }
    }

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={e => submitForm(e)} >
                <div className="form-group">
                    <label htmlFor="text">Nhập số:</label>
                    <input
                        type="text"
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
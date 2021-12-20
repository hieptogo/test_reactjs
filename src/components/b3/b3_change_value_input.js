import React, { useState, useEffect } from "react";

const ChangeValue = () => {
    const [vnd, setVnd] = useState('')
    const [usd, setUsd] = useState('')

    useEffect(() => {
        const data = vnd / 25000;
        setUsd(data)
    }, [vnd])

    useEffect(() => {
        const data = usd * 25000;
        setVnd(data)
    }, [usd])

    return (
        <div className="mt-5">
            <form >
                <div className="form-group">
                    <span htmlFor="text">USD:</span>
                    <input
                        className="form-control"
                        name="input1"
                        type="number"
                        value={usd}
                        onChange={e => setUsd(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <span htmlFor="pwd">VNĐ:</span>
                    <input
                        type="text"
                        className="form-control"
                        type="number"
                        name="input2"
                        value={vnd}
                        onChange={e => setVnd(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default ChangeValue;     
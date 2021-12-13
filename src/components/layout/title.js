import React from "react";
import { Row } from 'react-bootstrap';
import { FaTintSlash } from "react-icons/fa";

const Title = () => {
    return(
        <>
            <Row className="mb-3 mt-3">
                <div style={{textAlign: 'center'}}>
                    <h2>Danh sách món ăn</h2>
                </div>
            </Row>
        </>
    )
}
export default Title;
import React from "react";
import { Row } from 'react-bootstrap';

const Title = props => {
    const {title} = props;
    return(
        <>
            <Row className="mb-3 mt-3">
                <div style={{textAlign: 'center'}}>
                    <h2>{title}</h2>
                </div>
                <hr/>
            </Row>
        </>
    )
}
export default Title;
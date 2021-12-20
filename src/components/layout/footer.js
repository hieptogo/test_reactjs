import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UpdateInfo from './../../components/b2/update_info';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="text-lg-start">
                    <Col xs={7} >
                        <ul>
                            <li><strong>Công ty pizza một thành viên</strong></li>
                            <li><strong>Địa chỉ:</strong> Số 21, ngõ 77, Bùi Xương Trạch, Thnah Xuân Hà Nội</li>
                            <li><strong>Điện thoại:</strong> 0378103289</li>
                        </ul>
                    </Col>
                    <UpdateInfo />
                </Row>
            </Container>
        </div>
    )
}
export default Footer;
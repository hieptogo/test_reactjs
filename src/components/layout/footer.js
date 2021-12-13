import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const infor = {
        name: "Nguyễn Văn Hiệp",
        birthday: "01-02-1995",
        avatar: "/images/avatar/avatar.png"
    }

    useEffect(() => {
        const element = document.getElementById("infor_name");
        element.innerHTML = "<Row>"
            + "<ul>"
            + "<li><strong>Họ Tên:</strong> " + infor.name + "</li>"
            + "<li><strong>Ngày sinh:</strong> " + infor.birthday + "</li>"
            + "</ul>"
            + "<img src=" + infor.avatar + " width='100'>"
            + "</Row>";
    }, []);

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
                    <Col id="infor_name"></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;
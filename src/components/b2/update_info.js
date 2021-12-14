import React, { useEffect } from "react";
import { Col } from "react-bootstrap";

const UpdateInfo = () => {
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
        <Col id="infor_name"></Col>
    )
}
export default UpdateInfo;
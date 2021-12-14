import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ImgAnimation = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const classAnimation = animation ? "img_animation" : "";
        const element = document.getElementById("image_test");
        element.className = classAnimation;
    }, [animation])

    const clickImage = () => { setAnimation(!animation) }

    return (
        <>
            <hr />
            <div className="text-center"><h2>Thực hành buổi 2</h2></div>
            <hr />

            <h2>Click me</h2>
            <img id="image_test" src="/images/avatar/avatar.png" onClick={clickImage} />
        </>
    )
}
export default ImgAnimation;
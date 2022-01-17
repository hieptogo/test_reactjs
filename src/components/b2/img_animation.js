import React, { useEffect, useState } from "react";

const ImgAnimation = () => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const classAnimation = animation ? "img_animation" : "";
        const element = document.getElementById("image_test");
        element.className = classAnimation;
    }, [animation])

    const clickImage = () => { setAnimation(!animation) }

    return (
        <div className="mt-3">
            <h2>Click me</h2>
            <img id="image_test" src="/images/avatar/avatar.png" onClick={clickImage} />
        </div>
    )
}
export default ImgAnimation;
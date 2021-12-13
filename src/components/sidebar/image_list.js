import React from "react";
import { Card } from 'react-bootstrap';
import Datapizzas from './../../data';

const ImageList = () => {
    return (
        <div>
            {Datapizzas.images.map(data => (
                    <Card.Img key={`${data.id}`} variant="top" src={data.src} className="mb-2" />
            ))}
        </div>
    )
}
export default ImageList;
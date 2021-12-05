import React from "react";
import { Card } from 'react-bootstrap';
import DataRecruitment from './../../data';

function News() {
    return (
        <Card className="mb-3">
            <Card.Header>
                Danh sách tuyển dụng
            </Card.Header>
            {DataRecruitment.recruitment.map(data => (
                <div key={data.id}>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.content}</Card.Text>
                    </Card.Body>
                    <Card.Footer></Card.Footer>
                </div>
            ))}
        </Card>
    )
}
export default News;
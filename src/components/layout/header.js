import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    const myMenu = [
        {
            href: '#home',
            name: 'Home'
        },
        {
            href: '#news',
            name: 'News'
        },
        {
            href: '#contact',
            name: 'Contact'
        },
        {
            href: '#about',
            name: 'About'
        },
    ];

    const listItems = myMenu.map((item) =>
        <li key={item.href}><a href={item.href}>{item.name}</a></li>
    );

    return (
        <div className="myMenu">
            <Container>
                <Row style={{alignItems: 'center'}}>
                    <Col xs={9}>
                        <ul style={{ marginBottom: '0 !important' }}>
                            {listItems}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Header;
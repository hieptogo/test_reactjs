import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SearchPage from './input_search';

const Header = (data) => {
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
                    <Col xs={3}>
                        <SearchPage data={data}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
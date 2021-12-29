import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const Header = () => {
    const myMenu = [
        {
            href: '/',
            name: 'Home'
        },
        {
            href: '/thuc-hanh-b2',
            name: 'Thực hành b2'
        },
        {
            href: '/thuc-hanh-b3',
            name: 'Thực hành b3'
        },
    ];

    const listItems = myMenu.map((item) =>
        <li key={item.href}><NavLink exact to={item.href}>{item.name}</NavLink></li>
    );

    return (
        <div className="myMenu">
            <Container>
                <Row style={{ alignItems: 'center' }}>
                    <Col xs={12}>
                        <ul style={{ marginBottom: '0 !important' }}>
                            {listItems}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
export default Header;
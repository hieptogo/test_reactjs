import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = props => {
    const {dataMenu} = props;

    const listItems = dataMenu.map((item) =>
        <li key={item.path}><NavLink exact to={item.path}>{item.name}</NavLink></li>
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
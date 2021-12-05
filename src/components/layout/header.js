import React from "react";
import { Container } from 'react-bootstrap';

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
            <ul style={{ marginBottom: '0 !important' }}>
                <Container>
                    {listItems}
                </Container>
            </ul>
        </div>
    )
}

export default Header;
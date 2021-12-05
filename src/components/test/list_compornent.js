import React from "react";

const ListCompornent = () => {
    const myList = [
        {
            id: 'p',
            name: 'php'
        },
        {
            id: 'j',
            name: 'javascript'
        },
        {
            id: 'py',
            name: 'python'
        },
        {
            id: 'c',
            name: 'C++'
        },
    ];

    const listItems = myList.map((item) =>
        <li key={item.id}>{item.name}</li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default ListCompornent;
import React, { useEffect, useState } from "react";

import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';

const HeaderTodo = () => {
    return (
        <div className="text-center">
            <h1>List Todo</h1>
        </div>
    )
}

const ListTodo = () => {
    const [listItemTodo, setListItemTodo] = useState([])
    const [itemTodo, setItemTodo] = useState('')
    const [index, setIndex] = useState(0)
    const [edit, setEdit] = useState(false)

    const AddTodo = () => {
        if (itemTodo.trim()) {
            if(edit){
                const objIndex = listItemTodo.findIndex((obj => obj.id == edit));
                listItemTodo[objIndex].title = itemTodo;

                setListItemTodo(listItemTodo)
                setEdit(false)
            }
            else{
                const count = index + 1;
                setIndex(count);
                const item = {
                    id: count,
                    title: itemTodo
                }
                setListItemTodo([...listItemTodo, item])
            }
            setItemTodo('')
        }
    }

    const EditTodo = (id) => {
        const dataFind = listItemTodo.find((item) => {
            return item.id === id;
        })
        setItemTodo(dataFind.title)
        setEdit(dataFind.id)
    }

    const DeleteTodo = (id) => {
        const newTodos = listItemTodo.filter((item) => {
            return item.id !== id;
        })
        setListItemTodo(newTodos)
    }

    const Todos = listItemTodo.map((item) =>
        <li key={item.id}>
            {item.title}
            <div className="button-list">
                <Button variant="outline-primary" onClick={() => EditTodo(item.id)}><FaEdit /></Button>
                <Button variant="outline-danger" onClick={() => DeleteTodo(item.id)}><FaTrashAlt /></Button>
            </div>
        </li>
    );

    const btnName = edit ? "Edit Todo" : "Add Todo";
    const iconBtn = edit ? <FaEdit /> : <FaPlus />;

    return (
        <div className="mt-5">
            <hr />
            <div className="list_todo">
                <Card>
                    <Card.Header>
                        <HeaderTodo />
                    </Card.Header>
                    <Card.Body className="list-scroll">
                        <ul>
                            {Todos}
                        </ul>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        <Form>
                            <Form.Control
                                onChange={e => setItemTodo(e.target.value)}
                                as="textarea"
                                value={itemTodo}
                                placeholder="Leave a todo here" />
                            <Button variant="primary" className="mt-2" onClick={AddTodo}>{iconBtn} {btnName}</Button>
                        </Form>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}
export default ListTodo;
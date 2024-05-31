import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import { Button, Modal } from 'react-bootstrap';

const TodoItem = ({ todo, displayText }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2 p-2 border" style={{backgroundColor: todo.completed ? '#d4edda' : 'transparent'}}>
                <div>
                    <input
                        type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleComplete(todo.id))} className="me-2" />
                    <span onClick={handleShow}>{displayText}</span>
                </div>
                <div>
                    <Button variant="danger" onClick={() => dispatch(deleteTodo(todo.id))} className="me-2">
                        Delete
                    </Button>
                    <Button variant="success" onClick={handleShow}>
                        View
                    </Button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayText}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{todo.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TodoItem;

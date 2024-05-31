import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex mb-3">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="form-control me-2 w-25" placeholder="Add todo" />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default TodoInput;

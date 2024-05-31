import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { selectCompletedCount } from '../redux/todoSlice';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const completedCount = useSelector(selectCompletedCount);

    return (
        <div>
            {todos.length ? (
                todos.map((todo, index) => (
                    <TodoItem  key={todo.id} todo={todo} displayText={`Todo ${index + 1}`}/>
                )) ) 
            : (
                <p className='text-danger fw-bolder'>Nothing to display!!!</p>
            )}
           { 
           todos.length > 0 ?
           <div className="mt-3">
                <strong>Completed items: {completedCount}</strong>
            </div>
            :
            <div></div>
            }
        </div>
    );
};

export default TodoList;

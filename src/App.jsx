import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">My Todo List</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default App;

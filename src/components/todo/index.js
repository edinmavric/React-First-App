import React, { useState } from 'react';
import { createTodo } from '../api';
import './index.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [todoBoolean, setTodoBoolean] = useState(false);

  const handleCreateTodo = async () => {
    const newTodo = {
      title: todoInput,
      completed: todoBoolean,
    };
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  const handleTodoToggle = () => {
    setTodoBoolean(prevState => !prevState);
  };

  return (
    <>
      <input
        placeholder="Add todo"
        value={todoInput}
        onChange={e => setTodoInput(e.target.value)}
      />
      <button onClick={handleCreateTodo}>Add Todo!</button>
      <ul>
        {todos.map(todo => (
          <li
            className={`${todoBoolean ? 'checked' : ''}`}
            onClick={handleTodoToggle}
            key={todo.id * Math.random()}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

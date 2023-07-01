import React, { useState, useEffect } from 'react';
import { createTodo, deleteTodo } from '../api';
import './index.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleCreateTodo = async () => {
    const newTodo = {
      id: todos.length + 1,
      title: todoInput,
      completed: false,
    };
    const createdTodo = await createTodo(newTodo);
    setTodos(prevTodos => [...prevTodos, createdTodo]);
    setTodoInput('');
  };

  const handleDeleteTodo = async todoId => {
    const deleteTodos = await deleteTodo(todoId);
    if (deleteTodos) {
      const newTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(newTodos);
    }
  };

  const handleTodoToggle = (todoId, completed) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !completed } : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
            className={`${todo.completed ? 'checked' : ''}`}
            onClick={() => handleTodoToggle(todo.id, todo.completed)}
            key={todo.id}
          >
            {todo.title}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

export const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export const createTodo = async todo => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting todos:', error);
    return null;
  }
};

export const deleteTodo = async todoId => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: 'DELETE',
      }
    );
    if (response.ok) {
      return true;
    } else {
      throw new Error('Error deleting todo');
    }
  } catch (error) {
    console.error('Error deleting todo:', error);
    return false;
  }
};

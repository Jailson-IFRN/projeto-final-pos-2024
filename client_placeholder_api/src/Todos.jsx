import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './apiwrapper';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({ title: '', completed: false , userID: '' });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateTodo(form.id, form);
    } else {
      await createTodo(form);
    }
    setForm({ title: '', completed: false , userID: ''});
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const handleEdit = (todo) => {
    setForm(todo);
  };

  return (
    <div>
      <h1>ToDos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <label>
          Completed
          <input
            type="checkbox"
            checked={form.completed}
            onChange={(e) => setForm({ ...form, completed: e.target.checked })}
          />
        </label>
        <select
          value={form.userId}
          onChange={(e) => setForm({ ...form, userId: e.target.value })}
          required
        >
          <option value="" disabled>
            Select User
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Save</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Done' : 'Pending'}
            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

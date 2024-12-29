import React, { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from './apiwrapper';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', body: '' , userId: ''});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updatePost(form.id, form);
    } else {
      await createPost(form);
    }
    setForm({ title: '', body: '' , userId: ''});
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  const handleEdit = (post) => {
    setForm(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Body"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
          required
        />
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
        <button type="submit">{form.id ? 'Update' : 'Create'}</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <small>User ID: {post.userId}</small>
              <br />
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Posts;

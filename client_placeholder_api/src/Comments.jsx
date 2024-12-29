import React, { useState, useEffect } from 'react';
import { getPosts, createPost, updatePost, deletePost } from './apiwrapper';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', body: '' });

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
    setForm({ title: '', body: '' });
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
        />
        <textarea
          placeholder="Body"
          value={form.body}
          onChange={(e) => setForm({ ...form, body: e.target.value })}
        />
        <button type="submit">Save</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

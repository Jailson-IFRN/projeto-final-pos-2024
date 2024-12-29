import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1/:8000/api'; // Substitua pela URL da sua API

const api = axios.create({
  baseURL: API_BASE_URL,
});

// para Users
export const getUsers = () => api.get('/users');
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);

// para o ToDos
export const getTodos = () => api.get('/todos');
export const createTodo = (data) => api.post('/todos', data);
export const updateTodo = (id, data) => api.put(`/todos/${id}`, data);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

// para o Posts
export const getPosts = () => api.get('/posts');
export const createPost = (data) => api.post('/posts', data);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);

// para o Comments
export const getCommentsByPost = (postId) => api.get(`/posts/${postId}/comments`);
export const createComment = (data) => api.post('/comments', data);
export const updateComment = (id, data) => api.put(`/comments/${id}`, data);
export const deleteComment = (id) => api.delete(`/comments/${id}`);

// para o Albums 
export const getAlbums = () => api.get('/albums');
export const createAlbum = (data) => api.post('/albums', data);
export const updateAlbum = (id, data) => api.put(`/albums/${id}`, data);
export const deleteAlbum = (id) => api.delete(`/albums/${id}`);

// para Photos
export const getPhotosByAlbum = (albumId) => api.get(`/albums/${albumId}/photos`);
export const createPhoto = (data) => api.post('/photos', data);
export const updatePhotos = (id, data) => api.put(`/photos/${id}`, data);
export const deletePhotos = (id) => api.delete(`/albums/${id}`);

export default api;

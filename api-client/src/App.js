import React, { useEffect, useState } from 'react';
import { api } from './api/apiWrapper.js';


export default function App() {
  // PARA USER
  const [User, setUser] = useState([]);
  const [novoUser, setNovoUser] = useState({ name: '', email:''});
  const [editandoUser, setEditandoUser] = useState(null);

  // PARA POSTS
  const [Post, setPost] = useState([]);
  const [novoPost, setNovoPost] = useState({ user: 0, title:'', body: ''});
  const [editandoPost, setEditandoPost] = useState(null);

  // PARA COMMENTS
  const [Comment, setComment] = useState([]);
  const [novoComment, setNovoComment] = useState({ post: 0, name:'', email: '', body: ''});
  const [editandoComment, setEditandoComment] = useState(null);

  // PARA Albuns
  const [Album, setAlbum] = useState([]);
  const [novoAlbum, setNovoAlbum] = useState({ user: 0, title:''});
  const [editandoAlbum, setEditandoAlbum] = useState(null);

  // PARA Photos
  const [Photo, setPhoto] = useState([]);
  const [novoPhoto, setNovoPhoto] = useState({ album: 0, title:'', url: '', thumbnail_url: '' });
  const [editandoPhoto, setEditandoPhoto] = useState(null);

  // PARA ToDos
  const [Todo, setTodo] = useState([]);
  const [novoTodo, setNovoTodo] = useState({ user: 0, title:'', completed: false });
  const [editandoTodo, setEditandoTodo] = useState(null);


  useEffect(() => {
    // trazer do banco do servic
    api.getUsers().then(setUser);
    api.getPosts().then(setPost);
    api.getComments().then(setComment);
    api.getAlbuns().then(setAlbum);
    api.getPhotos().then(setPhoto);
    api.getTodos().then(setTodo);
  }, []);

  const handleCreateOrUpdateUser = () => {
    if (editandoUser) {
      api.updateUser(editandoUser.id, novoUser).then(() => {
        api.getUsers().then(setUser);
        setNovoUser({ name: '', email: '' });
        setEditandoUser(null);
      }).catch(err => console.error(err));
    } else {
      api.createUser(novoUser).then(() => {
        api.getUsers().then(setUser);
        setNovoUser({ name: '', email: '' });
      }).catch(err => console.error(err));
    }
  };

  const handleDeleteUser = (id) => {
    api.deleteUser(id).then(() => {
      api.getUsers().then(setUser);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdatePost = () => {
    if (editandoPost) {
      api.updatePost(editandoPost.id, novoPost).then(() => {
        api.getPosts().then(setPost);
        setNovoPost({ user: 0, title:'', body: ''});
        setEditandoPost(null);
      }).catch(err => console.error(err));
    } else {
      api.createPost(novoPost).then(() => {
        api.getPosts().then(setPost);
        setNovoPost({ user: 0, title:'', body: ''});
      }).catch(err => console.error(err));
    }
  };
  const handleDeletePost = (id) => {
    api.deletePost(id).then(() => {
      api.getPosts().then(setPost);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdateComment = () => {
    if (editandoComment) {
      api.updateComment(editandoComment.id, novoComment).then(() => {
        api.getComments().then(setComment);
        setNovoComment({ post: 0, name:'', email: '', body: '' });
        setEditandoComment(null);
      }).catch(err => console.error(err));
    } else {
      api.createComment(novoComment).then(() => {
        api.getComments().then(setComment);
        setNovoComment({ post: 0, name:'', email: '', body: '' });
      }).catch(err => console.error(err));
    }
  };

  const handleDeleteComment = (id) => {
    api.deleteComment(id).then(() => {
      api.getComments().then(setComment);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdateAlbum = () => {
    if (editandoAlbum) {
      api.updateAlbum(editandoAlbum.id, novoAlbum).then(() => {
        api.getAlbuns().then(setAlbum);
        setNovoAlbum({ user: 0, title: '' });
        setEditandoAlbum(null);
      }).catch(err => console.error(err));
    } else {
      api.createAlbum(novoAlbum).then(() => {
        api.getAlbuns().then(setAlbum);
        setNovoAlbum({ user: 0, title: '' });
      }).catch(err => console.error(err));
    }
  };

  const handleDeleteAlbum = (id) => {
    api.deleteAlbum(id).then(() => {
      api.getAlbuns().then(setAlbum);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdatePhoto = () => {
    if (editandoPhoto) {
      api.updatePhoto(editandoPhoto.id, novoPhoto).then(() => {
        api.getPhotos().then(setPhoto);
        setNovoPhoto({album: 0, title:'', url: '', thumbnail_url: '' });
        setEditandoPhoto(null);
      }).catch(err => console.error(err));
    } else {
      api.createPhoto(novoPhoto).then(() => {
        api.getPhotos().then(setPhoto);
        setNovoPhoto({ album: 0, title:'', url: '', thumbnail_url: '' });
      }).catch(err => console.error(err));
    }
  };

  const handleDeletePhoto = (id) => {
    api.deletePhoto(id).then(() => {
      api.getPhotos().then(setPhoto);
    }).catch(err => console.error(err));
  };

  const handleCreateOrUpdateTodo = () => {
    if (editandoTodo) {
      api.updateTodo(editandoTodo.id, novoTodo).then(() => {
        api.getTodos().then(setTodo);
        setNovoTodo({ user: 0, title:'', completed: false});
        setEditandoTodo(null);
      }).catch(err => console.error(err));
    } else {
      api.createTodo(novoTodo).then(() => {
        api.getTodos().then(setTodo);
        setNovoTodo({ user: 0, title:'', completed: false });
      }).catch(err => console.error(err));
    }
  };

  const handleDeleteTodo = (id) => {
    api.deleteTodo(id).then(() => {
      api.getTodos().then(setTodo);
    }).catch(err => console.error(err));
  };


  return (
      <div>
        <h1>API JsonPLACEHOLDER</h1>
        <section>
          <h2>Usuários</h2>
          <ul>
            {User.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
                <button onClick={() => {
                  setNovoUser(user);
                  setEditandoUser(user);
                }}>Editar</button>
                <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
              </li>
            ))}
          </ul>
          <div>
            <h3>{editandoUser ? 'Editar User' : 'Criar Novo User'}</h3>
            <input
              type="text"
              placeholder="Nome do User"
              value={novoUser.name}
              onChange={e => setNovoUser({ ...novoUser, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Email do User"
              value={novoUser.email}
              onChange={e => setNovoUser({ ...novoUser, email: e.target.value })}
            />
            <button onClick={handleCreateOrUpdateUser}>{editandoUser ? 'Salvar Alterações' : 'Criar User'}</button>
          </div>
        </section>


        <section>
          <h2>ToDo</h2>
          <ul>
            {Todo.map(todo => (
              <li key={todo.id}>
                {todo.user} - {todo.completed} - {todo.title}
                <button onClick={() => {
                  setNovoTodo(todo);
                  setEditandoTodo(todo);
                }}>Editar</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Excluir</button>
              </li>
            ))}
          </ul>
          <div>
            <h3>{editandoTodo ? 'Editar Todo' : 'Criar Novo Todo'}</h3>
            <input
              type="text"
              placeholder="Title"
              value={novoTodo.title}
              onChange={e => setNovoTodo({ ...novoTodo, title: e.target.value })}
            />
            <input
            type="checkbox"
            checked={novoTodo.completed} 
            onChange={e => setNovoTodo({ ...novoTodo, completed: e.target.checked })} 
            />
            <select
            value={novoTodo.user}
            onChange={e => setNovoTodo({ ...novoTodo, user: e.target.value })}
          >
            <option value="">Selecione um(a) User</option>
            {User.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
            <button onClick={handleCreateOrUpdateTodo}>{editandoTodo ? 'Salvar Alterações' : 'Criar Todo'}</button>
          </div>
        </section>

        <section>
          <h2>Albuns</h2>
          <ul>
            {Album.map(album => (
              <li key={album.id}>
                {album.user} - {album.title}
                <button onClick={() => {
                  setNovoAlbum(album);
                  setEditandoAlbum(album);
                }}>Editar</button>
                <button onClick={() => handleDeleteAlbum(album.id)}>Excluir</button>
              </li>
            ))}
          </ul>
          <div>
            <h3>{editandoAlbum ? 'Editar Album' : 'Criar Novo Album'}</h3>
            <input
              type="text"
              placeholder="Title"
              value={novoAlbum.title}
              onChange={e => setNovoAlbum({ ...novoAlbum, title: e.target.value })}
            />
            <select
              value={novoAlbum.user}
              onChange={e => setNovoAlbum({ ...novoAlbum, user: e.target.value })} >
              <option value="">Selecione um(a) User</option>
              {User.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
            <button onClick={handleCreateOrUpdateAlbum}>{editandoAlbum ? 'Salvar Alterações' : 'Criar Album'}</button>
          </div>
        </section>

        <section>
        <h2>Posts</h2>
        <ul>
          {Post.map(post => (
            <li key={post.id}>
              {post.title} - {post.body} - {post.user}
              <button onClick={() => {
                setNovoPost(post);
                setEditandoPost(post);
              }}>Editar</button>
              <button onClick={() => handleDeletePost(post.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoPost ? 'Editar Post' : 'Criar Novo Post'}</h3>
          <input
            type="text"
            placeholder="Título do Post"
            value={novoPost.title}
            onChange={e => setNovoPost({ ...novoPost, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="body"
            value={novoPost.body}
            onChange={e => setNovoPost({ ...novoPost, body: e.target.value })}
          />
          <select
            value={novoPost.user}
            onChange={e => setNovoPost({ ...novoPost, user: e.target.value })}
          >
            <option value="">Selecione um(a) User</option>
            {User.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick={handleCreateOrUpdatePost}>{editandoPost ? 'Salvar Alterações' : 'Criar Post'}</button>
        </div>
      </section>
      <section>
        <h2>Comments</h2>
        <ul>
          {Comment.map(comment => (
            <li key={comment.id}>
              {comment.name} - {comment.body} - {comment.post} - {comment.email}
              <button onClick={() => {
                setNovoComment(comment);
                setEditandoComment(comment);
              }}>Editar</button>
              <button onClick={() => handleDeleteComment(comment.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoComment ? 'Editar Comment' : 'Criar Novo Comment'}</h3>
          <input
            type="text"
            placeholder="Name"
            value={novoComment.name}
            onChange={e => setNovoComment({ ...novoComment, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="body"
            value={novoComment.body}
            onChange={e => setNovoComment({ ...novoComment, body: e.target.value })}
          />
          <input
            type="text"
            placeholder="email"
            value={novoComment.email}
            onChange={e => setNovoComment({ ...novoComment, email: e.target.value })}
          />
          <select
            value={novoComment.post}
            onChange={e => setNovoComment({ ...novoComment, post: e.target.value })}
          >
            <option value="">Selecione um Post</option>
            {Post.map(post => (
              <option key={post.id} value={post.id}>
                {post.title}
              </option>
            ))}
          </select>
          <button onClick={handleCreateOrUpdateComment}>{editandoComment ? 'Salvar Alterações' : 'Criar Comment'}</button>
        </div>
      </section>
      <section>
        <h2>Photos</h2>
        <ul>
          {Photo.map(photo => (
            <li key={photo.id}>
              {photo.title} - Album: {photo.album} - {photo.url} - {photo.thumbnail_url}
              <button onClick={() => {
                setNovoPhoto(photo);
                setEditandoPhoto(photo);
              }}>Editar</button>
              <button onClick={() => handleDeletePhoto(photo.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <h3>{editandoPhoto ? 'Editar Photo' : 'Criar Novo Photo'}</h3>
          <input
            type="text"
            placeholder="Title"
            value={novoPhoto.title}
            onChange={e => setNovoPhoto({ ...novoPhoto, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="url"
            value={novoPhoto.url}
            onChange={e => setNovoPhoto({ ...novoPhoto, url: e.target.value })}
          />
          <input
            type="text"
            placeholder="thumbnail_url"
            value={novoPhoto.thumbnail_url}
            onChange={e => setNovoPhoto({ ...novoPhoto, thumbnail_url: e.target.value })}
          />
          <select
            value={novoPhoto.album}
            onChange={e => setNovoPhoto({ ...novoPhoto, album: e.target.value })}
          >
            <option value="">Selecione um Album</option>
            {Album.map(album => (
              <option key={album.id} value={album.id}>
                {album.title}
              </option>
            ))}
          </select>
          <button onClick={handleCreateOrUpdatePhoto}>{editandoPhoto ? 'Salvar Alterações' : 'Criar Photo'}</button>
        </div>
      </section>
      </div>
      );
    }

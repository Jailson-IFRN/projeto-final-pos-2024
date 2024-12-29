import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Users from './Users';
import Todos from './Todos';
import Posts from './Posts';
import Comments from './Comments';

const App = () => (
  <Router>
    <nav>
      <Link to="/users">Users</Link> | <Link to="/todos">Todos</Link> | <Link to="/posts">Posts</Link>
    </nav>
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/comments" element={<Comments />} />
      
    </Routes>
  </Router>
);

export default App;

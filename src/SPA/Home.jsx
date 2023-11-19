import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UserComments from './UserComments';
import UserPosts from './UserPosts';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="comments">User Comments</Link>
          </li>
          <li>
            <Link to="posts">User Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="comments" element={<UserComments />} />
        <Route path="posts" element={<UserPosts />} />
      </Routes>
    </div>
  );
};

export default Home;
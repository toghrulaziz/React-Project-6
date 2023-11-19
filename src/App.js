import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './SPA/Home'
import About from './SPA/About'
import React from 'react';
import UserComments from './SPA/UserComments';
import UserPosts from './SPA/UserPosts';


function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>

            <Route path="/" element={<Home />}>
              <Route path="comments" element={<UserComments />}/>
              <Route path="posts" element={<UserPosts />}/>
            </Route>
            <Route path="about" element={<About />} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;

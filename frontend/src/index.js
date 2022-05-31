import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/navbar/ErrorPage';
import Messages from './components/messagePage/Messages';
import Login from './components/loginPage/Login';
import LikedSongs from './components/likedSongs/LikedSongs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/likedsongs" element={<LikedSongs />} />
        <Route path="*" element={<ErrorPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
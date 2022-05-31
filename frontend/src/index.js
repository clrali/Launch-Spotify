import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/navbar/ErrorPage';
import Messages from './components/messagePage/Messages';
import LikedSongs from './components/likedSongs/LikedSongs';
import Forum from './components/forum/Forum'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/messages" element={<Messages />} />
        <Route path="/likedsongs" element={<LikedSongs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="*" element={<ErrorPage />} />

      </Route>
    </Routes>
  </BrowserRouter>
);
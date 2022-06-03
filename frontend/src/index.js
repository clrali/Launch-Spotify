import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/navbar/ErrorPage';
import Messages from './components/messagePage/Messages';
import Login from './components/loginPage/Login';
import LikedSongs from './components/likedSongs/LikedSongs';
import LikedMonth from './components/likedSongs/LikedMonth';
import LikedYear from './components/likedSongs/LikedYear';
import LikedAll from './components/likedSongs/LikedAll';
import HomePage from './components/homePage/HomePage';
import Forum from './components/forum/Forum'
import TopSongs from './components/topSongs/TopSongs';
import TopArtists from './components/topArtists/TopArtists';
import ArtistsMonth from './components/topArtists/ArtistsMonth'
import ArtistsYear from './components/topArtists/ArtistsYear'
import ArtistsAll from './components/topArtists/ArtistsAll'
import AccessTokenProvider, { AccessTokenContext } from './Contexts/accessTokenContext';
import TopAll from './components/topSongs/TopAll';
import TopMonth from './components/topSongs/TopMonth';
import TopYear from './components/topSongs/TopYear';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AccessTokenProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/messages" element={<Messages />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/liked" element={<LikedSongs />} />
          <Route path="/top" element={<TopSongs />} />
          <Route path='/top/month' element={<TopMonth />} />
          <Route path='/top/year' element={<TopYear />} />
          <Route path='/top/all' element={<TopAll />} />
          <Route path="/artists" element={<TopArtists />} />
          <Route path='/artists/month' element={<ArtistsMonth />} />
          <Route path='/artists/year' element={<ArtistsYear />} />
          <Route path='/artists/all' element={<ArtistsAll />} />
          <Route path="/liked/month" element={<LikedMonth />} />
          <Route path='/liked/year' element={<LikedYear />} />
          <Route path='/liked/all' element={<LikedAll />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </AccessTokenProvider>
  
);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/navbar/ErrorPage";
import Messages from "./components/messagePage/Messages";
import Login from "./components/loginPage/Login";
import LikedSongs from "./components/likedSongs/LikedSongs";
import HomePage from "./components/homePage/HomePage";

import Forum from "./components/forum/Forum";
import TopSongs from "./components/topSongs/TopSongs";
import TopArtists from "./components/topArtists/TopArtists";
import AccessTokenProvider, {
  AccessTokenContext,
} from "./Contexts/accessTokenContext";
import UserProvider from "./Contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AccessTokenProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/messages" element={<Messages />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/liked" element={<LikedSongs />} />
            <Route path="/top" element={<TopSongs />} />
            <Route path="/artists" element={<TopArtists />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </AccessTokenProvider>
);

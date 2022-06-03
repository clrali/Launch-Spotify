import { Typography, Card, CardContent, Box, Button } from "@mui/material";
import React from "react";
import { AccessTokenContext } from "../../Contexts/accessTokenContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import { Link, Outlet } from "react-router-dom"
import "./LikedSongs.css";

function LikedSongs() {
    
  return (
    <div>
      <h1>Liked Songs</h1>
      <Button
        component={Link}
        to="/liked/month"
        variant="outlined"
        style={{
          borderRadius: 35,
          backgroundColor: "#FFFFFF",
        }}
      >
        Past Month
      </Button>

      <Button
        component={Link}
        to="/liked/year"
        variant="outlined"
        style={{
          borderRadius: 35,
          backgroundColor: "#FFFFFF",
        }}
      >
        Past Year
      </Button>

      <Button
        component={Link}
        to="/liked/all"
        variant="outlined"
        style={{
          borderRadius: 35,
          backgroundColor: "#FFFFFF",
        }}
      >
        All Time
      </Button>
    </div>
  );
}
export default LikedSongs;

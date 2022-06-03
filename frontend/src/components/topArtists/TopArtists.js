import {  Button } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom'
import "./TopArtists.css";

function TopArtists() {
  return (
    <div>
      <h1>Top Artists</h1>
      <Button
        component={Link}
        to="/artists/month"
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
        to="/artists/year"
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
        to="/artists/all"
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

export default TopArtists;

import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../../App.css";

function TopSongs() {
  return (
    <div>
      <h1>Top Songs</h1>
      <Button
        component={Link}
        to="/top/month"
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
        to="/top/year"
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
        to="/top/all"
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

export default TopSongs;

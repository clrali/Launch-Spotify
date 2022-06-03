
import React from 'react'
import {Helmet} from "react-helmet"


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTokenContext } from "../../Contexts/accessTokenContext";
import "../../App.css";


function TopSongs() {
  return (
    <div>

      <Helmet>
        <title>Top Songs</title>
      </Helmet>
        <h1>
            Most Played Songs
        </h1>

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

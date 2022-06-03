
import {
    Typography,
    Card,
    CardContent,
    Box,
    Grid,
    Button,
} from "@mui/material";
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

import React from 'react'
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";


function LikedSongs() {
    
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/users?token=" + accessToken)
        .then(res => res.json())
        .then(data => {
            setSongs(data.items)
        })

    }, [])
   
    console.log(songs)
    return (

        

        <div>
            <Helmet>
            <title>Liked Songs</title>
            </Helmet>
            <h1>Liked Songs</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p>{val.track.name} by {val.track.artists[0].name}</p>
            })
            }

        </div>
        
    )

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

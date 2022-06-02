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
            <h1>Liked Songs</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return <p>{val.track.name} by {val.track.artists[0].name}</p>
            })
            }

        </div>
        
    )
}

export default LikedSongs;
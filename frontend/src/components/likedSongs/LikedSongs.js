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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'


function LikedSongs() {
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/users/tracks?token=" + accessToken)
        .then(res => res.json())
        .then(data => {
            setSongs(data.items)
        })

    }, [])
    
    return (

        

        <div>
            <h1>Liked Songs</h1>
            {songs.length > 0 && 
                songs.map((val, key) => {
                    return (
                        <Box sx={{ mx: "auto", width: 500, p: 2 }} >
                        <Card variant="outlined" style={{margin: '0 auto', display: "flex"}}>
                            <img src={val.track.album.images[0].url} height="300" width="300"
                                alt="album cover"
                            />
                            <div>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
                                    {val.track.name} by {val.track.artists[0].name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                size="small" 
                                href={val.track.preview_url} 
                                target="_blank"
                                style={{margin: '0 auto', display: "flex"}}>
                                    Preview Song
                                </Button>
                            </CardActions>
                            </div>
                        </Card>
                        </Box>
                    )
            })
            }

        </div>
        
    )
}

export default LikedSongs;
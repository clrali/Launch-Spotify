import React from 'react'
import { AccessTokenContext } from '../../Contexts/accessTokenContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function LikedSongs() {
    
    const { accessToken } = useContext(AccessTokenContext);
    const [songs, setSongs] = useState([])

    console.log(accessToken)

    useEffect(() => {
        console.log("received liked songs")
        fetch("http://localhost:9000/spotify/users?token="+ accessToken)
        .then(res => {
            console.log(res.json())
        })
        .then(data => {
            console.log(data)
            console.log(data.items)
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
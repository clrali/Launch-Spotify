import React, { useState, useEffect } from 'react'

function LikedSongs() {
    const url = "http://localhost:9000/spotify"

    useEffect(() => {
        fetch(url + "/profile")
        .then((res) => res.json())
        .then((data) => {
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>
                Liked Songs
            </h1>
        </div>
    )
}

export default LikedSongs
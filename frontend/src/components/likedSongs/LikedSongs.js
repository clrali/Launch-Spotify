import React, { useState, useEffect } from 'react'

function LikedSongs() {
    const url = "http://localhost:9000/spotify"
    const [login, setLogin] = useState()

    useEffect(() => {
        fetch(url + "/login")
        .then((res) => res.text())
        .then((data) => {
            console.log(data)
            setLogin(data)})
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <h1>
                Liked Songs
            </h1>
            <a href={`${login}`}>Login to Spotify </a> 

        </div>
    )
}

export default LikedSongs
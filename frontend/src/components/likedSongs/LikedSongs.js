import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"

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
        <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={url}>
        Login With Spotify
      </a>
    </Container>
            <h1>
                Liked Songs
            </h1>
            <a href={`${login}`}>Login to Spotify </a> 
        </div>
    )
}

export default LikedSongs
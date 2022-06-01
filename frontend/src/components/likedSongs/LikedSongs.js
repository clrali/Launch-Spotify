import {
    Typography,
    Card,
    CardContent,
    Box,
    Grid,
    Button,
} from "@mui/material";
import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

function LikedSongs() {
    const url = "http://localhost:9000/spotify"
    const [login, setLogin] = useState()

    const onClick = (e) => {
        fetch("http://localhost:9000/spotify")
            .then((res) => res.json())
            .then((data) => {
                window.open(data.url);
            });
    };

    

    useEffect(() => {
        fetch(url + "/login")
            .then((res) => res.text())
            .then((data) => {
                console.log(data)
                setLogin(data)
            })

            .catch((err) => console.log(err))
    }, [])

    return (
        <div
            style={{
                background: "linear-gradient(#e66465, #9198e5)",
                height: "100vh",
                marginTop: 0,
                position: "fixed",
                width: "100vw",
            }}
        >
            <div>
                <Card
                    sx={{
                        borderRadius: "4px",
                        variant: "outlined",
                        boxShadow: 7,
                        maxWidth: 400,
                        minHeight: 100,
                        justifyContent: "center",
                        margin: "auto",
                        marginTop: "30vh",
                        backgroundColor: "#9AD896"
                        
                        
                    }}
                >
                    <CardContent>


                        <Container
                            className="d-flex justify-content-center align-items-center"
                            style={{ minHeight: "40vh", minWidth: "10vw" }}
                        >
                            {/* <a className="btn btn-success btn-lg" href={AUTH_URL}>
                                Login
                            </a> */}
                            <Button variant="outlined" sx = {{backgroundColor: "white", color: "black"}}onClick={(e) => onClick(e)}>
                                <img src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+U3BvdGlmeV9JY29uX1JHQl9HcmVlbjwvdGl0bGU+PHBhdGggZD0iTTE1LjU4OCA5LjA5NEMxMi40MyA3LjIyIDcuMjIzIDcuMDQ3IDQuMjA4IDcuOTZjLS40ODMuMTQ4LS45OTQtLjEyNS0xLjE0LS42MS0uMTQ4LS40ODMuMTI1LS45OTUuNjEtMS4xNDIgMy40Ni0xLjA1IDkuMjEtLjg0NyAxMi44NDUgMS4zMS40MzYuMjYuNTguODIuMzIgMS4yNTYtLjI1OC40MzUtLjgyLjU4LTEuMjU1LjMyem0tLjEwMyAyLjc3N2MtLjIyMi4zNi0uNjkyLjQ3My0xLjA1LjI1My0yLjYzMy0xLjYxOC02LjY0Ni0yLjA4Ny05Ljc2LTEuMTQyLS40MDQuMTIzLS44My0uMTA0LS45NTMtLjUwOC0uMTIyLS40MDMuMTA2LS44My41MS0uOTUyIDMuNTU2LTEuMDggNy45OC0uNTU3IDExLjAwMiAxLjMuMzYuMjIyLjQ3Mi42OTMuMjUgMS4wNXptLTEuMiAyLjY2OGMtLjE3NS4yOS0uNTUuMzgtLjgzOC4yMDMtMi4zLTEuNDA0LTUuMTk1LTEuNzIyLTguNjA0LS45NDMtLjMzLjA3NS0uNjU2LS4xMy0uNzMtLjQ2LS4wNzctLjMyOC4xMy0uNjU1LjQ1OC0uNzMgMy43MzItLjg1MyA2LjkzMi0uNDg2IDkuNTE0IDEuMDkyLjI4OC4xNzQuMzc4LjU1LjIwMi44Mzh6TTkuNzk2LjQxQzQuMzg1LjQxIDAgNC43OTcgMCAxMC4yMDYgMCAxNS42MTUgNC4zODUgMjAgOS43OTUgMjBzOS43OTQtNC4zODUgOS43OTQtOS43OTVTMTUuMjAzLjQxIDkuNzk0LjQxeiIgZmlsbD0iIzREQjA1QiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" ></img>Connect with Spotify
                            </Button>
                        </Container>

                    </CardContent>
                </Card>
            </div>
        </div>
        //     <div>

        //         <h1>
        //             Liked Songs
        //         </h1>
        //         <a href={`${login}`}>Login to Spotify </a> 
        //         <Container
        //     className="d-flex justify-content-center align-items-center"
        //     style={{ minHeight: "100vh" }}
        // >
        //   <a className="btn btn-success btn-lg" href={AUTH_URL}>
        //     Login With Spotify
        //   </a>
        // </Container>
        //     </div>
    )
}

export default LikedSongs
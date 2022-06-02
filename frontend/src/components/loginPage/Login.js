import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import { AccessTokenContext } from "../../Contexts/accessTokenContext";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Login = (props) => {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
//   const { user, setUser} = useContext(UserContext);

  const onClick = (e) => {
    fetch("http://localhost:9000/spotify")
      .then((res) => res.json())
      .then((data) => {
        window.open(data.url);
      });
  };

  const path = window.location.href.split("/")[3];
  let code = ''
  
  useEffect(()=> {
	if(path){
		code = path.split('=')[1]
		fetch('http://localhost:9000/spotify/callback?code=' + code)
		.then(res => res.json())
		.then(data => {
			if(data.token){
				setAccessToken(data.token)
				console.log("token is set")
				navigate('/home')
			}  
		})
	}
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
            variant: "outlined",
            boxShadow: 7,
            maxWidth: 400,
            minHeight: 100,
            justifyContent: "center",
            margin: "auto",
            marginTop: "30vh",
          }}
        >
          <CardContent>
            <Button variant="contained" onClick={(e) => onClick(e)}>
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
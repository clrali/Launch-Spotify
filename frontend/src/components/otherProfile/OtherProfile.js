import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Stack,
  Card,
  InputBase,
  Paper,
  Grid,
  styled,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));
const OtherProfile = (props) => {
  return (
    <>
      <Grid sx={{ marginLeft: "20%" }}>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              marginRight: "5%",
            },
          }}
        >
          <Avatar
            alt="test"
            src="./placeholder.jpg"
            sx={{ width: 150, height: 150 }}
          />
          <StyledPaper
            sx={{
              my: 2,
              mx: "auto",
              p: 10,
              minWidth: 600,
            }}
          ></StyledPaper>
        </Box>
      </Grid>
      <Box
        sx={{
          px: 3,
          margin: "auto",
        }}
      >
        <StyledPaper
          sx={{
            my: 2,
            mx: "auto",
            p: "auto",
            minWidth: 900,
          }}
        >
          <Card sx={{ maxWidth: 100 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="example"
                alt="example song"
              />
              <CardContent>
                <Typography variant="h9" component="div">
                  Song example
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 2,
            mx: "auto",
            minWidth: 900,
          }}
        >
          {" "}
          <Card sx={{ maxWidth: 100 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="example"
                alt="example song"
              />
              <CardContent>
                <Typography variant="h9" component="div">
                  Song example
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 2,
            mx: "auto",
            minWidth: 900,
          }}
        >
          {" "}
          <Card sx={{ maxWidth: 100 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="50"
                image="example"
                alt="example song"
              />
              <CardContent>
                <Typography variant="h9" component="div">
                  Song example
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </StyledPaper>
      </Box>
    </>
  );
};

export default OtherProfile;
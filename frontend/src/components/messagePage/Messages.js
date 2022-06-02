import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  Card,
  InputBase,
  Paper,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
//import { UserContext } from "../../UserContext";
import MessageBody from "./MessageBody";
import RefreshIcon from "@mui/icons-material/Refresh";
import Messengers from "./Messengers";

const Messages = () => {

  //const { user, setUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [nothing, setNothing] = useState(false);
  const [messengers, setMessengers] = useState([]);
  const [messenger, setMessenger] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/spotify/messengers")
    .then((res) => res.json())
    .then((text) => {
        setMessengers(text.result);
    })
    .catch((err) => console.log(err))
}, [])

  function updateMessages() {
    fetch("http://localhost:9000/spotify/messages?id=" + messenger)
    .then((res) => res.json())
    .then((text) => {
        if (text.result.length === 0) {
            setNothing(true);
          }
        if (text.result.length !== 0) {
            setNothing(false);
        }
        setMessages(text.result);
    })
    .catch((err) => console.log(err))
  };

  return (
    <>
      <AppBar color="primary">
        <Box>
          <IconButton size="large" aria-label="back" variant="contained">
            <ArrowBackIosIcon color="secondary" />
          </IconButton>
          <IconButton size="large" aria-label="back" variant="contained">
            <ArrowForwardIosIcon color="secondary" />
          </IconButton>
        </Box>
      </AppBar>

      <Card
        sx={{
          bgcolor: "white",
          marginTop: "3%",
          marginLeft: "30%",
          marginRight: "25%",
          paddingBottom: "18%",
          boxShadow: 7,
          borderRadius: 2,
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Mesengers"
                inputProps={{ "aria-label": "search person" }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              {messenger}
              <IconButton onClick={updateMessages}>
                <RefreshIcon />
              </IconButton>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Messengers messengers = {messengers} setMessenger = {setMessenger} update={updateMessages}> </Messengers>
          </Grid>
          <Grid item xs={6}>
            <MessageBody messages = {messages} nothing = {nothing}></MessageBody>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Messages;

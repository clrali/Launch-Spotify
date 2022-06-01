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
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Messages = (props) => {
	const {user, setUser} = useContext(UserContext);
	console.log(user);
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
            <Typography> User </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack>
              <Button variant="text"> {user} </Button>
              <Button variant="text"> User2 </Button>
              <Button variant="text"> User3 </Button>
              <Button variant="text"> User4 </Button>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h6"> {user} </Typography>
              <Typography variant="p"> message </Typography>
            </Box>
            <Box>
              <Typography variant="h6"> User </Typography>
              <Typography variant="p"> message </Typography>
            </Box>
            <Box>
              <Typography variant="h6"> User </Typography>
              <Typography variant="p"> message </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Messages;

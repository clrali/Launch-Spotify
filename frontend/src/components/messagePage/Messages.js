import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, AppBar, Box, IconButton, Toolbar, Stack, Card } from "@mui/material";

const Messages = (props) => {
  return (
    <>
      <AppBar color="primary">
		  <Box>
          <IconButton size='large' aria-label="back" variant="contained">
            <ArrowBackIosIcon color="secondary" />
          </IconButton>
          <IconButton size='large' aria-label="back" variant="contained">
            <ArrowForwardIosIcon color="secondary" />
          </IconButton>
		  </Box>
      </AppBar>
    </>
  );
};

export default Messages;

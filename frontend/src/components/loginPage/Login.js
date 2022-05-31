import {
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Button,
} from "@mui/material";

const Login = (props) => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div style={{ backgroundColor: "blue", height: "100vh", marginTop: 0, position: 'fixed', width: '100vw' }}>
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
            <Button variant="contained" onClick={handleClick}>
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

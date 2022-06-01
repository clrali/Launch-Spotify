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
  Avatar,
} from "@mui/material";
import React, { useEffect, useState, useRef } from 'react';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const commonStyles = {
  bgcolor: '#ADD8E6',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '80vh',
};


const HomePage = (props) => {
  const [users, setUsers] = useState([]);

  const printUsers = async () => {
    const documents = await getDocs(collection(db, "students"));
    console.log(documents);
    let list = [];
    documents.forEach((student) =>
      list.push({ id: student.id, ...student.data() })
    );
    setUsers(list);
  };

  useEffect(() => {
    printUsers();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "10vh" }}
      >
        <List
          sx={{ ...commonStyles, borderRadius: "4px" }}
          component="nav"
          aria-label="mailbox folders"
        >
          {students.map((student) => {
            console.log(student);
            return (
              <EditStudent
                studentId={student.id}
                firstname={student.firstname}
                lastname={student.lastname}
                birthday={student.birthday}
                grade={student.grade}
              />
            );
          })}
        </List>
      </Grid>
      {/*<Box
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          px: 3,
          margin: "auto",
        }}
      >
        <StyledPaper
          sx={{
            my: 3,
            mx: "auto",
            p: 10,
          }}
        >
          <Card>

          </Card>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 3,
            mx: "auto",
            p: 10,
          }}
        ></StyledPaper>
        <StyledPaper
          sx={{
            my: 3,
            mx: "auto",
            p: 10,
          }}
        ></StyledPaper>
        </Box>*/}
    </>
  );
};

export default HomePage;

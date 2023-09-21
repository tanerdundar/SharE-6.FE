import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Home from "./Home";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn(props) {
  const [followCount, setFollowCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  // const navigate = useNavigate();
  const passwordChange = (e) => {
    setPassword(e.target.value);
    setWrong(false);
  };
  const usernameChange = (e) => {
    setUsername(e.target.value);
    setWrong(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };
  const signChanger = () => {
    // navigate("signup");
    props.changer(props.isSigned);
  };
  const logIner = () => {
    setWrong(false);
    tryToLogIn();
  };
  const tryToLogIn = async () => {
    const user = { username, password };

    const response = await axios
      .post("http://138.68.66.115:8080/api/users/login", user)
      .then((response) => {
        //  navigate("home");
        findUser(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data);
        setWrong(true);
      });
  };
  const findUser = (id) => {
    const response = axios
      .get("http://138.68.66.115:8080/api/users/" + id)
      .then((e) => {
        setUser(e.data);
        setFollowCount(e.data.numberOfFollowers);
        setIsLogged(!isLogged);
      });
  };
  const setLogged = () => {
    setIsLogged(!isLogged);
  };
  console.log(followCount);
  return (
    <>
      {isLogged ? (
        <Home
          func={setLogged}
          user={user}
          fCount={followCount}
          asd={setFollowCount}
        />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <Container
            style={{
              backgroundColor: "white",
              paddingBottom: "5vh",
              borderRadius: "20px",
            }}
            component="main"
            maxWidth="xs"
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ m: 1, bgcolor: "secondary.main" }}
                style={{
                  backgroundColor: "rgba(255, 170, 12, 0.594)",
                  color: "black",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  onChange={usernameChange}
                />
                {!wrong ? (
                  <div
                    style={{
                      height: "1vh",
                      color: "red",
                      display: "flex",
                      alignContent: "center",
                      flexWrap: "wrap",
                    }}
                  ></div>
                ) : (
                  <div
                    className="message"
                    style={{
                      height: "1vh",
                      color: "red",
                      display: "flex",
                      alignContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={passwordChange}
                />
                {/* ---REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME---
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
             ---REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME---*/}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={logIner}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* ---FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD---
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                ---FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD--- */}
                  </Grid>
                  <Grid item>
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={signChanger}
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

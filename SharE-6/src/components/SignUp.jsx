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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useEffect } from "react";

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

export default function SignUp(props) {
  const [user, setUser] = useState(" ");
  const [situ, setSitu] = useState(true);
  // const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 5) {
      setErrorMessage("Password must be at least 5 characters!...");
      setVisible(true);
    } else {
      if (password != rePassword) {
        setErrorMessage("Passwords do not match!");
        setVisible(true);
      } else {
        const data = new FormData(event.currentTarget);
        const pUser = {
          username: data.get("firstName"),
          email: data.get("email"),
          password: data.get("password"),
        };
        const response = await axios
          .post("http://138.68.66.115:8080/api/users", pUser)
          .then((e) => {
            setUser(e.data);
            setSitu(false);
          })
          .catch((e) => {
            setVisible(true);
            setErrorMessage(e.response.data);
          });
      }
    }
  };

  const signChanger = () => {
    // navigate("login");
    props.changer(props.isSigned);
  };
  const setLogged = () => {
    setIsLogged(!isLogged);
  };
  const setVisibility = () => {
    setVisible(false);
  };
  const passwordCatcher = (e) => {
    setPassword(e.target.value);
  };
  const rePasswordCatcher = (e) => {
    setRePassword(e.target.value);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {situ ? (
        <Container
          component="main"
          style={{
            backgroundColor: "white",
            paddingBottom: "5vh",
            borderRadius: "20px",
          }}
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              onChange={setVisibility}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Username"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={passwordCatcher}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Re-enter password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={rePasswordCatcher}
                  />
                </Grid>
                <div
                  style={{ paddingLeft: "20px", fontSize: "2vh" }}
                  className="message"
                >
                  {visible ? errorMessage : ""}
                </div>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    style={{ cursor: "pointer" }}
                    variant="body2"
                    onClick={signChanger}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      ) : (
        <Home func={setLogged} user={user} />
      )}
    </ThemeProvider>
  );
}

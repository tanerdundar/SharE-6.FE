import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";

function Forum(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const situChanger = () => {
    console.log("aaa");
    props.changer(props.situ);
  };
  return (
    <>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* ---REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME--- */}
            {/* <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  /> */}
            {/* ---REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME------REMEMBER  ME--- */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* ---FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD--- */}
                {/* <Link href="#" variant="body2">
        Forgot password?
      </Link> */}
                {/* ---FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD------FORGET PASSWORD--- */}
              </Grid>
              <Grid item>
                <Link href="signup" onClick={situChanger} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Forum;

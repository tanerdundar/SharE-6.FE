import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NavBar(props) {
  const navigate = useNavigate();
  const logChanger = () => {
    navigate("login");
    props.changer(props.isLogged);
  };
  const goHome = () => {
    navigate("home");
    const response = axios
      .get("http://localhost:8080/api/meows/home/" + props.user.userId)
      .then((e) => {
        props.goHome(e.data);
      });
  };
  const goProfile = () => {
    navigate(`${props.user.username}`);
    props.goProfile();
  };
  const exiter = () => {
    props.func(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: " rgba(255, 170, 12, 0.594)" }}
      >
        <Toolbar>
          <Typography
            onClick={goHome}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              cursor: "pointer",
              display: "flex",
              color: "rgba(5, 5, 245, 0.922)",
            }}
          >
            Home
          </Typography>
          <Typography
            onClick={goProfile}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              cursor: "pointer",
              marginRight: "40%",
              color: "rgba(5, 5, 245, 0.922)",
            }}
          >
            My Meows
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={logChanger}
              color="inherit"
            >
              <ExitToAppIcon
                onClick={exiter}
                style={{ color: "rgba(5, 5, 245, 0.922)" }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

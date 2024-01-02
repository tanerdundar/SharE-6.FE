import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import { Grid, Tooltip } from "@mui/material";

export default function NavBar(props) {
  const logChanger = () => {
    props.changer(props.isLogged);
  };
  const goHome = () => {
    const response = axios
      .get("http://138.68.66.115:8080/api/meows/home/" + props.user.userId)
      .then((e) => {
        props.goHome(e.data);
      });
  };
  const goProfile = () => {
    const result = axios
      .get("http://138.68.66.115:8080/api/meows/" + props.user.userId)
      .then((e) => {
        props.goProfile(e.data);
      });
  };
  const goAdminPanel = () => {
    props.goAdminPanel();
  };
  const exiter = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: " rgba(255, 170, 12, 0.594)" }}
      >
        <Toolbar>
          <Grid item>
            <Tooltip title="Home" placement="top">
              <div
                className="asd"
                onClick={goHome}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  color: "rgba(5, 5, 245, 0.922)",
                  width: "%40",
                }}
              >
                Home
              </div>
            </Tooltip>
          </Grid>
          <Grid style={{ padding: "0 2%" }} item>
            <Tooltip title="My Meows" placement="top">
              <div
                className="asd"
                onClick={goProfile}
                style={{
                  cursor: "pointer",
                  color: "rgba(5, 5, 245, 0.922)",
                }}
              >
                My Meows
              </div>
            </Tooltip>
          </Grid>
          <Grid style={{ padding: "0 50% 0 0" }} item>
            <Tooltip title="ADMIN" placement="top">
              <div
                onClick={goAdminPanel}
                style={{
                  width: "55%",
                }}
              >
                {props.user.userRank == "ADMIN" ? (
                  <div
                    style={{
                      cursor: "pointer",
                      color: "red",
                    }}
                  >
                    ADMIN
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </Tooltip>
          </Grid>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={logChanger}
              color="inherit"
            >
              <Grid item>
                <Tooltip title="Exit" placement="top">
                  <ExitToAppIcon
                    onClick={exiter}
                    style={{ color: "rgba(5, 5, 245, 0.922)" }}
                  />
                </Tooltip>
              </Grid>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

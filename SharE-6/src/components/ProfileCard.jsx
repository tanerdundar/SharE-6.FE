import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Profile from "./Profile";
import Numbers from "./Numbers";
import MiniProfile from "./MiniProfile";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProfileCard(props) {
  let colors = [
    "#00FFFF",
    "#808080",
    "#000080",
    "#C0C0C0",
    "#008080",
    "#808000",
    "#008000",
    "#0000FF",
    "#00FF00",
    "#800080",
    "#FF00FF",
    "#800000",
    "#FF0000",
    "#FFFF00",
  ];
  const colorPicker = () => {
    let color = "#";
    let p = Math.floor(Math.random() * 14);
    color = colors[p];
    return color;
  };
  const bgcolor = colorPicker();
  return (
    <Card sx={{ minWidth: 275 }} style={{ height: "80vh" }}>
      <div className="profile">
        <div className="photo">
          <div
            className="photo-inside"
            style={{ backgroundColor: `${bgcolor}` }}
          >
            {props.user.firstName[0]}
          </div>
        </div>
        <div className="name">
          <div className="real-name">{props.user.firstName}</div>
          <div className="nickname"> {"@" + `${props.user.username}`}</div>
        </div>
        <div className="numbers">
          <Numbers number={props.user.meows} text={"Meows"} />
          <Numbers number={props.user.followings} text={"Followings"} />
          <Numbers number={props.user.followers} text={"Followers"} />
        </div>
        <MiniProfile user={props.user} />
      </div>
    </Card>
  );
}

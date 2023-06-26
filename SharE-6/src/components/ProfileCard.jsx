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
  ></Box>
);

export default function ProfileCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} style={{ height: "80vh" }}>
      <div className="profile">
        <div className="photo">
          <div
            className="photo-inside"
            style={{ backgroundColor: `${props.user.backgroundColor}` }}
          >
            {props.user.username[0].toUpperCase()}
          </div>
        </div>
        <div className="name">
          <div className="real-name">{props.user.username}</div>
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

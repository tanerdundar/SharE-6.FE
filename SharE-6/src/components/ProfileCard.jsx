import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Profile from "./Profile";
import Numbers from "./Numbers";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProfileCard(props) {
  const colorPicker = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let p = Math.floor(Math.random() * 16);
      if (p < 10) {
        color += p;
      } else {
        switch (p) {
          case 10:
            color += "a";
            break;
          case 11:
            color += "b";
            break;
          case 12:
            color += "c";
            break;
          case 13:
            color += "d";
            break;
          case 14:
            color += "e";
            break;
          case 15:
            color += "f";
            break;
        }
      }
    }
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
        <div className="mini-profile">
          <div className="mini-profile-inside">
            <div className="mp-photo">{props.user.firstName[0]}</div>
            <div className="mp-name">
              <div className="real-name">{props.user.firstName}</div>
              <div className="nickname"> {"@" + `${props.user.username}`}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

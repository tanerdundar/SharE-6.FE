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
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function ProfileCard(props) {
  const [meowNumber, setMeowNumber] = useState(props.user.numberOfMeows);
  const [followerNumber, setFollowerNumber] = useState(
    props.user.numberOfFollowers
  );
  const [followingNumber, setFollowingNumber] = useState(
    props.user.numberOfFollowings
  );
  const toUpper = (x, y) => {
    props.toUpest(x, y);
  };
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        margin: "6vh 10%",
        border: "6px  rgba(255, 170, 12, 0.594) solid",
        boxShadow: "none",
      }}
    >
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
          <div className="real-name">
            {props.user.name == null ? props.user.username : props.user.name}
          </div>
          <div className="nickname"> {"@" + `${props.user.username}`}</div>
        </div>
        <div className="numbers">
          <Numbers
            user={props.user}
            number={meowNumber}
            text={"Meows"}
            toUp={toUpper}
            owner={props.user}
          />
          <Numbers
            user={props.user}
            number={followingNumber}
            text={"Followings"}
            toUp={toUpper}
            owner={props.user}
          />
          <Numbers
            user={props.user}
            number={followerNumber}
            text={"Followers"}
            toUp={toUpper}
            owner={props.user}
          />
        </div>
        <MiniProfile user={props.user} />
      </div>
    </Card>
  );
}

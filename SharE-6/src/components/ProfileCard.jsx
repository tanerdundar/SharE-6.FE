import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Numbers from "./Numbers";
import MiniProfile from "./MiniProfile";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { Button, Grid, Tooltip } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function ProfileCard(props) {
  const [meowNumber, setMeowNumber] = useState(
    props.user.numberOfMeows + props.meows
  );
  const [name, setName] = useState(
    props.user.name == null ? props.user.username : props.user.name
  );
  const [status, setStatus] = useState(true);
  const [followerNumber, setFollowerNumber] = useState(
    props.user.numberOfFollowers
  );
  const [followingNumber, setFollowingNumber] = useState(
    props.user.numberOfFollowings
  );
  const toUpper = (x, y) => {
    props.toUpest(x, y);
  };
  const editName = () => {
    setStatus(false);
  };
  const input = { name };
  const saveName = () => {
    setStatus(true);
    const response = axios.put(
      "http://138.68.66.115:8080/api/users/" + props.user.userId,
      input
    );
  };
  const setStatusToTrue = () => {
    setStatus(true);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        margin: "6vh 10%",
        border: "6px  rgba(255, 170, 12, 0.594) solid",
        boxShadow: "none",
        borderRadius: "20px",
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
            <div className="outer">
              {status ? (
                name
              ) : (
                <div style={{ display: "flex" }}>
                  <input onChange={changeName} placeholder={name} />
                  <button onClick={saveName}>Save</button>
                  <b
                    style={{
                      marginLeft: "5%",
                      cursor: "pointer",
                      fontStyle: "solid",
                    }}
                    onClick={setStatusToTrue}
                  >
                    X
                  </b>
                </div>
              )}
            </div>
            <Grid item style={{ marginLeft: "5%" }}>
              <Tooltip title="Edit your name" placement="right-start">
                <div className="edit">
                  <FaPen style={{ cursor: "pointer" }} onClick={editName} />
                </div>
              </Tooltip>
            </Grid>
          </div>
          <div className="nickname"> {"@" + `${props.user.username}`}</div>
        </div>
        <div
          className="numbers"
          style={{
            border: "5px solid  rgba(255, 170, 12, 0.594)",
            padding: "1vh 0",
            borderRadius: "15px",
          }}
        >
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

import React from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import "animate.css";
import { Grid, Tooltip } from "@mui/material";

const Meow = (props) => {
  const [isLike, setIsLike] = useState(props.meow.liked);
  const [likeNumber, setLikeNumber] = useState(props.meow.likedUsers.length);
  const date = new Date(props.meow.meowDate);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const hour = date.getHours();
  const minute = date.getMinutes();

  const liker = () => {
    const newIsLike = !isLike;
    const newLikeNumber = newIsLike ? likeNumber + 1 : likeNumber - 1;

    const response = newIsLike
      ? axios.post(
          "http://138.68.66.115:8080/api/likes/" +
            props.logged.userId +
            "/" +
            props.meow.meowId
        )
      : axios.delete(
          "http://138.68.66.115:8080/api/likes/" +
            props.logged.userId +
            "/" +
            props.meow.meowId
        );
    response.then(() => {
      setIsLike((prevIsLike) => newIsLike);
      setLikeNumber((prevLikeNumber) => newLikeNumber);
    });
  };

  return (
    <Card
      style={{
        borderRadius: "20px",
        minHeight: "14vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        marginTop: "1vh",
        maxWidth: "99%",
      }}
    >
      <div
        className="meow-user-photo"
        style={{ backgroundColor: props.meow.owner.backgroundColor }}
      >
        {props.meow.owner.username[0].toUpperCase()}
      </div>
      <div className="meow-right">
        <div className="meow-user" style={{ cursor: "pointer" }}>
          {props.meow.owner.name == null
            ? props.meow.owner.username
            : props.meow.owner.name}
          {" " + "@" + props.meow.owner.username}
        </div>
        <div className="meow-content">{props.meow.content}</div>
        <div className="meow-others">
          <div className="like">
            <div className="like-number">{likeNumber}</div>
            <Grid item>
              <Tooltip title={!isLike ? "Like" : "Unlike"} placement="right">
                <div
                  className="icon"
                  style={{ cursor: "pointer" }}
                  onClick={liker}
                >
                  {isLike ? (
                    <FaPaw
                      style={{
                        animation: "bounceIn",
                        animationDuration: "1s",
                        color: "red",
                        marginTop: "7px",
                      }}
                    />
                  ) : (
                    <FaPaw style={{ color: "black", marginTop: "7px" }} />
                  )}
                </div>
              </Tooltip>
            </Grid>
          </div>
          <div className="date">
            {hour + ":" + minute + " " + day + "-" + month + "-" + year}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Meow;

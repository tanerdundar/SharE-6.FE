import React from "react";
import Card from "@mui/material/Card";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";

const Meow = (props) => {
  console.log(props.meow.meowDate);
  const date = new Date(props.meow.meowDate);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const hour = date.getHours();
  const minute = date.getMinutes();

  const colorPicker = () => {
    let color = props.meow.owner.backgroundColor;
    return color;
  };
  return (
    <Card
      style={{
        borderBottom: "1px solid black",
        borderRadius: "0",
        height: "26vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="meow-user-photo"
        style={{ backgroundColor: colorPicker() }}
      >
        {props.user.username[0].toUpperCase()}
      </div>
      <div className="meow-right">
        <div className="meow-user">
          {props.user.firstName}
          {" " + "@" + props.user.username}
        </div>
        <div className="meow-content">{props.meow.content}</div>
        <div className="meow-others">
          <div className="like">
            <div className="like-number">55</div>
            <div className="icon">
              <SentimentVerySatisfiedIcon />
              {/* <SentimentVerySatisfiedTwoToneIcon /> */}
            </div>
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

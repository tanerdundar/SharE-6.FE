import React from "react";
import Card from "@mui/material/Card";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";

const Meow = (props) => {
  const colorPicker = () => {
    let color = props.user.backgroundColor;
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
        <div className="meow-content">
          I hope that even my worst critics remain on Twitter, because that is
          what free speech means
        </div>
        <div className="meow-others">
          <div className="like">
            <div className="like-number">55</div>
            <div className="icon">
              <SentimentVerySatisfiedIcon />
              {/* <SentimentVerySatisfiedTwoToneIcon /> */}
            </div>
          </div>
          <div className="date">Meow Date</div>
        </div>
      </div>
    </Card>
  );
};

export default Meow;

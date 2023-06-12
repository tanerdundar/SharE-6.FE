import React from "react";
import Card from "@mui/material/Card";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";

const Meow = (props) => {
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
  return (
    <Card style={{ height: "26vh", display: "flex", flexDirection: "row" }}>
      <div
        className="meow-user-photo"
        style={{ backgroundColor: colorPicker() }}
      >
        {props.user.firstName[0]}
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
            </div>
          </div>
          <div className="date">Meow Date</div>
        </div>
      </div>
    </Card>
  );
};

export default Meow;

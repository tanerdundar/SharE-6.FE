import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVerySatisfiedTwoToneIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";

const Meow = (props) => {
  return (
    <Card style={{ height: "26vh", display: "flex", flexDirection: "row" }}>
      <div className="meow-user-photo">{props.user.firstName[0]}</div>
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
          <div className="date"></div>
        </div>
      </div>
    </Card>
  );
};

export default Meow;

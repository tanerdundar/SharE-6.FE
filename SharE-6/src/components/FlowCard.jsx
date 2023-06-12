import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import Meow from "./Meow";
import MiniProfile from "./MiniProfile";
import UserList from "./UserList";

export default function FlowCard(props) {
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
    // <Card
    //   style={{
    //     marginTop: "5vh",
    //     height: "75vh",
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    //   <CardContent>
    //     <Meow user={props.user} />
    //     <Meow user={props.user} />
    //     <Meow user={props.user} />
    //     <Meow user={props.user} />
    //     <Meow user={props.user} />
    //   </CardContent>
    //   <Meow user={props.user} />
    //   <Meow user={props.user} />
    //   <Meow user={props.user} />
    // </Card>
    <div
      className="card-inside"
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <Meow user={props.user} />
      <Meow user={props.user} />
      <Meow user={props.user} />
      <Meow user={props.user} />
      <Meow user={props.user} />
      <UserList user={props.user} />
    </div>
  );
}

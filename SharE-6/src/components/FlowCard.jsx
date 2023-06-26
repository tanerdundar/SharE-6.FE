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
import axios from "axios";
import { useState } from "react";

export default function FlowCard(props) {
  console.log(props.list);

  return (
    //
    //<Card
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
    <>
      {props.kind ? (
        <div
          className="card-inside"
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          {props.list.map((e) => {
            return <Meow meow={e} user={e.owner} />;
          })}
        </div>
      ) : (
        <div
          className="card-inside"
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          <Meow user={props.user} />
        </div>
      )}
    </>
  );
}

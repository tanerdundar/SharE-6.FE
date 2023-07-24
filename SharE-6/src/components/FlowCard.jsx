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
import { useState, useEffect } from "react";
import FlowUser from "./FlowUser";

export default function FlowCard(props) {
  const [list, setList] = useState(props.list);
  useEffect(() => {
    setList(props.list);
    console.log(props.list);
  }, [list]);
  const toUpper = (e) => {
    props.toUpest(e);
  };
  return (
    <>
      {props.kind ? (
        <div
          className="card-inside"
          style={{ overflowX: "hidden", overflowY: "auto", marginTop: "3vh" }}
        >
          {list.map((e) => {
            return <Meow logged={props.user} meow={e} />;
          })}
        </div>
      ) : (
        <div
          className="card-inside"
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          {list.map((e) => {
            return <FlowUser toUp={toUpper} user={e} />;
          })}
        </div>
      )}
    </>
  );
}

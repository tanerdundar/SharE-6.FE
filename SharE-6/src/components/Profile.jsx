import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useState } from "react";

export default function Profile(props) {
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
  const bgcolor = colorPicker();
  const bgcolor2 = colorPicker();
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: `${bgcolor}` }}>
        {props.user.firstName[0] + props.user.lastName[0]}
      </Avatar>
      <Avatar sx={{ bgcolor: `${bgcolor2}` }}>OP</Avatar>
    </Stack>
  );
}

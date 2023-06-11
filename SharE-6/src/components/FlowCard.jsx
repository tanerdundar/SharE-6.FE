import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import Meow from "./Meow";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function FlowCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: "5vh", height: "65vh" }}>
      <CardContent>
        <Meow user={props.user} />
        <Meow user={props.user} />
      </CardContent>
    </Card>
  );
}

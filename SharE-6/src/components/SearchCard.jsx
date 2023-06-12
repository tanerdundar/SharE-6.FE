import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SearchCard() {
  return (
    <div className="search">
      <div className="search-inside">
        <input className="inputer" type="text" placeholder="text here..." />
        <button className="get-button">Search</button>
      </div>
    </div>
  );
}

import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FoundUser from "./FoundUser";
import { Grid, Tooltip } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchCard(props) {
  const [isSearched, setIsSearched] = useState(
    props.key > 0 ? false : props.searchedUser == undefined ? true : false
  );
  const [searchedUserName, setSearchedUserName] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState(
    props.searchedUser == "" ? "" : props.searchedUser
  );
  const [isFollowing, setIsFollowing] = useState(false);

  const userSearch = async () => {
    if (searchedUserName !== "") {
      const response = await axios
        .get(
          "http://138.68.66.115:8080/api/users/check/" +
            searchedUserName +
            "/" +
            props.owner.userId
        )
        .then(async (e) => {
          setUser(e.data);
          setIsFollowing(e.data.follow);
          setIsSearched(!isSearched);
        })
        .catch((e) => {
          setErrorMessage(e.response.data);
          setError(true);
        });
    } else {
    }
  };
  const userRecorder = (e) => {
    setSearchedUserName(e.target.value);
    setError(false);
  };
  const isSearchedSetter = () => {
    setIsSearched(!isSearched);
    setSearchedUserName("");
  };
  const toHighest = (x, y) => {
    props.toHighest(x, y);
  };
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
  ];
  return (
    <>
      {isSearched ? (
        <div className="search">
          <div className="search-inside">
            <input
              className="inputer"
              type="text"
              onChange={userRecorder}
              placeholder="text here..."
            />
            {error ? (
              <div className="message">{errorMessage}</div>
            ) : (
              <div className="message"></div>
            )}
            <Grid item>
              <Tooltip title="Search" placement="bottom">
                <button className="get-button" onClick={userSearch}>
                  Search
                </button>
              </Tooltip>
            </Grid>
          </div>
        </div>
      ) : (
        <FoundUser
          toUpest={toHighest}
          isFollow={isFollowing}
          owner={props.owner}
          user={user}
          func={isSearchedSetter}
          asdd={props.asd}
        />
      )}
    </>
  );
}

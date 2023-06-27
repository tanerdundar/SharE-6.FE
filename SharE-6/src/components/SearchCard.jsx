import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FoundUser from "./FoundUser";

export default function SearchCard(props) {
  const [isSearched, setIsSearched] = useState(true);
  const [searchedUserName, setSearchedUserName] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const userSearch = async () => {
    if (searchedUserName !== "") {
      const response = await axios
        .get("http://localhost:8080/api/users/check/" + searchedUserName)
        .then(async (e) => {
          const response = await axios
            .get("http://localhost:8080/api/users/search/" + searchedUserName)
            .then(async (e) => {
              setUser(e.data);
              setIsSearched(!isSearched);

              const response = await axios
                .get(
                  "http://localhost:8080/api/follows/checkFollow/" +
                    props.owner.userId +
                    "/" +
                    e.data.userId
                )
                .then((e) => {
                  if (e.data) {
                    setIsFollowing(true);
                  }
                });
            });
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
            <button className="get-button" onClick={userSearch}>
              Search
            </button>
          </div>
        </div>
      ) : (
        <FoundUser
          isFollow={isFollowing}
          owner={props.owner}
          user={user}
          func={isSearchedSetter}
        />
      )}
    </>
  );
}

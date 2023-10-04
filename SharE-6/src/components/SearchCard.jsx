import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FoundUser from "./FoundUser";
import { Grid, Tooltip } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

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
  const [list, setList] = useState([]);

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
  const list1 = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];
  const list2 = [
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
  ];
  const list3 = [
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];
  const deneme2 = () => {
    setList(list1);
  };
  useEffect(() => {}, [list]);
  return (
    <>
      {isSearched ? (
        <div className="search">
          <div className="search-inside">
            {/* <input
              className="inputer"
              type="text"
              onChange={userRecorder}
              placeholder="text here..."
            /> */}
            {/* <AutoComplete /> */}
            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={list.map((option) => option.title)}
                onChange={deneme2}
                renderInput={(params) => (
                  <TextField {...params} label="freeSolo" />
                )}
              />
            </Stack>

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

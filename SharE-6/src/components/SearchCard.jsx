import * as React from "react";
import { useState } from "react";
import axios from "axios";
import FoundUser from "./FoundUser";
import { Grid, Tooltip } from "@mui/material";

export default function SearchCard(props) {
  const [isSearched, setIsSearched] = useState(
    props.key > 0 ? false : props.searchedUser == undefined ? true : false
  );
  const [searchedUserName, setSearchedUserName] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [user, setUser] = useState(
    props.searchedUser == "" ? "" : props.searchedUser
  );
  const [inputValue, setInputValue] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [list, setList] = useState([]);
  const userSearch = async () => {
    if (inputValue !== "") {
      const response = await axios
        .get(
          "http://138.68.66.115:8080/api/users/check/" +
            inputValue +
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
      console.log("asd");
    }
  };
  const userRecorder = async (e) => {
    setInputValue(e.target.value);
    setSearchedUserName(e.target.value);
    setError(false);
    if (e.target.value.length == 0) {
      setList([]);
    } else {
      const response = await axios
        .get(
          "http://138.68.66.115:8080/api/users/findSuggestions/" +
            e.target.value
        )
        .then(async (e) => {
          setList(e.data);
          console.log(e.data);
          setShowSuggestions(true);
        });
    }
  };
  const isSearchedSetter = () => {
    setIsSearched(!isSearched);
    setSearchedUserName("");
    setInputValue("");
    setShowSuggestions(false);
  };
  const toHighest = (x, y) => {
    props.toHighest(x, y);
  };
  const inputSetter = (e) => {
    setInputValue(e.target.innerText);
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
              value={inputValue}
            />

            {showSuggestions ? (
              <div className="suggestions">
                <div
                  style={{
                    borderBottom: "5px solid rgba(255, 170, 12, 0.594)",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  {list.map((e) => {
                    return (
                      <div
                        onClick={inputSetter}
                        style={{
                          borderRight: "5px  solid  rgba(255, 170, 12, 0.594)",
                          borderLeft: "5px  solid  rgba(255, 170, 12, 0.594)",
                          paddingLeft: "2%",
                          cursor: "pointer",
                        }}
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="suggestions"></div>
            )}
            <Grid item style={{ marginTop: "0vh" }}>
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

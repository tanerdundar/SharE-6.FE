import { useState } from "react";
import axios from "axios";
import { Grid, Tooltip } from "@mui/material";

function NewMeow(props) {
  const [charNumber, setCharNumber] = useState("189");
  const [content, setContent] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("asd");
  const charCounter = (e) => {
    setOwnerId(props.owner.userId);
    setCharNumber(189 - e.target.value.length);
    setContent(e.target.value);
    setInputValue(e.target.value);
    setError(true);
  };
  const createMeow = async () => {
    props.update();
    setCharNumber(189);
    const meow = { ownerId, content };
    const response = await axios
      .post("http://138.68.66.115:8080/api/meows", meow)
      .then((response) => {
        if (response.data) {
          setInputValue("");
        }
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
        setError(!error);
      });
  };

  return (
    <div className="newmeow">
      <textarea
        className="textbox"
        onChange={charCounter}
        type="text"
        placeholder="New meow here..."
        value={inputValue}
      />
      <div className="button">
        <div className="char">{charNumber}</div>
        <Grid item>
          <Tooltip title="Send" placement="bottom">
            <button className="send" onClick={createMeow}>
              Send Meow
            </button>
          </Tooltip>
        </Grid>
      </div>
      {!error ? (
        <div className="message">{errorMessage}</div>
      ) : (
        <div className="message"></div>
      )}
    </div>
  );
}

export default NewMeow;

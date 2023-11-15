import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Tooltip } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { Fragment } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NewMeow(props) {
  const [charNumber, setCharNumber] = useState("189");
  const [content, setContent] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("asd");
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = <Fragment></Fragment>;

  const charCounter = (e) => {
    setOwnerId(props.owner.userId);
    setCharNumber(189 - e.target.value.length);
    setContent(e.target.value);
    setInputValue(e.target.value);
    setError(true);
  };
  const createMeow = async () => {
    props.update();
    const meow = { ownerId, content };
    const response = await axios
      .post("http://138.68.66.115:8080/api/meows", meow)
      .then((response) => {
        if (response.data) {
          setInputValue("");
        }
        setOpen(true);
        setCharNumber(189);
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
        <CircularWithValueLabel charNumber={charNumber} />
        <Grid item>
          <Tooltip title="Send" placement="bottom">
            <button className="send" onClick={createMeow}>
              <Snackbar
                open={open}
                autoHideDuration={750}
                onClose={handleClose}
                message={"New meow sent!."}
                style={{ cursor: "auto" }}
                action={action}
              />
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
function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        border: "1px solid  black",
        borderRadius: "50%",
        margin: "1vh 0",
      }}
    >
      <CircularProgress
        style={{
          color: props.charNumber < 0 ? "red" : "rgba(255, 170, 12, 0.594)",
        }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {props.charNumber}
        </Typography>
      </Box>
    </Box>
  );
}
export function CircularWithValueLabel(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let pro = Math.floor(((189 - props.charNumber) / 189) * 100);
    setProgress(props.charNumber <= 0 ? 100 : pro);
  }, [props.charNumber]);

  return (
    <CircularProgressWithLabel charNumber={props.charNumber} value={progress} />
  );
}

export default NewMeow;

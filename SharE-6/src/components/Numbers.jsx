import { Grid, Tooltip } from "@mui/material";
import axios from "axios";

function Numbers(props) {
  var annex = props.text.toLowerCase();

  const findNeeds = async () => {
    const list = await axios.get(
      "http://138.68.66.115:8080/api/" +
        (props.text == "Meows" ? "meows" : "users") +
        "/" +
        props.owner.userId +
        "/" +
        props.user.userId +
        "/" +
        annex
    );

    props.toUp(list, props.text == "Meows" ? true : false);
  };
  return (
    <div className="number-inside">
      <Grid item>
        <Tooltip title={props.text} placement="bottom">
          <div
            className="number"
            onClick={findNeeds}
            style={{ cursor: "pointer" }}
          >
            {props.number}
          </div>
        </Tooltip>
      </Grid>
      <div className="description">{props.text}</div>
    </div>
  );
}

export default Numbers;

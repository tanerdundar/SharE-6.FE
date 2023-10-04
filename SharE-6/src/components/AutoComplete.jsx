import { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function AutoComplete() {
  const [valueState, setValueState] = useState("");
  const [suggestionState, setSuggestionState] = useState([
    "asd",
    "zxc",
    "qwe",
    "123",
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = (event) => {
    // console.log(anchorEl);
    // setAnchorEl(anchorEl ? null : event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    // <div>
    //   <input type="text" />
    //   <div className="suggestions">
    //     <ul className="suggestionList">
    //       {suggestionState.map((e) => (
    //         <li>{e}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div>
      <input onChange={handleClick}></input>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default AutoComplete;

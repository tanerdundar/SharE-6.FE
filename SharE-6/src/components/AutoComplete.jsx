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
  const deneme1 = () => {
    console.log("click");
  };
  const deneme2 = () => {
    console.log("change");
  };

  return (
    <div>
      <input type="text" onClick={deneme1} onChange={deneme2} />
    </div>
  );
}

export default AutoComplete;

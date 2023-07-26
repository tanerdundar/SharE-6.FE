import Meow from "./Meow";
import axios from "axios";

function Numbers(props) {
  var annex = props.text.toLowerCase();

  const findNeeds = async () => {
    const list = await axios.get(
      "http://localhost:8080/api/" +
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
      <div className="number" onClick={findNeeds} style={{ cursor: "pointer" }}>
        {props.number}
      </div>
      <div className="description">{props.text}</div>
    </div>
  );
}

export default Numbers;

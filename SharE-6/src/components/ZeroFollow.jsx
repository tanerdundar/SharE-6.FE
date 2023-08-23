import { useState, useEffect } from "react";
import FlowUser from "./FlowUser";
import axios from "axios";

function ZeroFollow() {
  const [list, setList] = useState("");
  const toUpper = (e) => {};

  useEffect(() => {
    axios.get("http://138.68.66.115:8080/api/users").then((response) => {
      setList(response.data);
    });
  }, []);
  return (
    <div style={{ height: "88vh" }}>
      <div
        className="card-inside"
        style={{ overflowX: "hidden", overflowY: "auto", marginTop: "1vh" }}
      >
        <div className="zero-follow-text">
          Some user you may want to follow...
        </div>
        {list !== "" &&
          list.map((e) => {
            return <FlowUser toUp={toUpper} user={e} />;
          })}
      </div>
    </div>
  );
}

export default ZeroFollow;

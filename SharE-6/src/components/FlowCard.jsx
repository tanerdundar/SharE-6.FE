import * as React from "react";
import Meow from "./Meow";
import { useState, useEffect } from "react";
import FlowUser from "./FlowUser";

export default function FlowCard(props) {
  const [list, setList] = useState(props.list);
  useEffect(() => {
    setList(props.list);
  }, [list]);
  const toUpper = (e) => {
    props.toUpest(e);
  };
  return (
    <>
      {props.kind ? (
        <div
          className="card-inside"
          style={{
            overflowX: "hidden",
            overflowY: "auto",
            marginTop: "3vh",
            maxWidth: "680px",
          }}
        >
          {list.map((e) => {
            return <Meow logged={props.user} meow={e} />;
          })}
        </div>
      ) : (
        <div
          className="card-inside"
          style={{ overflowX: "hidden", overflowY: "auto", marginTop: "3vh" }}
        >
          {list.map((e) => {
            return <FlowUser toUp={toUpper} user={e} />;
          })}
        </div>
      )}
    </>
  );
}

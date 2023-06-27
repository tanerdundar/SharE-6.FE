import { useState } from "react";

function FollowButton(props) {
  let suffix = "";

  if (props.isFollow) {
    console.log("asd");
    suffix = "ing";
  }

  return (
    <div className="follow">
      <button className="follow-button">Follow{suffix}</button>
    </div>
  );
}

export default FollowButton;

import { useState } from "react";
import FollowButton from "./FollowButton";
import MiniProfile from "./MiniProfile";
import Numbers from "./Numbers";

function FoundUser(props) {
  const setter = () => {
    props.func(false);
  };
  return (
    <div className="search">
      <div className="exit">
        <div className="x" onClick={setter}>
          X
        </div>
      </div>
      <div className="foundUser">
        <MiniProfile user={props.user} />
      </div>

      <div className="foundUser-inner">
        <Numbers number={"5"} text={"Meows"} />
        <Numbers number={"5"} text={"Followings"} />
        <Numbers number={"5"} text={"Followers"} />
      </div>
      {props.owner.userId == props.user.userId ? (
        <></>
      ) : (
        <FollowButton isFollow={props.isFollow} />
      )}
    </div>
  );
}

export default FoundUser;

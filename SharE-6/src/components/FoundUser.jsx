import { useState } from "react";
import FollowButton from "./FollowButton";
import MiniProfile from "./MiniProfile";
import Numbers from "./Numbers";
import axios from "axios";

function FoundUser(props) {
  const [followingId, setFollowingId] = useState(props.user.userId);
  const [follow, setFollow] = useState(props.isFollow ? true : false);
  const followSetter = async () => {
    const request = {
      followerId: props.owner.userId,
      followingId: props.user.userId,
    };

    const response = await axios
      .post("http://localhost:8080/api/follows/" + props.owner.userId, request)
      .then(() => {});

    setFollow(!follow);
  };

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
        <div className="follow">
          <button className="follow-button" onClick={followSetter}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      )}
    </div>
  );
}

export default FoundUser;

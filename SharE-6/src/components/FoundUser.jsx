import { Fragment, useState } from "react";
import FollowButton from "./FollowButton";
import MiniProfile from "./MiniProfile";
import Numbers from "./Numbers";
import axios from "axios";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function FoundUser(props) {
  console.log(props.user);
  const [followingId, setFollowingId] = useState(props.user.userId);
  const [follow, setFollow] = useState(props.isFollow ? true : false);
  const [meowNumber, setMeowNumber] = useState(props.user.numberOfMeows);
  const [followerNumber, setFollowerNumber] = useState(
    props.user.numberOfFollowers
  );
  const [followingNumber, setFollowingNumber] = useState(
    props.user.numberOfFollowings
  );
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = <Fragment></Fragment>;
  const followSetter = async () => {
    const request = {
      followerId: props.owner.userId,
      followingId: props.user.userId,
    };
    console.log(props.user);
    const response = await axios
      .post(
        "http://138.68.66.115:8080/api/follows/" + props.owner.userId,
        request
      )
      .then((data) => {
        if (
          follow
            ? props.asdd((prev) => prev - 1)
            : props.asdd((prev) => prev + 1)
        );
        setOpen(true);
      });

    setFollow(!follow);
  };

  const setter = () => {
    props.func(false);
  };
  const toUpper = (x, y) => {
    props.toUpest(x, y);
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
        <Numbers
          toUp={toUpper}
          user={props.user}
          number={meowNumber}
          text={"Meows"}
          owner={props.owner}
        />
        <Numbers
          toUp={toUpper}
          user={props.user}
          number={followingNumber}
          text={"Followings"}
          owner={props.owner}
        />
        <Numbers
          toUp={toUpper}
          user={props.user}
          number={followerNumber}
          text={"Followers"}
          owner={props.owner}
        />
      </div>
      {props.owner.userId == props.user.userId ? (
        <></>
      ) : (
        <div className="follow">
          <button className="follow-button" onClick={followSetter}>
            <Snackbar
              open={open}
              autoHideDuration={750}
              onClose={handleClose}
              message={follow ? "Followed" : "Unfollowed"}
              style={{ cursor: "auto" }}
              action={action}
            />
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      )}
    </div>
  );
}

export default FoundUser;

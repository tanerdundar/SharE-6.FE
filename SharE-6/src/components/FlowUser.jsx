import { Card } from "@mui/material";

function FlowUser(props) {
  const toFlowCard = () => {
    props.toUp(props.user);
  };
  return (
    <Card
      style={{
        borderRadius: "0",
        minHeight: "14vh",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        backgroundColor: "whitesmoke",
        marginTop: "1vh",
        borderRadius: "20px",
        maxWidth: "99%",
      }}
    >
      <div className="user-detail-left">
        <div
          className="meow-user-photo"
          style={{
            width: "60%",
            marginLeft: "20%",
            backgroundColor: props.user.backgroundColor,
          }}
        >
          {props.user.username[0].toUpperCase()}
        </div>
      </div>
      <div className="user-detail-right">
        <div className="usrname">
          <div className="username">
            {props.user.name == null ? props.user.username : props.user.name}
          </div>
          <div
            className="username toleft"
            onClick={toFlowCard}
            //style={{ cursor: "pointer" }}
          >
            {"@" + props.user.username}
          </div>
        </div>
        <div className="top">
          <div className="aaa t">{props.user.numberOfMeows}</div>
          <div className="aaa t">{props.user.numberOfFollowings}</div>
          <div className="aaa t">{props.user.numberOfFollowers}</div>
        </div>
        <div className="bot">
          <div className="aaa">Meows</div>
          <div className="aaa">Followings</div>
          <div className="aaa">Followers</div>
        </div>
      </div>
    </Card>
  );
}

export default FlowUser;

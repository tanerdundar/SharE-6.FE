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
    </div>
  );
}

export default FoundUser;

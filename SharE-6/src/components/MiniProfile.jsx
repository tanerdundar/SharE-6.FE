function MiniProfile(props) {
  return (
    <div className="mini-profile">
      <div className="mini-profile-inside">
        <div className="mp-photo" style={{ backgroundColor: props.bg }}>
          {props.user.username[0].toUpperCase()}
        </div>
        <div className="mp-name">
          <div className="real-name">
            {props.user.name == null ? props.user.username : props.user.name}
          </div>
          <div className="nickname"> {"@" + `${props.user.username}`}</div>
        </div>
      </div>
    </div>
  );
}

export default MiniProfile;

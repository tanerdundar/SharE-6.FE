import MiniProfile from "./MiniProfile";

function UserList(props) {
  const colorPicker = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let p = Math.floor(Math.random() * 16);
      if (p < 10) {
        color += p;
      } else {
        switch (p) {
          case 10:
            color += "a";
            break;
          case 11:
            color += "b";
            break;
          case 12:
            color += "c";
            break;
          case 13:
            color += "d";
            break;
          case 14:
            color += "e";
            break;
          case 15:
            color += "f";
            break;
        }
      }
    }
    return color;
  };
  return (
    <>
      <MiniProfile user={props.user} bg={colorPicker()} />
      <MiniProfile user={props.user} bg={colorPicker()} />
      <MiniProfile user={props.user} bg={colorPicker()} />
      <MiniProfile user={props.user} bg={colorPicker()} />
      <MiniProfile user={props.user} bg={colorPicker()} />
      <MiniProfile user={props.user} bg={colorPicker()} />
    </>
  );
}

export default UserList;

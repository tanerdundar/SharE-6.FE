import { useNavigate } from "react-router-dom";
import FlowCard from "./FlowCard";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";

function Home(props) {
  useNavigate("home");

  // const linkChanger = () => {};
  // linkChanger();

  return (
    <div className="home">
      <div className="space"></div>
      <div className="cards">
        <div className="card">
          <ProfileCard user={props.user} />
        </div>
        <div className="card others">
          <div className="left">
            <NavBar
              user={props.user}
              changer={props.changer}
              isLogged={props.isLogged}
            />
            <FlowCard user={props.user} />
          </div>
          <div className="right">
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

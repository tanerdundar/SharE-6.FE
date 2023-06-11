import FlowCard from "./FlowCard";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";

function Home(props) {
  return (
    <div className="home">
      <div className="space"></div>
      <div className="cards">
        <div className="card">
          <ProfileCard user={props.user} />
        </div>
        <div className="card">
          <NavBar
            user={props.user}
            changer={props.changer}
            isLogged={props.isLogged}
          />
          <FlowCard user={props.user} />
        </div>
        <div className="card">
          <SearchCard />
        </div>
      </div>
    </div>
  );
}

export default Home;

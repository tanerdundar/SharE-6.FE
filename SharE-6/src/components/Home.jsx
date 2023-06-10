import FlowCard from "./FlowCard";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";

function Home() {
  return (
    <div className="home">
      <div className="card">
        <ProfileCard />
      </div>
      <div className="card">
        <FlowCard />
      </div>
      <div className="card">
        <SearchCard />
      </div>
    </div>
  );
}

export default Home;

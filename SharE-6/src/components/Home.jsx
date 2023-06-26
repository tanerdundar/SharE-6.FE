import { useNavigate } from "react-router-dom";
import FlowCard from "./FlowCard";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";
import NewMeow from "./NewMeow";
import axios from "axios";
import { useState, useEffect } from "react";

function Home(props) {
  const [isMeows, setIsMeows] = useState(true);
  const [sth, setSth] = useState(true);
  useNavigate("home");
  const [list, setList] = useState("");

  if (sth) {
    setSth(!sth);
    const response = axios
      .get("http://localhost:8080/api/meows/home/" + props.user.userId)
      .then((e) => {
        setList(e.data);
      });
  }

  const exiter = () => {
    props.func(false);
  };
  useEffect(() => {
    if (list !== "") {
      return <FlowCard list={list} kind={isMeows} user={props.user} />;
    }
  }, [list]);
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
              func={exiter}
              user={props.user}
              changer={props.changer}
              isLogged={props.isLogged}
            />
            {/* <FlowCard list={list} kind={isMeows} user={props.user} /> */}
            {list !== "" && (
              <FlowCard list={list} kind={isMeows} user={props.user} />
            )}
          </div>
          <div className="right">
            <NewMeow owner={props.user} />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

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
  const [flowCardKey, setFlowCardKey] = useState(0);
  const [cUser, setCUser] = useState("");
  const [listBackUp, setListBackUp] = useState("");
  const [myMeows, setMyMeows] = useState("");

  if (sth) {
    setSth(!sth);
    const response = axios
      .get("http://localhost:8080/api/meows/home/" + props.user.userId)
      .then((e) => {
        setList(e.data);
        setListBackUp(e.data);
      });
  }
  console.log(props.user);
  const exiter = () => {
    props.func(false);
  };

  // useEffect(() => {
  //   if (list !== "") {
  //     setList(list);
  //   }
  // }, [list]);
  const setHomeList = (x, y) => {
    setList(x.data);
    setIsMeows(y);
    setFlowCardKey(flowCardKey + 1);
  };
  const setClickedUser = (e) => {
    setCUser(e);
  };
  const listSetter = (e) => {
    setList(e);
    setFlowCardKey(flowCardKey + 1);
    setIsMeows(true);
  };
  const profileMeows = (e) => {
    setList(e);
    setFlowCardKey(flowCardKey + 1);
    setIsMeows(true);
  };
  return (
    <div className="home">
      <div className="space"></div>
      <div className="cards">
        <div className="card" style={{ marginTop: "5vh" }}>
          <ProfileCard toUpest={setHomeList} user={props.user} />
        </div>
        <div className="card others">
          <div className="left">
            <NavBar
              goHome={listSetter}
              goProfile={profileMeows}
              func={exiter}
              user={props.user}
              changer={props.changer}
              isLogged={props.isLogged}
            />
            {list !== "" && (
              <FlowCard
                toUpest={setClickedUser}
                key={flowCardKey}
                list={list}
                kind={isMeows}
                user={props.user}
              />
            )}
          </div>
          <div className="right">
            <NewMeow owner={props.user} />
            <SearchCard
              toHighest={setHomeList}
              owner={props.user}
              searchdUser={cUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

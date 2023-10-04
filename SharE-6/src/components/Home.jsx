import { useNavigate } from "react-router-dom";
import FlowCard from "./FlowCard";
import NavBar from "./NavBar";
import ProfileCard from "./ProfileCard";
import SearchCard from "./SearchCard";
import NewMeow from "./NewMeow";
import axios from "axios";
import { useState, useEffect } from "react";
import Zero from "./Zero";
import AdminPanel from "./AdminPanel";
import Logo from "./Logo";

function Home(props) {
  const [isMeows, setIsMeows] = useState(true);
  const [sth, setSth] = useState(true);
  // useNavigate("home");

  const [list, setList] = useState("");
  const [flowCardKey, setFlowCardKey] = useState(0);
  const [cUser, setCUser] = useState("");
  const [listBackUp, setListBackUp] = useState("");
  const [meowNumber, setMeowNumber] = useState(0);
  const [adminPanelOn, setAdminPanelOn] = useState(false);

  if (sth) {
    setSth(!sth);
    const response = axios
      .get("http://138.68.66.115:8080/api/meows/home/" + props.user.userId)
      .then((e) => {
        setList(e.data);
        setListBackUp(e.data);
      });
  }
  const exiter = () => {
    props.func(false);
  };

  const setHomeList = (x, y) => {
    setList(x.data);
    setIsMeows(y);
    setFlowCardKey(flowCardKey + 1);
    setAdminPanelOn(false);
  };
  const setClickedUser = (e) => {
    setCUser(e);
  };
  const listSetter = (e) => {
    setList(e);
    setFlowCardKey(flowCardKey + 1);
    setIsMeows(true);
    setAdminPanelOn(false);
  };
  const profileMeows = (e) => {
    setList(e);
    setFlowCardKey(flowCardKey + 1);
    setIsMeows(true);
    setAdminPanelOn(false);
  };
  const adminPanel = () => {
    setAdminPanelOn(!adminPanelOn);
  };
  const addMeow = () => {
    setMeowNumber(meowNumber + 1);
  };

  return (
    <div className="home">
      <div className="space"></div>
      <div className="cards">
        <div className="card" style={{ marginTop: "5vh" }}>
          <Logo />
          <ProfileCard
            meows={meowNumber}
            toUpest={setHomeList}
            user={props.user}
            fCount={props.fCount}
          />
        </div>
        <div className="card others">
          <div className="left">
            <NavBar
              goHome={listSetter}
              goProfile={profileMeows}
              goAdminPanel={adminPanel}
              func={exiter}
              user={props.user}
              changer={props.changer}
              isLogged={props.isLogged}
            />

            {adminPanelOn ? (
              <AdminPanel user={props.user} />
            ) : list.length > 0 ? (
              <FlowCard
                toUpest={setClickedUser}
                key={flowCardKey}
                list={list}
                kind={isMeows}
                user={props.user}
              />
            ) : (
              <Zero />
            )}
          </div>
          <div className="right">
            <NewMeow owner={props.user} update={addMeow} />
            <SearchCard
              asd={props.asd}
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

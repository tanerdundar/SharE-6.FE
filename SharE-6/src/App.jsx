import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  const temporaryUser = {
    username: "squirtle",
    firstName: "Taner",
    email: "asd@kmail.com",
    password: "123456",
    meows: "12",
    followings: "273",
    followers: "2345",
  };
  const [count, setCount] = useState(0);
  const [isSigned, setIsSigned] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const signChanger = () => {
    setIsSigned(!isSigned);
  };
  const logChanger = () => {
    setIsLogged(!isLogged);
  };

  return (
    <Router>
      {isLogged ? (
        <Home user={temporaryUser} changer={logChanger} isLogged={isLogged} />
      ) : isSigned ? (
        <SignIn changer={signChanger} isSigned={isSigned} logged={logChanger} />
      ) : (
        <SignUp changer={signChanger} isSigned={isSigned} />
      )}
    </Router>
  );
}

export default App;

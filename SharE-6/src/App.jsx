import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const [isSigned, setIsSigned] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [realUser, setRealUser] = useState("deneme");
  let userId = 0;

  const signChanger = () => {
    setIsSigned(!isSigned);
  };

  // useEffect(() => {
  //   if (isLogged && userId !== 0) {
  //     axios
  //       .get("http://localhost:8080/api/users/" + userId)
  //       .then((response) => {
  //         const fetchedUser = response.data;
  //         setRealUser(fetchedUser);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [isLogged, userId]);

  return (
    <Router>
      {isSigned ? (
        <SignIn changer={signChanger} isSigned={isSigned} />
      ) : (
        <SignUp changer={signChanger} isSigned={isSigned} />
      )}
    </Router>
  );
}

export default App;

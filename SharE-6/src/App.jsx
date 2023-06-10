import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  const [situation, setSituation] = useState(true);
  const situChanger = () => {
    setSituation(!situation);
  };

  return (
    <Router>
      <Home />
      {situation ? (
        <SignIn changer={situChanger} situ={situation} />
      ) : (
        <SignUp changer={situChanger} situ={situation} />
      )}
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const [isSigned, setIsSigned] = useState(true);

  const signChanger = () => {
    setIsSigned(!isSigned);
  };

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

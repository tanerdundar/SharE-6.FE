import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignInSide from "./components/SignInSide";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const [situation, setSituation] = useState(true);
  const situChanger = () => {
    situation ? setSituation(false) : setSituation(true);
  };

  return (
    <Router>
      {situation ? (
        <SignIn changer={situChanger} situ={situation} />
      ) : (
        <SignUp changer={situChanger} situ={situation} />
      )}

      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

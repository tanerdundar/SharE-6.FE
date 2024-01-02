import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const [isSigned, setIsSigned] = useState(true);
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const signChanger = () => {
    setIsSigned(!isSigned);
  };
  // if (localStorage.getItem("username") !== null) {
  //   console.log(localStorage.username);
  //   const response = axios
  //     .get("http://138.68.66.115:8080/api/users/findToUpdate/t")
  //     .then((e) => {
  //       console.log(e.data);

  //       setUser(e.data);
  //     });
  // }

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("username") !== null) {
        try {
          const response = await axios.get(
            "http://138.68.66.115:8080/api/users/findToUpdate/" +
              localStorage.username
          );
          console.log(response.data);
          setUser(response.data);
        } catch (error) {
          console.error("Kullanıcı verisi getirilirken hata oluştu:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {localStorage.getItem("username") !== null ? (
        <Home user={user} />
      ) : isSigned ? (
        <SignIn changer={signChanger} isSigned={isSigned} />
      ) : (
        <SignUp changer={signChanger} isSigned={isSigned} />
      )}
      {/* {localStorage.username > 0 ? (
       
      ) : isSigned ? (
        <SignIn changer={signChanger} isSigned={isSigned} />
      ) : (
        <SignUp changer={signChanger} isSigned={isSigned} />
      )} */}

      {/* {isSigned ? (
        <SignIn changer={signChanger} isSigned={isSigned} />
      ) : (
        <SignUp changer={signChanger} isSigned={isSigned} />
      )} */}
    </Router>
  );
}

export default App;

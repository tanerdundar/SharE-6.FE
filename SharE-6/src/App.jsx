import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import axios from "axios";

function App() {
  // const temporaryUser = {
  //   username: "squirtle",
  //   firstName: "Taner",
  //   email: "asd@kmail.com",
  //   password: "123456",
  //   meows: "12",
  //   followings: "273",
  //   followers: "2345",
  // };
  const [isSigned, setIsSigned] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [realUser, setRealUser] = useState("deneme");
  // const [temporaryUser, setTemporaryUser] = useState("");
  // const [userId, setUserId] = useState("");
  let temporaryUser;
  let userId = 0;

  const signChanger = () => {
    setIsSigned(!isSigned);
  };

  // const logChanger = async (id) => {
  //   userId = id;
  //   temporaryUser = await axios.get(
  //     "http://localhost:8080/api/users/" + userId
  //   );
  //   realUser = temporaryUser.data;
  //   console.log(realUser);
  //   setIsLogged(!isLogged);
  // };
  const logChanger = async (id) => {
    userId = id;
    const temporaryUser = await axios.get(
      "http://localhost:8080/api/users/" + userId
    );
    const fetchedUser = temporaryUser.data;
    setRealUser(fetchedUser); // realUser'ı güncelle
    setIsLogged(!isLogged);
  };
  useEffect(() => {
    // isLogged veya userId değiştiğinde gerçekleşecek işlemler
    if (isLogged && userId !== 0) {
      axios
        .get("http://localhost:8080/api/users/" + userId)
        .then((response) => {
          const fetchedUser = response.data;
          setRealUser(fetchedUser); // realUser'ı güncelle
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLogged, userId]);

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

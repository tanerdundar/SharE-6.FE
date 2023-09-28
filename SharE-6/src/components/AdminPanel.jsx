import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";
import axios from "axios";

function AdminPanel(props) {
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [usernameContent, setUsernameContent] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [passwordContent, setPasswordContent] = useState("");
  const [rePasswordContent, setRepasswordContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const userEditor = () => {
    setEditUser(true);
  };
  const userAdder = () => {
    setAddUser(true);
  };
  const exiter = () => {
    setAddUser(false);
  };
  const usernameSetter = (e) => {
    setUsernameContent(e.target.value);
    setVisible(false);
  };
  const emailSetter = (e) => {
    setEmailContent(e.target.value);
    setVisible(false);
  };
  const passwordSetter = (e) => {
    setPasswordContent(e.target.value);
    setVisible(false);
  };
  const rePasswordSetter = (e) => {
    setRepasswordContent(e.target.value);
    setVisible(false);
  };
  const addNewAdmin = async () => {
    if (passwordContent == rePasswordContent) {
      const pUser = {
        username: usernameContent,
        email: emailContent,
        password: passwordContent,
      };

      const response = await axios
        .post("http://138.68.66.115:8080/api/users/" + props.user.userId, pUser)
        .then((e) => {
          console.log(pUser);
        })
        .catch((e) => {
          setErrorMessage(e.response.data);
          setVisible(true);
        });
    } else {
      setErrorMessage("Passwords do not match!");
      setVisible(true);
    }
  };
  return (
    <div className="admin-panel">
      {addUser ? (
        <div className="user-add-panel">
          <div
            style={{
              height: "10vh",
              width: "7%",
              marginLeft: "87%",
            }}
          >
            <div
              className="exit-button"
              style={{
                fontSize: "5vh",
                cursor: "pointer",
              }}
              onClick={exiter}
            >
              X
            </div>
          </div>
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item xs={10}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Username"
                onChange={usernameSetter}
              />
            </Grid>

            <Grid item xs={10}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={emailSetter}
              />
            </Grid>

            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={passwordSetter}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                name="password"
                label="Re-enter password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={rePasswordSetter}
              />
            </Grid>
            {/* <div
              style={{ paddingLeft: "20px", fontSize: "2vh" }}
              className="message"
            ></div> */}
            <div style={{ height: "2vh", color: "red" }}>
              {visible ? errorMessage : ""}
            </div>
          </Grid>

          <button
            style={{
              margin: "2vh 0 0 25%",
              height: "8vh",
              width: "50%",
              fontSize: "4vh",
              backgroundColor: "rgba(35, 35, 167, 0.484)",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={addNewAdmin}
          >
            Add New Admin
          </button>
        </div>
      ) : editUser ? (
        <>edit</>
      ) : (
        <div className="admin-panel-inside">
          <div className="admin-panel-icon add">
            <span class="tooltip-trigger">
              <FaUserEdit className="admin-panel-icons" onClick={userEditor} />
            </span>
            <span class="tooltip-text">Edit a standard user.</span>
          </div>
          <div className="admin-panel-icon editter">
            <FaUserPlus className="admin-panel-icons" onClick={userAdder} />
            <span class="tooltip-text">Add a new admin.</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminPanel;

import { Grid, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";

function AdminPanel(props) {
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [usernameContent, setUsernameContent] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [passwordContent, setPasswordContent] = useState("");
  const [rePasswordContent, setRepasswordContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [userFind,setUserFind] = useState(false)
  const [open, setOpen] = useState(false);
  const [editableUser,setEditableUser]=useState("")
  const [updateUserName,setUpdateUserName]=useState("")
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = <Fragment></Fragment>;

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
          setOpen(true);
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
  const findUser= async()=>{
    const response = await axios
    .get(
      "http://138.68.66.115:8080/api/users/findToUpdate/" +editableUser
      
    )
    .then(async (e) => {
      if(e.data.userRank=="STANDARD")
      setUpdateUserName(e.data.username)
      setUserFind(true)
    })
  }
  const userNameSet=(e)=>{
    setEditableUser(e.target.value)
  }
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
            <Snackbar
              style={{ cursor: "auto" }}
              open={open}
              autoHideDuration={750}
              onClose={handleClose}
              message="New admin added."
              action={action}
            />
            Add New Admin
          </button>
        </div>
      ) : editUser ? (
        <div className="edit-user-panel">
          <input className="inputer" type="text" placeholder="find user to edit" onChange={userNameSet} />
          {userFind?<div className="user-to-edit">
            <div className="update-name">{updateUserName}</div>
          </div>:<div className="user-to-edit"></div>}
          <button className="get-button" onClick={findUser} style={{width:"40%", cursor:"pointer"}}>Find</button>
        </div>
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

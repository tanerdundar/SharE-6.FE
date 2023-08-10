import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { FaUserEdit, FaUserPlus } from "react-icons/fa";

function AdminPanel() {
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const userEditor = () => {
    setEditUser(true);
  };
  const userAdder = () => {
    setAddUser(true);
  };
  const exiter = () => {
    setAddUser(false);
  };
  return (
    <div className="admin-panel">
      {addUser ? (
        <div className="user-add-panel">
          <div
            style={{
              height: "20vh",
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
              />
            </Grid>
            {/* <div
              style={{ paddingLeft: "20px", fontSize: "2vh" }}
              className="message"
            ></div> */}
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
            }}
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

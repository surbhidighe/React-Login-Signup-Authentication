import React from "react";
import basestyle from "../Base.module.css";
const Profile = ({ setUserState, username }) => {
  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {username} !!</h1>
      <button
        className={basestyle.button_common}
        onClick={() => setUserState({})}
      >
        Logout
      </button>
    </div>
  );
};
export default Profile;

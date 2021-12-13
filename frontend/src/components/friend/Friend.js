import React from "react";
import "./Friend.css";
const Friend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={`/assets/${user.profilePicture}`}
        alt=""
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default Friend;

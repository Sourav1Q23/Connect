import React, { useContext } from "react";
import { Person, Chat, Notifications, Search } from "@material-ui/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/">
          <span className="logo">Connect</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <div className="navbarLink">Homepage</div>
          <div className="navbarLink">Timeline</div>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <Person />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIconItem">
            <Chat />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <Notifications />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="navbarImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import "./Profile.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/side/Sidebar";
import Feed from "../../components/feed/Feed";
import Right from "../../components/right/Right";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { username } = useParams();
  console.log(username);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      console.log(res.data, res.data.desc);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Right user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

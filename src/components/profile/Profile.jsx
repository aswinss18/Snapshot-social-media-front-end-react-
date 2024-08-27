import React from "react";
import "./profile.css";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import Feed from "../feed/Feed";
import Rightbar from "../rightbar/Rightbar";
import "../../pages/home/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const baseurl = import.meta.env.VITE_APP_BASE_URL;
export default function Profile() {
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER || "";
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${baseurl}/users?username=${username}`);

      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.jpeg"
                }
                alt=""
                className="profileCoverImg"
              />

              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.jpeg"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

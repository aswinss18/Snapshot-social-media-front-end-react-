import "./online.css";
import React from "react";

export default function Online({ user }) {
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER || "";
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />

        <span className="rightbarOnline"></span>
      </div>

      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

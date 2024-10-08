import React from "react";
import "./closefriend.css";
export default function CloseFriend({ user }) {
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER || "";
  return (
    <li className="sidebarFriend">
      <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Rightbar({ user }) {
  const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER || "";
  const baseurl = import.meta.env.VITE_APP_BASE_URL;
  const [friends, setFriends] = useState([]);
  const HomeRightbar = () => {
    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(
            `${baseurl}/users/friends/${user._id}`
          );
          setFriends(friendList.data);
        } catch (err) {
          console.error(err);
        }
      };
      getFriends();
    }, [user._id]);

    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}gift.png`} className="birthdayImg" />
          <span className="birthdayText">
            <b>Rahul</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>

        <img src={`${PF}ad.png`} className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    const PF = import.meta.env.VITE_APP_PUBLIC_FOLDER || "";
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city || "nil"}</span>
          </div>{" "}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from || "nil"}</span>
          </div>{" "}
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:nil</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.jpeg"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

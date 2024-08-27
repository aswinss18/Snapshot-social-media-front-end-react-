import Post from "../post/Post";
import Share from "../Share/Share";
import "./feed.css";
// import { Posts } from "../../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const baseurl = import.meta.env.VITE_APP_BASE_URL;

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${baseurl}/posts/profile/${username}`)
        : await axios.get(`${baseurl}/posts/timeline/${user._id}`);

      setPosts(
        res?.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts?.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

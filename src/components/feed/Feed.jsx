import Post from "../post/Post";
import Share from "../Share/Share";
import "./feed.css";
// import { Posts } from "../../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

const baseurl = import.meta.env.VITE_APP_BASE_URL;

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`${baseurl}/posts/profile/${username}`)
        : await axios.get(`${baseurl}/posts/timeline/66c04db3e8de8c5538033115`);

      setPosts(res?.data);
    };
    fetchPosts();
  }, [username]);
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

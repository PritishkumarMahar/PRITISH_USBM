import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch posts");
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <h1>Blog Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

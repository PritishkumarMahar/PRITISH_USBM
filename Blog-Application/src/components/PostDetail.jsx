import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch post");
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className="back-btn">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostDetail;

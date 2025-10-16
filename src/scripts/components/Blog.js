import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { margin } from "../utils/constants";

const Blog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Define your fallback ID (default post)
  const defaultId = "18";

  useEffect(() => {
    if (!id) {
      navigate(`/blog/${defaultId}`, { replace: true });
    }
  }, [id, navigate]);

  return (
    <div className={`flex flex-col ${margin}`}>
      <span>Current blog ID: {id || defaultId}</span>
    </div>
  );
};

export default Blog;

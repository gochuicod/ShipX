import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { margin } from "../utils/constants";
import SEO from "./ui/SEO";
import MultiStepLoader from "./ui/MultiStepLoader";
import NotFound from "./ui/NotFound";

const Blog = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // optional smooth scroll
  }, [pathname]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://shipx.asia/wp-json/wp/v2/posts/${id}?_embed`,
        );
        if (!res.ok) throw new Error("Post not found");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <MultiStepLoader />;
  if (!post) return <NotFound />;

  return (
    <>
      <SEO
        title={`ShipX - ${post.title.rendered}`}
        description={`${post.title.rendered}`}
        canonical={`https://shipx.asia/blog/:${id}`}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
      />

      <div
        className={`flex flex-col justify-center items-center ${margin} pt-[5vw]`}
      >
        <article className="flex flex-col gap-y-[3vw] md:text-[0.8vw] text-[2.2vw]">
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      </div>
    </>
  );
};

export default Blog;

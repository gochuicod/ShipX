// src/scripts/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import SmartNavLink from "./ui/SmartNavLink";
import SEO from "./ui/SEO";
import i18n from "i18next";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const baseUrl = "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/locales";
      const lang = i18n.language || "en"; // current app language

      try {
        // Try current language first
        let url = `${baseUrl}/${lang}.json?v=${Date.now()}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${lang}.json`);
        let data = await res.json();
        let blogsObj = data?.service_headline_section?.blogs;

        // Fallback to Vietnamese if no blogs found
        if (!blogsObj && lang !== "vn") {
          console.warn(`No blogs found for ${lang}, loading Vietnamese fallback`);
          url = `${baseUrl}/vn.json?v=${Date.now()}`;
          res = await fetch(url);
          data = await res.json();
          blogsObj = data?.service_headline_section?.blogs;
        }

        setBlogs(Object.values(blogsObj || {}));
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [i18n.language]); // refetch whenever language changes

  return (
    <>
      <SEO
        title="ShipX - Blogs"
        description="Welcome to ShipX's Blog Posts Page!"
        canonical="https://shipx.asia/blog"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/logo-shipx.webp"
      />

      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        {loading ? (
          <p>Loading blogs...</p>
        ) : blogs.length > 0 ? (
          <div className="grid gap-10">
            {blogs.map((post) => (
              <SmartNavLink
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="block rounded-xl overflow-hidden shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] hover:shadow-[0_0vw_1vw_rgba(79,55,138,0.3)] transition"
              >
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  {post.content_preview && (
                    <p className="text-gray-600">{post.content_preview}...</p>
                  )}
                  <p className="text-sm text-gray-400 mt-2">{post.date}</p>
                </div>
              </SmartNavLink>
            ))}
          </div>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </>
  );
};

export default BlogList;
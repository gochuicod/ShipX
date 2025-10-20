// src/scripts/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import SmartNavLink from "./ui/SmartNavLink";
import SEO from "./ui/SEO";
import i18n from "i18next";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const url =
        "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/locales/vn.json";
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to load blogs");
        const data = await res.json();
        console.log(data);
        console.log(data.service_headline_section.blogs);
        console.log(Object.keys(data.service_headline_section));
        const blogsObj = data?.service_headline_section?.blogs || {};
        setBlogs(Object.values(blogsObj));
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

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
    </>
  );
};

export default BlogList;

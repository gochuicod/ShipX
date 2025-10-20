import React from "react";
import SmartNavLink from "./ui/SmartNavLink";
import SEO from "./ui/SEO";
import { useTranslation } from "react-i18next";

const BlogList = () => {
  const { t } = useTranslation();

  // Use returnObjects: true to get the blogs array
  const blogs =
    t("service_headline_section.blogs", { returnObjects: true }) || [];

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

        {blogs.length > 0 ? (
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

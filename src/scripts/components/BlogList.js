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

      <div className="flex flex-col gap-y-[1vw] md:px-[8vw] px-[10vw] md:py-[5vw] py-[10vw]">
        <h1 className="text-4xl font-bold mb-8">
          {t("service_headline_section.blog_page_heading")}
        </h1>

        {blogs.length > 0 ? (
          <div className="flex flex-wrap gap-x-[3vw]">
            {blogs.map((post) => (
              <SmartNavLink
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="flex flex-col md:rounded-[2vw] rounded-[3vw] overflow-hidden shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] hover:shadow-[0_0vw_1vw_rgba(79,55,138,0.3)] transition md:w-[35vw] w-full"
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

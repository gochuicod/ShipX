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
        title="ShipX - Blog"
        description="Welcome to ShipX's Blog Posts Page!"
        canonical="https://shipx.asia/blog"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div
        className="flex flex-col md:gap-y-[2vw] gap-y-[4vw] md:px-[8vw] px-[10vw] md:py-[5vw] py-[10vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <h1 className="md:text-[2vw] text-[6vw] font-bold">
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
                  className="w-full md:h-[20vw] h-full object-cover"
                  loading="lazy"
                />
                <div className="md:p-[2vw] p-[4vw]">
                  <h2 className="md:text-[1.5vw] text-[5vw] md:leading-[2vw] leading-[5.5vw] font-bold md:pb-[0.5vw] pb-[1.5vw]">
                    {post.title}
                  </h2>
                  {post.content && (
                    <p className="text-[#1A1A1A]/80 md:text-[1vw] text-[3vw] truncate">
                      {post.content.slice(3)}...
                    </p>
                  )}
                  <p className="text-[#1A1A1A]/50 md:text-[0.8vw] text-[2.5vw] mt-2">
                    {post.date}
                  </p>
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

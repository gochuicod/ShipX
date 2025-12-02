import React from "react";
import SmartNavLink from "../ui/SmartNavLink";
import ParallaxSection from "../ui/ParallaxSection";

const BlogsGrid = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  // Helper to check if blog is recently published
  const isRecent = (dateString) => {
    try {
      const postDate = new Date(dateString);
      const diffTime = Math.abs(new Date() - postDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    } catch (e) {
      return false;
    }
  };

  // Helper to strip HTML and limit characters
  const getTruncatedContent = (content, limit = 100) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>?/gm, "");
    const plainText = content.replace(/<[^>]*>?/gm, "");
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  // Helper for category pills
  const CategoryPills = ({ tags, className = "" }) => (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-[#F8E3F5] text-[#99008A] px-2 py-1 md:px-[0.8vw] md:py-[0.3vw] md:rounded-[0.42vw] rounded-md text-[10px] md:text-[0.7vw] font-semibold"
          className="inline-block bg-[#F8E3F5] text-[#99008A] px-2 py-1 md:px-[0.8vw] md:py-[0.3vw] md:rounded-[0.42vw] rounded-md text-[10px] md:text-[0.7vw] font-semibold"
        >
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      {posts.map((post) => {
        const isNew = isRecent(post.date);
        const tags = post.tags || ["E-commerce", "Logistics"];

        return (
          <SmartNavLink
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-row md:flex-col bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-[0px_4px_25px_0px_#FF00E54D] transition-shadow duration-300 p-2.5 md:p-0 gap-3 md:gap-0 items-stretch hover:cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-[35%] md:w-full md:h-[13vw] shrink-0 block">
              <img
                src={post.cover}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg md:rounded-none transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badge: Visible on Desktop Only */}
              {isNew && (
                <span className="hidden md:block absolute top-4 right-4 bg-[#FF00E5] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  NEW
                </span>
              )}
            </div>

            {/* Content Body */}
            <div className="flex flex-col grow w-[65%] md:w-full md:p-6 bg-white md:bg-[#F9FAFB] justify-between md:justify-start">
              <div>
                {/* Title */}
                <h3 className="text-sm md:text-[1.1vw] font-bold text-[#121212] leading-tight md:leading-normal line-clamp-3 md:line-clamp-2 group-hover:text-[#CC00B7] transition-colors">
                  {/* MOBILE: Truncated Title (Limit 50 chars) */}
                  <span className="md:hidden">
                    {getTruncatedContent(post.title, 50)}
                  </span>

                  {/* DESKTOP: Full Title */}
                  <span className="hidden md:block">{post.title}</span>
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
                  {tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#F8E3F5] text-[#CC00B7] text-[10px] md:text-[0.6vw] font-medium px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-400 text-[10px] md:text-xs font-medium md:mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </div>
              </div>

              {/* Description - DESKTOP ONLY */}
              {post.content && (
                <p className="hidden md:block text-gray-600 md:text-[0.8vw] md:leading-[1vw] line-clamp-3 mb-6 grow">
                  {getTruncatedContent(post.content, 120)}
                </p>
              )}

              {/* Footer Actions */}
              <div
                className="flex items-center justify-between mt-1 md:mt-auto md:pt-4 md:border-t border-gray-100"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="flex items-center text-[#CC00B7] font-semibold text-xs md:text-sm group-hover:text-[#CC00B7]/80 transition-colors">
                  Read More
                  <img
                    src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-arrow-right-icon.svg"
                    alt="Arrow Right"
                    className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transition-transform group-hover:translate-x-1"
                  />
                </span>

                <button
                  className="text-[#CC00B7] group-hover:text-[#CC00B7]/80 group-hover:bg-fuchsia-50 p-1 md:p-2 rounded-full transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/hezekiahdane/ShipX-Copy@main/src/assets/blogs-share-icon.svg"
                    alt="Share"
                    className="w-3 h-3 md:w-4 md:h-4"
                  />
                </button>
              </div>
            </div>
          </SmartNavLink>
        );
      })}
    </div>
  );
};

export default BlogsGrid;

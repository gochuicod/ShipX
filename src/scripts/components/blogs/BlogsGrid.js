import React from "react";
import SmartNavLink from "../ui/SmartNavLink";

const BlogsGrid = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  // Helper to strip HTML and limit characters
  const getTruncatedContent = (content, limit = 100) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[2vw]">
      {posts.map((post) => (
        <SmartNavLink
          key={post.slug}
          to={`/blog/${post.slug}`}
          // Layout: Flex Row on Mobile, Flex Column on Desktop
          className="group flex flex-row md:flex-col bg-white rounded-xl md:rounded-[1vw] overflow-hidden shadow-sm md:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0vw_1vw_rgba(79,55,138,0.25)] transition-all duration-300 p-2 md:p-0 gap-3 md:gap-0 items-stretch"
        >
          {/* --- Image Container --- */}
          {/* Mobile: 35% width, fixed aspect. Desktop: Full width, 14vw height */}
          <div className="relative w-[35%] md:w-full md:h-[14vw] shrink-0 overflow-hidden rounded-lg md:rounded-none">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* --- Content Body --- */}
          <div className="flex flex-col grow w-[65%] md:w-full justify-between md:justify-start md:p-[1.5vw]">
            <div>
              {/* Category Pill */}
              {(post.tags || post.tags) && (
                <div className="mb-2 md:mb-[0.8vw]">
                  <span className="inline-block bg-[#F3F1FF] text-[#8B1599] px-2 py-1 md:px-[0.8vw] md:py-[0.3vw] rounded-full text-[10px] md:text-[0.7vw] font-semibold">
                    {post.tags || post.tags}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-sm md:text-[1.2vw] font-bold text-[#1A1A1A] leading-tight mb-2 md:mb-[0.8vw] line-clamp-2">
                {post.title}
              </h3>

              {/* Description: Hidden on Mobile, Visible on Desktop */}
              {post.content && (
                <p className="hidden md:block text-[#1A1A1A]/60 text-[3.2vw] md:text-[0.9vw] line-clamp-3 mb-[3vw] md:mb-[1vw]">
                  {getTruncatedContent(post.content, 120)}
                </p>
              )}
            </div>

            {/* Footer: Date & Read More */}
            <div className="mt-auto flex items-center justify-between md:pt-[1vw] md:border-t border-gray-100">
              <span className="text-[#1A1A1A]/40 text-[10px] md:text-[0.75vw]">
                {post.date}
              </span>
              <span className="text-[#FF00E5] text-[10px] md:text-[0.8vw] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read More →
              </span>
            </div>
          </div>
        </SmartNavLink>
      ))}
    </div>
  );
};

export default BlogsGrid;

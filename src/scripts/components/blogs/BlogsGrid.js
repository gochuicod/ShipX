import React from "react";
import SmartNavLink from "../ui/SmartNavLink";

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
    const plainText = content.replace(/<[^>]*>?/gm, ""); // Strip HTML tags
    if (plainText.length <= limit) return plainText;
    return plainText.substring(0, limit) + "...";
  };

  // Helper for category pills
  const CategoryPills = ({ tags, className = "" }) => (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <span
          key={index}
          className="inline-block bg-[#F8E3F5] text-[#99008A] px-2 py-1 md:px-[0.8vw] md:py-[0.3vw] rounded-full text-[10px] md:text-[0.7vw] font-semibold"
        >
          {tag}
        </span>
      ))}
    </div>
  );

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
          <div className="relative w-[35%] md:w-full md:h-[14vw] shrink-0 overflow-hidden rounded-lg md:rounded-none">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Mobile-Only Category Pills (Overlay) */}
            {post.tags && post.tags.length > 0 && (
              <div className="absolute top-2 right-2 md:hidden">
                <CategoryPills tags={post.tags} />
              </div>
            )}
            {/* Desktop NEW Badge */}
            {isRecent(post.date) && (
              <div className="hidden md:block absolute top-[1vw] right-[1vw] bg-[#FF00E5] text-white text-[0.7vw] font-bold px-[0.8vw] py-[0.3vw] rounded-full shadow-md z-10">
                NEW
              </div>
            )}
          </div>

          {/* --- Content Body --- */}
          <div className="flex flex-col grow w-[65%] md:w-full justify-between md:justify-start md:p-[1.5vw]">
            <div>
              {/* Title */}
              <h3 className="text-sm md:text-[1.2vw] font-bold text-[#1A1A1A] leading-tight mb-2 md:mb-[0.8vw] line-clamp-2">
                {post.title}
              </h3>

              {/* Top Row: Category Pills & Date */}
              <div className="hidden md:flex items-center justify-between mb-[1vw]">
                {/* Category Pills on Left */}
                {post.tags && post.tags.length > 0 && (
                  <CategoryPills tags={post.tags} />
                )}
                {/* Date on Right */}
                <span className="text-[#1A1A1A]/40 text-[0.75vw] ml-auto">
                  {post.date}
                </span>
              </div>

              {/* Description: Hidden on Mobile, Visible on Desktop */}
              {post.content && (
                <p className="hidden md:block text-[#1A1A1A]/60 text-[3.2vw] md:text-[0.9vw] line-clamp-3 mb-[3vw] md:mb-[1vw]">
                  {getTruncatedContent(post.content, 120)}
                </p>
              )}
            </div>

            {/* Footer: Read More & Share Icon */}
            <div className="mt-auto flex items-center justify-between md:pt-[1vw] md:border-t border-gray-100">
              {/* Read More: Visible on Mobile and Desktop */}
              <span className="text-[#CC00B7] text-[10px] md:text-[0.8vw] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3 md:w-[0.8vw] md:h-[0.8vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>

              {/* Share Icon on Right */}
              <button className="text-[#8B1599] hover:text-[#FF00E5] transition-colors ml-auto md:ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 md:w-[1vw] md:h-[1vw]"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 11.159 5.94L9.53 12.25a3 3 0 110 2.5l6.38 1.81a3 3 0 11-.159 5.94l-8.25-2.34A3 3 0 017.5 21a3 3 0 11.159-5.94l6.38-1.81a3 3 0 010-2.5l-6.38-1.81a3 3 0 11.159-5.94l8.25 2.34A3 3 0 0116.5 3a3 3 0 01-.75 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </SmartNavLink>
      ))}
    </div>
  );
};

export default BlogsGrid;

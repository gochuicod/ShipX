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
          // Container: Flex Row on Mobile (Image Left / Text Right), Column on Desktop
          className="group flex flex-row md:flex-col bg-[#F3F4F6] rounded-xl md:rounded-[1vw] overflow-hidden shadow-[2px_2px_5px_0px_#60617040] md:shadow-[0px_2.84px_5.68px_0px_#60617029,0px_0px_1.42px_0px_#28293D0A] hover:shadow-[0_0vw_1vw_rgba(79,55,138,0.25)] transition-all duration-300 p-2 md:p-0 gap-4 md:gap-0 items-stretch"
        >
          {/* --- Image Container --- */}
          {/* Mobile: 50% width with aspect ratio. Desktop: Full width with aspect ratio */}
          <div className="relative w-1/2 md:w-full aspect-video shrink-0 overflow-hidden rounded-xl md:rounded-none">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Desktop NEW Badge */}
            {isRecent(post.date) && (
              <div className="hidden md:block absolute top-[1vw] right-[1vw] bg-[#FF00E5] text-white text-[0.7vw] font-bold px-[0.8vw] py-[0.3vw] rounded-full shadow-md z-10">
                NEW
              </div>
            )}
          </div>

          {/* --- Content Body --- */}
          <div className="flex flex-col grow w-1/2 md:w-full justify-between md:p-[1.5vw] gap-[0.533vw] md:gap-0">
            {/* Top Section: Title, Tags, Date */}
            <div className="flex flex-col gap-2 md:gap-0">
              {/* Title */}
              <h3 className="text-sm md:text-[1.2vw] font-bold text-[#1A1A1A] leading-tight md:mb-[0.8vw] line-clamp-2 md:line-clamp-2">
                {post.title}
              </h3>

              {/* Tags & Date Container */}
              {/* Mobile: Stacked vertically. Desktop: Flex row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mb-[1vw] gap-1 md:gap-0">
                {/* Category Pills */}
                {post.tags && post.tags.length > 0 && (
                  <CategoryPills tags={post.tags} className="mb-1 md:mb-0" />
                )}

                {/* Date */}
                <span className="text-[#1A1A1A]/50 text-[11px] md:text-[0.75vw] md:ml-auto">
                  {post.date}
                </span>
              </div>

              {/* Description: Hidden on Mobile as per design image, Visible on Desktop */}
              {post.content && (
                <p className="hidden md:block text-[#1A1A1A]/60 text-[3.2vw] md:text-[0.9vw] line-clamp-3 mb-[3vw] md:mb-[1vw]">
                  {getTruncatedContent(post.content, 200)}
                </p>
              )}
            </div>

            {/* Footer: Read More & Share Icon */}
            {/* Pushed to bottom via mt-auto */}
            <div className="mt-auto flex items-center justify-between pt-2 md:pt-[1vw] md:border-t border-gray-100">
              {/* Read More Link */}
              <span className="text-[#D500B3] text-[12px] md:text-[0.8vw] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

              {/* Share Icon */}
              <button className="text-[#D500B3] hover:text-[#FF00E5] transition-colors">
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

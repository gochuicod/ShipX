import React from "react";
import SmartNavLink from "../ui/SmartNavLink";

const FeaturedBlog = ({ post }) => {
  if (!post) return null;

  // Mock tags/categories for the design - in a real app, these would come from post.tags
  const tags = [
    post.category || "Shipping Basics & Packaging",
    "Logistics",
  ].slice(0, 2);

  return (
    <SmartNavLink
      to={`/blog/${post.slug}`}
      className="group relative w-full h-[80vw] md:h-[32vw] rounded-[3vw] md:rounded-[1.5vw] overflow-hidden shadow-sm transition-all duration-300 block"
    >
      {/* 1. Background Image */}
      <img
        src={post.cover}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Optional overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 2. Floating Content Card */}
      <div className="absolute bottom-[3vw] left-[3vw] right-[3vw] md:bottom-[2vw] md:left-[2vw] md:w-[45%] bg-white rounded-[2.5vw] md:rounded-[1vw] p-[4vw] md:p-[1.5vw] shadow-lg backdrop-blur-sm bg-white/95">
        {/* Tags & Date Row */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 mb-[2vw] md:mb-[1vw]">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#F3F1FF] text-[#8B1599] px-[2.5vw] py-[1vw] md:px-[0.8vw] md:py-[0.3vw] rounded-full text-[2.5vw] md:text-[0.7vw] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[#1A1A1A]/50 text-[3vw] md:text-[0.8vw] font-medium">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[4.5vw] md:text-[1.5vw] font-bold text-[#1A1A1A] leading-tight mb-[2vw] md:mb-[0.8vw] line-clamp-2">
          {post.title}
        </h2>

        {/* Description */}
        {post.content && (
          <p className="text-[#1A1A1A]/70 text-[3.5vw] md:text-[0.9vw] line-clamp-2 mb-[3vw] md:mb-[1.5vw]">
            {post.content}
          </p>
        )}

        {/* Footer: Read More & Share Icon */}
        <div className="flex items-center justify-between">
          <span className="text-[#FF00E5] text-[3.5vw] md:text-[0.9vw] font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
            Read More <span className="text-xl">→</span>
          </span>

          {/* Share Icon (You can replace this with an actual button/functionality) */}
          <button className="text-[#8B1599] hover:text-[#FF00E5] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
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
  );
};

export default FeaturedBlog;

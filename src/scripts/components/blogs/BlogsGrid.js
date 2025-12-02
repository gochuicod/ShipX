import SmartNavLink from "../ui/SmartNavLink"; // Adjust path as needed

const BlogsGrid = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[6vw] md:gap-[2vw]">
      {posts.map((post) => (
        <SmartNavLink
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="group flex flex-col bg-white rounded-[3vw] md:rounded-[1vw] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0vw_1vw_rgba(79,55,138,0.25)] transition-all duration-300"
        >
          {/* Card Image */}
          <div className="w-full h-[50vw] md:h-[14vw] relative overflow-hidden">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Category Badge */}
            {post.category && (
              <span className="absolute top-[3vw] left-[3vw] md:top-[1vw] md:left-[1vw] bg-white/90 backdrop-blur-sm px-[2vw] py-[0.5vw] md:px-[0.8vw] md:py-[0.2vw] rounded-full text-[2.2vw] md:text-[0.6vw] font-bold text-[#8B1599]">
                {post.category}
              </span>
            )}
          </div>

          {/* Card Content */}
          <div className="flex flex-col grow p-[4vw] md:p-[1.5vw]">
            <h3 className="text-[4.5vw] md:text-[1.2vw] font-bold text-[#1A1A1A] leading-tight mb-[2vw] md:mb-[0.8vw] line-clamp-2">
              {post.title}
            </h3>
            {post.content && (
              <p className="text-[#1A1A1A]/60 text-[3.2vw] md:text-[0.9vw] line-clamp-3 mb-[3vw] md:mb-[1vw]">
                {post.content}
              </p>
            )}

            {/* Card Footer */}
            <div className="mt-auto flex items-center justify-between pt-[2vw] md:pt-[1vw] border-t border-gray-100">
              <span className="text-[#1A1A1A]/40 text-[3vw] md:text-[0.75vw]">
                {post.date}
              </span>
              <span className="text-[#FF00E5] text-[3vw] md:text-[0.8vw] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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

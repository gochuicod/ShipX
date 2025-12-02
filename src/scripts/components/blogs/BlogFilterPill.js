
const BlogFilterPill = ({ label, count, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 rounded-lg transition-all duration-300
        px-[4vw] py-[2vw] text-[3vw]
        md:px-[1vw] md:py-[0.5vw] md:text-[0.9vw]
        font-medium shrink-0
        ${
          isActive
            ? "bg-[#8B1599] text-white shadow-md"
            : "bg-[#F5F5F5] text-[#1A1A1A]/70 hover:bg-[#FF00E5]/10 hover:text-[#FF00E5]"
        }
      `}
    >
      <span>{label}</span>
      <span
        className={`text-[0.8em] ${
          isActive ? "text-white/80" : "text-black/30"
        }`}
      >
        ({count})
      </span>
    </button>
  );
};

export default BlogFilterPill;

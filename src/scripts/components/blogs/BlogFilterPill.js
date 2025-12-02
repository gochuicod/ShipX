const BlogFilterPill = ({ label, count, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        md:px-[1vw] px-[4vw] md:py-[0.5vw] py-[2vw] 
        md:rounded-[0.42vw] rounded-[2.1vw] 
        md:text-[0.9vw] text-[3.5vw] font-medium 
        transition-colors whitespace-nowrap 
        md:mb-[0.5vw] mb-[2vw] border
        hover:cursor-pointer
        ${
          isActive
            ? "bg-[#99008A] text-white border-[#99008A] shadow-[0_0.2vw_0.5vw_rgba(79,55,138,0.3)]"
            : "bg-[#FCE7F3] text-[#1A1A1A] border-transparent hover:bg-[#EDE9FE]"
        }
      `}
    >
      {label}{" "}
      {count !== null && count !== undefined && (
        <span
          className={`ml-[0.2em] ${isActive ? "text-white" : "text-[#1A1A1A]"}`}
        >
          ({count})
        </span>
      )}
    </button>
  );
};

export default BlogFilterPill;

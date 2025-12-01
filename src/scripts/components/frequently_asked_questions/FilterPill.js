import React from "react";

const FilterPill = ({ label, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      md:px-[1vw] px-[4vw] md:py-[0.5vw] py-[2vw] 
      md:rounded-[0.42vw] rounded-[2.1vw] 
      md:text-[0.9vw] text-[3.5vw] font-medium 
      transition-colors whitespace-nowrap 
      md:mb-[0.5vw] mb-[2vw] border
      ${
        isActive
          ? "bg-[#4F378A] text-white border-[#4F378A] shadow-[0_0.2vw_0.5vw_rgba(79,55,138,0.3)]"
          : "bg-[#F3F1FF] text-[#1A1A1A]/70 border-transparent hover:bg-[#EBE5FF]"
      }
    `}
  >
    {label}{" "}
    {count !== null && (
      <span className="opacity-75 text-[0.8em] ml-[0.2em]">({count})</span>
    )}
  </button>
);

export default FilterPill;
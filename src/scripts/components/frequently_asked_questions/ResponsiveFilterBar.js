import React from "react";
import { ChevronDown } from "lucide-react";

// --- 1. The Original FilterPill (Desktop View) ---
const FilterPill = ({ label, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      md:px-[1vw] md:py-[0.5vw] 
      md:rounded-[0.42vw] 
      md:text-[0.9vw] font-medium 
      transition-colors whitespace-nowrap 
      md:mb-[0.5vw] border
      hover:cursor-pointer
      ${
        isActive
          ? "bg-[#99008A] text-white border-[#99008A] shadow-[0_0.2vw_0.5vw_rgba(79,55,138,0.3)]"
          : "bg-[#EDE9FE] text-[#1A1A1A] border-transparent hover:bg-[#FF00E5]/10"
      }
    `}
  >
    {label}
    {count !== null && (
      <span
        className={`ml-[0.2em] ${isActive ? "text-white" : "text-[#1A1A1A]"}`}
      >
        ({count})
      </span>
    )}
  </button>
);

// --- 2. The Mobile Dropdown (Mobile View) ---
const MobileFilterDropdown = ({ options, activeId, onChange }) => {
  return (
    <div className="relative w-full px-[5vw]">
      <div className="relative">
        <select
          value={activeId}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full appearance-none
            py-[2.5vw] pl-[4vw] pr-[10vw]
            rounded-[2.1vw]
            text-[3.5vw] font-medium
            border border-transparent
            bg-[#EDE9FE] text-[#1A1A1A]
            focus:outline-none focus:ring-2 focus:ring-[#99008A]
          `}
        >
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label} {opt.count !== null ? `(${opt.count})` : ""}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-[4vw] text-[#99008A]">
          <ChevronDown size="1.2em" />
        </div>
      </div>
    </div>
  );
};

// --- 3. The Responsive Wrapper ---
const ResponsiveFilterBar = ({ filters, activeFilterId, onFilterChange }) => {
  return (
    <div className="w-full flex justify-center">
      {/* MOBILE: Show Dropdown */}
      <div className="block md:hidden w-full">
        <MobileFilterDropdown
          options={filters}
          activeId={activeFilterId}
          onChange={onFilterChange}
        />
      </div>

      {/* DESKTOP: Show Pills */}
      <div className="hidden md:flex flex-wrap justify-center gap-[0.5vw]">
        {filters.map((filter) => (
          <FilterPill
            key={filter.id}
            label={filter.label}
            count={filter.count}
            isActive={activeFilterId === filter.id}
            onClick={() => onFilterChange(filter.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveFilterBar;

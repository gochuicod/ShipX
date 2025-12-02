import { ChevronDown } from "lucide-react";
import BlogFilterPill from "./BlogFilterPill";

// --- Mobile Dropdown Component ---
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

// --- Main Responsive Wrapper ---
const BlogResponsiveFilterBar = ({
  filters,
  activeFilterId,
  onFilterChange,
}) => {
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

      {/* DESKTOP: Show Pills with Natural Wrapping */}
      <div className="hidden md:flex flex-wrap justify-center gap-[0.5vw]">
        {filters.map((filter) => (
          <BlogFilterPill
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

export default BlogResponsiveFilterBar;

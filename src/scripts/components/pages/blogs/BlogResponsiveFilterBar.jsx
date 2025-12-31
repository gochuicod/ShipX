import { ChevronDown } from "lucide-react";
import BlogFilterPill from "./BlogFilterPill";

// --- Mobile Dropdown Component ---
const MobileFilterDropdown = ({ options, activeId, onChange }) => {
  return (
    // Container aligned to the right to match the screenshot reference
    <div className="w-full flex justify-end">
      <div className="relative inline-block">
        <select
          value={activeId}
          onChange={(e) => onChange(e.target.value)}
          className={`
            appearance-none
            flex flex-row items-center justify-center
            w-[152px] h-[32px]
            pl-[8px] pr-[30px] /* Right padding ensures text doesn't overlap icon */
            rounded-[4px]
            
            /* Typography from Figma */
            font-['Inter'] text-[14px] font-normal leading-[16px]
            text-[#1E2939] text-center
            
            /* Visual Styling from Figma */
            bg-white border-none
            shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-1px_-1px_1px_rgba(154,4,129,0.1)]
            
            /* Focus State */
            focus:outline-none focus:ring-1 focus:ring-[#99008A]
            cursor-pointer
          `}
        >
          {/* Optional: If you want the label "Filter by category" to appear 
            when "All" is selected or as a placeholder, you can handle logic here.
            Otherwise, it maps the options as before.
          */}
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon - Updated Color & Size */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[8px] text-[#4F378A]">
          <ChevronDown size={15} />
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

      {/* DESKTOP: Show Pills with Flex Wrap Layout */}
      <div className="hidden md:flex flex-row flex-wrap justify-center items-center content-center gap-4 w-full">
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

import { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/util";
import SmartNavLink from "../ui/SmartNavLink";

const linkClass =
  "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

export default function Dropdown({
  title,
  items,
  selected,
  onSelect,
  parentClassName = "",
  triggerClassName = "",
  direction = "down",
  hoverMode = false, // Set to true if you want it to open on hover as well
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isUp = direction === "up";

  // Handle Close on Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Optional: Handle Hover Logic (if hoverMode is true)
  const handleMouseEnter = () => {
    if (hoverMode) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (hoverMode) setIsOpen(false);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative h-full flex items-center", parentClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div
        onClick={toggleOpen}
        className={cn(
          linkClass,
          triggerClassName !== "" ? triggerClassName : "py-4",
          "flex items-center gap-x-1 cursor-pointer select-none",
          // Highlight trigger if open
          isOpen ? "text-[#FF00E5]" : "",
        )}
      >
        <span>{selected?.name || title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className={cn(
            "w-3 h-3 transition-transform duration-300",
            // Rotate based on isOpen state instead of group-hover
            isOpen
              ? "rotate-180 stroke-[#FF00E5]"
              : "rotate-0 stroke-[#1A1A1A]",
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Panel */}
      <div
        className={cn(
          // Base styles
          "absolute left-0 z-50 min-w-max",
          "bg-white rounded-lg border border-[#FF00E5] shadow-lg p-1 overflow-hidden",
          "transition-all duration-200 ease-out pointer-events-auto text-dark-netural",

          // Visibility states (Controlled by isOpen state now)
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-1",

          // Directional Logic
          isUp
            ? "bottom-full mb-1" // If Up: Position above
            : "top-full mt-1", // If Down: Position below
        )}
      >
        {items.map((item) =>
          onSelect ? (
            <div
              key={item.id || item.key}
              role="button"
              tabIndex={0}
              onClick={() => {
                onSelect(item);
                setIsOpen(false); // Close on selection
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(item);
                  setIsOpen(false);
                }
              }}
              className="group relative cursor-pointer px-4 py-3 select-none hover:bg-[#FF00E5] rounded-md text-dark-neutral hover:text-white"
            >
              <span className="block font-normal">{item.name}</span>
            </div>
          ) : (
            <SmartNavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)} // Close on navigation
              className="group/item block"
            >
              <div className="flex items-center gap-x-3 px-4 py-3 text-base text-gray-700 rounded-md transition-colors duration-200 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-4">
                <span className="shrink-0 scale-110">{item.icon}</span>
                <span className="whitespace-nowrap font-medium pr-2">
                  {item.label}
                </span>
              </div>
            </SmartNavLink>
          ),
        )}
      </div>
    </div>
  );
}

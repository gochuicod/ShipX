import { cn } from "../../../lib/util";
import SmartNavLink from "../ui/SmartNavLink";

const linkClass =
  "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

export default function Dropdown({ title, items, selected, onSelect }) {
  return (
    <div className="relative group h-full flex items-center">
      {/* Trigger */}
      <div
        className={cn(
          linkClass,
          "flex items-center gap-x-1 cursor-pointer py-4",
          "group-hover:text-[#FF00E5]",
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
            "group-hover:rotate-180 group-hover:stroke-[#FF00E5] stroke-[#1A1A1A]",
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
        className="
          absolute top-full left-0 z-50 mt-1 min-w-max 
          bg-white rounded-lg border border-[#FF00E5] shadow-lg p-1 overflow-hidden
          opacity-0 invisible translate-y-1
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
          transition-all duration-200 ease-out
          pointer-events-auto
          text-dark-netural
        "
      >
        {items.map((item) =>
          onSelect ? (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(item);
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

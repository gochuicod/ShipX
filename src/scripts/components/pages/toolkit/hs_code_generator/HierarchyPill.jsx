import { useState } from "react";
import { useClipboard } from "../../../../hooks/useClipboard";
import { ChevronDown } from "lucide-react";

export default function HierarchyPill({ item }) {
  const [isActive, setIsActive] = useState(false);
  const { isCopied, copy } = useClipboard();

  const handleCopyDescription = (e) => {
    e.preventDefault();
    e.stopPropagation();
    copy(item.description);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsActive(false);
    }
  };

  return (
    <div
      className="relative group outline-none"
      tabIndex={0}
      onBlur={handleBlur}
    >
      {/* Trigger Pill */}
      <div
        onClick={() => setIsActive(!isActive)}
        className={`
          flex items-center gap-2
          cursor-pointer
          font-medium
          text-sm
          px-3 py-1.5
          rounded-sm
          transition-all duration-200

          shadow-[1px_1px_4px_rgba(20,0,99,0.3),inset_-1px_-1px_1px_rgba(154,4,129,0.15)]

          ${
            isActive
              ? "bg-[#CC00B7] text-white"
              : "bg-white text-[#CC00B7] hover:bg-[#FDF4FF]"
          }
        `}
      >
        <span>{item.code}</span>

        <ChevronDown
          color={isActive ? "currentColor" : "#CC00B7"}
          className={`
            w-4 h-4
            transition-transform duration-200
            ${isActive ? "rotate-180" : "rotate-0 group-hover:rotate-180"}
          `}
        />
      </div>

      {/* Tooltip Container */}
      <div
        className={`
          absolute bottom-full left-1/2 -translate-x-1/2
          pb-2
          w-[260px]

          opacity-0 invisible
          transition-all duration-200
          z-50

          pointer-events-none
          group-hover:pointer-events-auto
          group-hover:opacity-100
          group-hover:visible

          ${
            isActive
              ? "opacity-100 visible pointer-events-auto translate-y-0"
              : "translate-y-1 group-hover:translate-y-0"
          }
        `}
      >
        {/* Tooltip Box */}
        <div
          className="
            relative
            bg-[#F8F7FF]
            border border-[#CC00B7]
            rounded-[12px]
            p-3
          "
        >
          <div className="text-[#4A5565] text-sm leading-snug mb-3">
            {item.description}
          </div>

          <button
            onClick={handleCopyDescription}
            className="
              flex items-center justify-center
              w-full
              text-sm
              font-medium
              text-white
              bg-[#CC00B7] hover:bg-[#CC00B7]/90
              py-1.5
              rounded-xl
              transition-colors
              cursor-pointer
            "
          >
            {isCopied ? "Copied" : "Copy Description"}
          </button>

          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#CC00B7]" />
        </div>
      </div>
    </div>
  );
}

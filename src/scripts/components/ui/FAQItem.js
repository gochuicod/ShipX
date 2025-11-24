import React from "react";
import { ChevronDown } from "lucide-react";

const FaqItem = ({ item, isOpen, onClick }) => {
  // Safety check: If 'item' is undefined, do not render anything
  if (!item) return null;

  return (
    <div
      onClick={() => onClick(item.id)}
      className={`
        relative w-full rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden mb-2
        ${
          isOpen
            ? "bg-white shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] border border-pink-100 z-10 scale-[1.02]"
            : "bg-slate-50 hover:bg-slate-100 border border-transparent"
        }
      `}
    >
      <div className="px-4 py-6">
        <div className="flex justify-between items-center gap-2 md:gap-4">
          <div className="flex-1">
            <h3
              className={`font-semibold text-xs md:text-base ${
                isOpen ? "text-[#170F49]" : "text-[#170F49]"
              }`}
            >
              {item.question}
            </h3>

            <div
              className={`
                grid transition-[grid-template-rows] duration-300 ease-out
                ${isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}
              `}
            >
              <div className="overflow-hidden">
                <p className="text-xs md:text-sm font-medium leading-relaxed text-[#1E2939]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-4">
            <button
              className={`
                flex items-center justify-center w-6 h-6 md:w-9 md:h-9 rounded-full transition-all duration-300
                ${
                  isOpen
                    ? "bg-[#99008A] text-white rotate-180"
                    : "bg-[#D1D5DC] text-[#1E2939] rotate-0"
                }
              `}
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

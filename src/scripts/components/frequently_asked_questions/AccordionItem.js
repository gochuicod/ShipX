import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`
        md:mb-[1vw] mb-[4vw] md:rounded-[0.8vw] rounded-[3vw] 
        transition-all duration-300 overflow-hidden border
        ${
          isOpen
            ? "bg-white shadow-[0_0.5vw_1.5vw_rgba(79,55,138,0.08)] border-[#4F378A]/20"
            : "bg-[#FAFAFA] hover:bg-white border-transparent"
        }
      `}
    >
      {/* Header / Trigger */}
      <div
        onClick={onClick}
        className="flex items-center justify-between md:p-[1.5vw] p-[5vw] cursor-pointer"
      >
        <h3
          className={`font-bold md:text-[1.1vw] text-[4vw] pr-[2vw] ${
            isOpen ? "text-[#4F378A]" : "text-[#1A1A1A]"
          }`}
        >
          {item.question}
        </h3>

        <div className="flex items-center md:gap-[0.8vw] gap-[3vw] shrink-0">
          <span className="hidden sm:block md:px-[0.8vw] px-[3vw] md:py-[0.2vw] py-[1vw] bg-[#F3F1FF] text-[#4F378A] md:text-[0.7vw] text-[2.5vw] font-semibold md:rounded-[0.42vw] rounded-[4vw]">
            {item.category_label}
          </span>
          <div
            className={`md:p-[0.5vw] p-[2vw] rounded-full transition-colors ${
              isOpen
                ? "bg-[#4F378A] text-white"
                : "bg-[#E5E5E5] text-[#1A1A1A]/60"
            }`}
          >
            {isOpen ? (
              <ChevronUp className="md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw]" />
            ) : (
              <ChevronDown className="md:w-[1.2vw] md:h-[1.2vw] w-[5vw] h-[5vw]" />
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="md:px-[1.5vw] px-[5vw] md:pb-[2vw] pb-[6vw] text-[#1A1A1A]/80 md:text-[0.95vw] text-[3.5vw] leading-relaxed border-t border-[#1A1A1A]/5 mt-[0.5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[2vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pt-[1.5vw] pt-[4vw]">
            {(item.answer_blocks || []).map((block, index) => {
              // 'intro' types span full width, 'point' types take 1 column in the grid
              const isFullWidth = block.type === "intro";
              return (
                <div
                  key={index}
                  className={isFullWidth ? "col-span-full" : "col-span-1"}
                >
                  {block.title && (
                    <strong className="text-[#1A1A1A] block mb-[0.2em] md:text-[1vw] text-[3.8vw]">
                      {block.title}
                    </strong>
                  )}
                  <p>{block.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
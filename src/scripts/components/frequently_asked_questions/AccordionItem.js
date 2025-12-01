import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`
    md:mb-[0.8vw] mb-[4vw] md:rounded-[0.8vw] rounded-[3vw] 
    transition-all duration-300 overflow-hidden border
    ${
      isOpen
        ? "bg-white shadow-[0px_4px_25px_0px_#FF00E54D] border-[#4F378A]/20"
        : "bg-[#FAFAFA] hover:bg-white border-transparent hover:shadow-[0px_4px_25px_0px_#FF00E54D]"
    }
  `}
    >
      {/* Header / Trigger */}
      {/* Padding compressed to ~24px (1.25vw) */}
      <div
        onClick={onClick}
        className="flex items-center justify-between md:p-[1.25vw] p-[5vw] cursor-pointer"
      >
        {/* Header Font: 20px (1.04vw) */}
        <h3
          className={`font-semibold md:text-[1.04vw] text-[3.5vw] pr-[2vw] ${
            isOpen ? "text-[#99008A]" : "text-[#1A1A1A]"
          }`}
        >
          {item.question}
        </h3>

        <div className="flex items-center md:gap-[0.8vw] gap-[3vw] shrink-0">
          {/* Category Font: 16px (0.83vw) */}
          <span className="hidden sm:block md:px-[0.8vw] px-[3vw] md:py-[0.2vw] py-[1vw] bg-[#EDE9FE] text-[#1A1A1A] md:text-[0.83vw] text-[2.5vw] font-semibold md:rounded-[0.42vw] rounded-[4vw]">
            {item.category_label}
          </span>
          <div
            className={`md:p-[0.5vw] p-[2vw] rounded-full transition-colors ${
              isOpen ? "bg-[#99008A] text-white" : "bg-[#D1D5DC] text-[#1E2939]"
            }`}
          >
            {isOpen ? (
              <ChevronUp className="md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]" />
            ) : (
              <ChevronDown className="md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]" />
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div
          className="
            md:px-[1.25vw] px-[5vw] 
            md:pb-[1.25vw] pb-[6vw] 
            text-[#1E2939] 
            md:text-[0.83vw] text-[3.5vw] 
            leading-normal
            md:mt-[0.5vw] mt-[0.5vw]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[2.08vw] md:gap-y-[1vw] gap-y-[4vw]">
            {(item.answer_blocks || []).map((block, index) => {
              const isFullWidth = block.type === "intro";
              return (
                <div
                  key={index}
                  className={isFullWidth ? "col-span-full" : "col-span-1"}
                >
                  <p>
                    {block.title && (
                      <span className="text-[#1E2939] font-bold">
                        {block.title}{" "}
                      </span>
                    )}
                    {block.text}
                  </p>
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

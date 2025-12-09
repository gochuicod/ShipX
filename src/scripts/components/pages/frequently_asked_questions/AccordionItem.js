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
      <div
        onClick={onClick}
        className="flex items-start md:items-center justify-between md:p-[1.25vw] p-[5vw] cursor-pointer"
      >
        {/* Left Side: Question + Mobile Category */}
        <div className="flex flex-col pr-[3vw]">
          <h3
            className={`font-semibold md:text-[1.04vw] text-[3.5vw] leading-tight ${
              isOpen ? "text-[#99008A]" : "text-[#1A1A1A]"
            }`}
          >
            {item.question}
          </h3>

          {/* MOBILE ONLY: Category Label 
              Padding: ~4px top/bottom (1.1vw), ~8px left/right (2.1vw)
          */}
          <span className="md:hidden mt-[2.5vw] px-[2.1vw] py-[1.1vw] bg-[#EDE9FE] text-[#1A1A1A] text-[3vw] font-semibold rounded-[1vw] w-fit">
            {item.category_label}
          </span>
        </div>

        {/* Right Side: Desktop Category + Chevron */}
        <div className="flex items-center md:gap-[0.8vw] gap-[3vw] shrink-0">
          {/* DESKTOP ONLY: Category Label 
              Padding: 4px (0.21vw) top/bottom, 8px (0.42vw) left/right
          */}
          <span className="hidden md:block md:px-[0.42vw] md:py-[0.21vw] bg-[#EDE9FE] text-[#1A1A1A] md:text-[0.83vw] text-[2.5vw] font-semibold md:rounded-[0.42vw] rounded-[4vw]">
            {item.category_label}
          </span>

          {/* Chevron Circle */}
          <div
            className={`md:p-[0.5vw] p-[2vw] rounded-full transition-colors ${
              isOpen ? "bg-[#99008A] text-white" : "bg-[#D1D5DC] text-[#1E2939]"
            }`}
          >
            {isOpen ? (
              <ChevronUp
                strokeWidth={3}
                className="md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]"
              />
            ) : (
              <ChevronDown
                strokeWidth={3}
                className="md:w-[0.8vw] md:h-[0.8vw] w-[2.5vw] h-[2.5vw]"
              />
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
            md:mt-[0.5vw] mt-[2vw] 
          "
        >
          <div className="flex flex-col md:flex-wrap md:flex-row gap-y-[4vw] md:gap-x-[2.08vw] md:gap-y-[1vw]">
            {(item.answer_blocks || []).map((block, index) => {
              const isFullWidth = block.type === "intro";
              return (
                <div
                  key={index}
                  className={
                    isFullWidth ? "w-full" : "w-full md:w-[calc(50%-1.04vw)]"
                  }
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

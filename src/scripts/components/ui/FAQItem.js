import { ChevronDown } from "lucide-react";

const FaqItem = ({ item, isOpen, onClick }) => {
  if (!item) return null;

  return (
    <div
      onClick={() => onClick(item.id)}
      className={`
        relative w-full 
        rounded-[3vw] md:rounded-[0.8vw] 
        transition-all duration-300 cursor-pointer overflow-hidden 
        mb-[1.5vw] md:mb-[0.4vw]
        ${
          isOpen
            ? "bg-white shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] border border-pink-100 z-10 scale-[1.01]"
            : "bg-slate-50 hover:bg-slate-100 border border-transparent"
        }
      `}
    >
      {/* Reduced padding here to make the item shorter */}
      <div className="px-[3.5vw] py-[4vw] md:px-[1vw] md:py-[1vw]">
        <div className="flex justify-between items-center gap-[2vw] md:gap-[0.8vw]">
          <div className="flex-1">
            <h3
              className={`font-semibold text-[3vw] md:text-[0.9vw] leading-tight ${
                isOpen ? "text-[#170F49]" : "text-[#170F49]"
              }`}
            >
              {item.question}
            </h3>

            <div
              className={`
                grid transition-[grid-template-rows] duration-300 ease-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] mt-[2.5vw] md:mt-[0.8vw]"
                    : "grid-rows-[0fr]"
                }
              `}
            >
              <div className="overflow-hidden">
                {/* Reduced font size slightly */}
                <p className="font-medium leading-relaxed text-[#1E2939] text-[2.8vw] md:text-[0.8vw]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center ml-[2vw] md:ml-[0.5vw]">
            <button
              className={`
                flex items-center justify-center 
                w-[5vw] h-[5vw] md:w-[1.8vw] md:h-[1.8vw] 
                rounded-full transition-all duration-300
                ${
                  isOpen
                    ? "bg-[#99008A] text-white rotate-180"
                    : "bg-[#D1D5DC] text-[#1E2939] rotate-0"
                }
              `}
            >
              <ChevronDown className="w-[3.5vw] h-[3.5vw] md:w-[1.1vw] md:h-[1.1vw]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

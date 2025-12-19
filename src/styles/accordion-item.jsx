import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/util";
import { style } from "motion/react-client";

// --- Variants ---

// 1. Container Variants
const accordionContainerVariants = cva(
  "w-full transition-all duration-300 overflow-hidden border rounded-[8px] mb-4",
  {
    variants: {
      state: {
        // The spec implies a constant visual style for the container background/border
        open: "bg-white border-[#FFD6FA]",
        closed: "bg-white border-[#FFD6FA]",
      },
    },
    defaultVariants: {
      state: "closed",
    },
  },
);

// 2. Title Text Variants
const accordionTitleVariants = cva(
  "font-inter font-bold text-[16px] leading-[20px] text-[#99008A] text-left transition-colors",
);

// 3. Chevron Button Wrapper Variants
// Applied specific dimensions (34.42px), purple background, and complex box-shadows
const accordionChevronVariants = cva(
  "flex items-center justify-center rounded-full transition-transform duration-300 shrink-0",
  {
    variants: {
      state: {
        open: "transform rotate-180",
        closed: "transform rotate-0",
      },
    },
    defaultVariants: {
      state: "closed",
    },
  },
);

// --- Static Styles ---

// Matches: linear-gradient(...) and box-shadow
const containerStyle = {
  background:
    "linear-gradient(135deg, rgba(227, 28, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 54.41%, rgba(215, 39, 194, 0.12) 100%), #FFFFFF",
  boxShadow: "2px 2px 4px rgba(115, 0, 169, 0.25)",
};

// Matches button specific styles
const chevronButtonStyle = {
  width: "34.42px",
  height: "34.42px",
  background: "#99008A",
  boxShadow:
    "0px 2px 6px rgba(74, 58, 255, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.12), inset 0px 1px 1.5px rgba(255, 255, 255, 0.25)",
};

const contentWrapperStyles =
  "text-[#4D525C] font-inter font-normal text-[14px] leading-[16px] text-justify pt-0 pb-4 md:px-8 px-4";

const categoryLabelStyles =
  "px-2 py-1 bg-[#EDE9FE] text-[#1A1A1A] text-xs font-semibold rounded-md w-fit mb-2 md:mb-0 md:mr-4";

// --- Component ---

function AccordionItem({
  className,
  title,
  categoryLabel,
  isOpen,
  onClick,
  children,
  ...props
}) {
  const state = isOpen ? "open" : "closed";

  return (
    <div
      className={cn(accordionContainerVariants({ state }), className)}
      style={{
        ...containerStyle,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
      {...props}
    >
      {/* Header / Trigger */}
      <div
        onClick={onClick}
        // Mobile Padding: 16px (p-4) | Desktop Padding: 16px 32px (md:px-8 md:py-4)
        className="flex items-start md:items-center justify-between p-4 md:px-8 md:py-4 cursor-pointer gap-4"
      >
        {/* Left Side: Title + Category */}
        <div className="flex flex-col md:flex-row md:items-center flex-grow">
          {categoryLabel && (
            <span className={cn(categoryLabelStyles)}>{categoryLabel}</span>
          )}
          <h3 className={cn(accordionTitleVariants())}>{title}</h3>
        </div>

        {/* Right Side: Chevron */}
        {/* The button itself has the purple style, the icon inside is white */}
        <div
          className={cn(accordionChevronVariants({ state }))}
          style={chevronButtonStyle}
        >
          <ChevronDown
            strokeWidth={3}
            className="w-[20px] h-[20px] text-white"
          />
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className={contentWrapperStyles}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export {
  AccordionItem,
  accordionContainerVariants,
  accordionTitleVariants,
  accordionChevronVariants,
};

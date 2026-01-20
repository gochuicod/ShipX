import { createContext, useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/util";

// Contexts
const AccordionContext = createContext(null);
const AccordionItemContext = createContext(null);

/**
 * Accordion - Root Container
 */
export const Accordion = ({ children, className, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggle = (id) => {
    const newOpen = new Set(allowMultiple ? openItems : []);
    if (openItems.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={className} style={{ fontFamily: "Inter, sans-serif" }}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * AccordionItem - Handles the Layout (Text Column | Icon Column)
 * Use this to group Title and Content together visually.
 */
export const AccordionItem = ({ value, children, className }) => {
  const { openItems, toggle } = useContext(AccordionContext);
  const isOpen = openItems.has(value);

  // 1. Container Styling (Border/Shadow)
  const containerClass = cn(
    "w-full transition-all duration-300 overflow-hidden rounded-lg border cursor-pointer group",
    isOpen
      ? "bg-white border-0 shadow-[2px_2px_4px_rgba(115,0,169,0.25)]"
      : "bg-[#F9FAFB] border-0 shadow-[2px_2px_4px_rgba(25,33,61,0.06)]",
    className,
  );

  const containerStyle = isOpen
    ? {
        background:
          "linear-gradient(135deg, rgba(227, 28, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 54.41%, rgba(215, 39, 194, 0.12) 100%), #FFFFFF",
      }
    : {};

  // 2. Chevron Styling
  const chevronClass = cn(
    "flex items-center justify-center rounded-full transition-all duration-300 shrink-0",
    isOpen ? "bg-[#99008A] text-white" : "bg-[#F3F4F6] text-[#1E2939]",
  );

  return (
    <AccordionItemContext.Provider value={{ isOpen, value }}>
      <div
        className={containerClass}
        style={containerStyle}
        onClick={() => toggle(value)}
      >
        {/* Main Flex Row: Padding is applied here for the whole card */}
        <div className="flex flex-row items-start justify-between p-4 md:px-8 md:py-4 gap-4">
          {/* Left Column: Title + Description Wrapper */}
          <div className="flex flex-col gap-2 grow">{children}</div>

          {/* Right Column: Chevron (Always Top Aligned) */}
          <div
            className={chevronClass}
            style={{ width: "34.42px", height: "34.42px" }}
          >
            <ChevronDown strokeWidth={2} className="w-[20.42px] h-[20.42px]" />
          </div>
        </div>
      </div>
    </AccordionItemContext.Provider>
  );
};

/**
 * AccordionTrigger - Just the Title Text
 * No longer handles the icon or layout.
 */
export const AccordionTrigger = ({ children, className }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className={cn(
        "font-inter text-base transition-colors duration-300 text-left leading-5",
        isOpen ? "text-[#99008A] font-bold" : "text-[#1E2939] font-normal",
        className,
      )}
      style={{ transitionProperty: "color, font-weight" }}
    >
      {children}
    </div>
  );
};

/**
 * AccordionContent - The Description Text
 * Collapsible animation logic.
 */
export const AccordionContent = ({ children, className }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        {/* Padding removed here to align with Title. Optional padding-top ensures spacing. */}
        <div
          className={cn(
            "pt-1 text-[#4D525C] font-inter font-normal text-sm leading-4 text-justify",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

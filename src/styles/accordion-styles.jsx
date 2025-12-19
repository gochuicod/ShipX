import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// ===========================================
// CVA VARIANT DEFINITIONS
// ===========================================

/**
 * Item Container Variants
 * Controls: background, border, shadow based on open/closed state
 */
export const itemVariants = cva(
  "w-full transition-all duration-300 overflow-hidden rounded-[8px] mb-4 border",
  {
    variants: {
      state: {
        closed:
          "bg-[#F9FAFB] border-0 shadow-[2px_2px_4px_rgba(25,33,61,0.06)]",
        open: "bg-white border-[#FFD6FA] shadow-[2px_2px_4px_rgba(115,0,169,0.25)]",
      },
    },
    defaultVariants: { state: "closed" },
  },
);

/**
 * Trigger Text Variants
 * Controls: text color based on open/closed state
 */
export const triggerTextVariants = cva(
  "font-normal text-left transition-colors",
  {
    variants: {
      state: {
        open: "text-[#99008A]",
        closed: "text-[#1E2939]",
      },
    },
    defaultVariants: { state: "closed" },
  },
);

/**
 * Chevron Button Variants
 * Controls: background, shadow, rotation based on state
 */
export const chevronButtonVariants = cva(
  "flex items-center justify-center rounded-full transition-transform duration-300 shrink-0",
  {
    variants: {
      state: {
        open: "bg-[#99008A] text-white shadow-[0px_2px_6px_rgba(74,58,255,0.1),inset_0px_-1px_1px_rgba(0,0,0,0.12),inset_0px_1px_1.5px_rgba(255,255,255,0.25)]",
        closed: "bg-[#F3F4F6] text-[#1E2939]",
      },
      isOpen: {
        true: "rotate-180",
        false: "rotate-0",
      },
    },
  },
);

// ===========================================
// STATIC STYLE OBJECTS
// ===========================================

/**
 * Gradient background applied to open accordion items
 */
export const containerOpenStyle = {
  background:
    "linear-gradient(135deg, rgba(227, 28, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 54.41%, rgba(215, 39, 194, 0.12) 100%), #FFFFFF",
};

/**
 * Fixed dimensions for chevron button container
 */
export const chevronButtonStyle = {
  width: "34.42px",
  height: "34.42px",
};

/**
 * Default font family applied to accordion root
 */
export const accordionFontStyle = {
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
};

/**
 * Content wrapper typography and spacing
 */
export const contentWrapperStyles =
  "text-[#4D525C] font-inter font-normal text-sm leading-[1.6] text-justify";

// ===========================================
// STYLED WRAPPER COMPONENTS
// ===========================================

/**
 * StyledItem - Accordion item container with state-based styling
 * Applies CVA variants and optional gradient overlay
 */
export const StyledItem = ({
  isOpen,
  className,
  style,
  onClick,
  children,
  ...props
}) => {
  const state = isOpen ? "open" : "closed";

  return (
    <div
      className={cn(itemVariants({ state }), className)}
      style={{
        ...style,
        ...(isOpen ? containerOpenStyle : {}),
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * StyledTrigger - Accordion trigger (header) with chevron button
 * Contains text content and animated chevron icon
 */
export const StyledTrigger = ({ isOpen, textContent, className, ...props }) => {
  const state = isOpen ? "open" : "closed";

  return (
    <div
      className={cn(
        "flex items-start md:items-center justify-between p-4 md:px-8 md:py-4 cursor-pointer gap-4",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          triggerTextVariants({ state }),
          "grow font-inter text-base md:text-lg",
        )}
      >
        {textContent}
      </div>

      <div
        className={cn(chevronButtonVariants({ state, isOpen }))}
        style={chevronButtonStyle}
      >
        <ChevronDown
          strokeWidth={2}
          className="w-[20.42px] h-[20.42px] text-current"
        />
      </div>
    </div>
  );
};

/**
 * StyledContent - Accordion content area with grid-based collapse animation
 * Handles open/closed state transitions
 */
export const StyledContent = ({ isOpen, className, children, ...props }) => {
  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "pt-0 pb-4 px-4 md:px-8",
            contentWrapperStyles,
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

import { cva } from "class-variance-authority";

// 1. New: The Outer Gradient Wrapper
export const searchBarOuterVariants = cva(
  "flex flex-col justify-center items-start transition-all w-full",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,rgba(255,230,255,0.05)_0%,rgba(170,0,255,0.15)_100%)] rounded-2xl",
        minimal: "bg-transparent",
      },
      size: {
        sm: "p-3 gap-2",
        default: "p-[16px] gap-[8px]", // Figma: padding 16px, gap 8px
        lg: "p-5 gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 2. Updated: The Inner White Input Box
export const searchBarVariants = cva(
  "flex flex-row items-center bg-white transition-all w-full box-border",
  {
    variants: {
      variant: {
        default: "border-b border-[#7F22FE] rounded-lg shadow-sm", // Figma: border-bottom purple
        minimal: "border border-gray-200 rounded-lg",
      },
      size: {
        sm: "h-[40px] p-1 gap-2",
        default: "h-[57px] p-[4px] gap-[8px]", // Figma: height ~57px, padding 4px
        lg: "h-[64px] p-2 gap-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const searchInputVariants = cva(
  "grow w-full bg-transparent focus:outline-none transition-colors font-inter",
  {
    variants: {
      size: {
        sm: "text-sm placeholder:text-sm",
        default: "text-[16px] placeholder:text-[16px] leading-[20px]", // Figma: 16px Inter
        lg: "text-lg placeholder:text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// 3. Updated: The Purple Submit Button
export const searchButtonVariants = cva(
  "shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300",
  {
    variants: {
      type: {
        clear: "hover:opacity-60 text-[#99A1AF] p-2",
        submit:
          // Figma: Complex gradient + Specific Shadow
          "bg-[linear-gradient(103.43deg,rgba(255,0,230,0)_9.78%,rgba(255,0,229,0.75)_84.11%),#4F378A] shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_-2px_-2px_4px_#9A00AE,inset_0px_0px_4px_rgba(255,88,238,0.6)] text-white font-medium hover:brightness-110 active:scale-95",
      },
      size: {
        sm: "h-[32px] px-3 rounded-md",
        default: "h-[48px] px-4 rounded-lg min-w-[85px]", // Figma: height ~48px, width 85px
        lg: "h-[56px] px-6 rounded-lg",
      },
    },
    defaultVariants: {
      type: "submit",
      size: "default",
    },
  }
);
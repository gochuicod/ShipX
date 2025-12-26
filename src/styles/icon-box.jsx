import { cva } from "class-variance-authority";

const iconBoxVariants = cva(
  "flex p-6 rounded-2xl bg-[#F9FAFB] shadow-[inset_0px_4px_4px_rgba(255,255,255,0.25)] border border-transparent transition-all",
  {
    variants: {
      size: {
        default: "w-full h-auto",
        wide: "w-[395px]", // From CSS block 1
        compact: "w-[348px]", // From CSS block 2
        standard: "w-[376px]", // From CSS block 3
      },
      layout: {
        default: "flex-col items-start",
        horizontal: "flex-row items-center gap-4",
      },
    },
    defaultVariants: {
      size: "default",
      layout: "default",
    },
  },
);

// 2. Inner Layout & Typography Styling
const contentStyles = {
  wrapper: "flex flex-row items-start gap-4 w-full",

  // Icon Container: 48x48, Gradient, Rounded 8px
  iconContainer:
    "flex justify-center items-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#F3E8FF] to-[#FAE8FF] shrink-0",

  // Text Column: gap 4px
  textStack: "flex flex-col items-start gap-1",

  // Label: Inter, 600, 14px, #1E2939
  label: "font-sans font-semibold text-sm text-[#1E2939] leading-[18px]",

  // Value: Inter, 500, 16px, #4F378A
  value: "font-sans font-medium text-base text-[#4F378A] leading-[20px]",

  // Helper: Inter, 400, 14px, #6A7282
  helper: "font-sans font-normal text-sm text-[#6A7282] leading-[16px]",
};

export { iconBoxVariants, contentStyles };

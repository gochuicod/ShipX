import { cva } from "class-variance-authority";

// 1. Input & Textarea Styles
const inputVariants = cva(
  // Base styles
  [
    "w-full px-[16px] py-[8px]",
    "bg-white rounded-[8px] border-b",
    "font-inter font-normal text-[16px] text-[#1E2939]",
    "placeholder:font-inter placeholder:italic placeholder:font-normal placeholder:text-[16px]",
    "focus:outline-none transition-colors",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-[#7F22FE] placeholder-[#99A1AF]",
        error: "border-red-500 placeholder-red-400",
      },
      resize: {
        none: "resize-none",
        default: "",
      },
    },
    defaultVariants: {
      state: "default",
      resize: "default",
    },
  },
);

// 2. Label Styles
const labelVariants = cva(
  "font-inter font-semibold text-[16px] leading-[20px] text-[#1E2939] flex items-center gap-[5px]",
);

// 3. Container Styles
const inputGroupVariants = cva("flex flex-col gap-[8px] flex-grow w-full");

export { inputVariants, labelVariants, inputGroupVariants };

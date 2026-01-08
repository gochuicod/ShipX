import { cva } from "class-variance-authority";

// 1. Input & Textarea Styles
const inputVariants = cva(
  // Base styles
  [
    "w-full px-[16px] py-[8px]",
    "bg-white rounded-[8px] border-b",
    "font-inter font-normal text-[16px] text-[#1E2939]",
    "placeholder:font-inter placeholder:italic placeholder:font-normal placeholder:text-[16px] placeholder-[#99A1AF] ",
    "focus:outline-none focus:ring-1 focus:ring-[#7F22FE]/20 transition-colors",
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

// 1b. Select Dropdown Styles
const selectVariants = cva(
  [
    "w-full px-[16px] py-[8px] pr-[40px]",
    "bg-white rounded-[8px] border-b",
    "font-inter font-normal text-[16px] text-[#1E2939]",
    "placeholder:font-inter placeholder:italic placeholder:font-normal placeholder:text-[16px]",
    "focus:outline-none focus:ring-1 focus:ring-[#7F22FE]/20 transition-colors",
    "appearance-none cursor-pointer",
    "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%231E2939%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')]",
    "bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-[#7F22FE]",
        error: "border-red-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

// 2. Label Styles
const labelVariants = cva(
  "font-inter font-semibold text-[16px] leading-[20px] text-[#1E2939] flex items-center gap-[5px]",
);

// 3. Container Styles
const inputGroupVariants = cva("flex flex-col gap-[8px] flex-grow w-full");

// 4. Claims Form Label Styles
const claimsLabelVariants = cva(
  "text-[#1E2939] font-semibold text-[16px] leading-[20px] mb-2 block",
);

// 5. Claims Form Input Styles
const claimsInputVariants = cva(
  [
    "w-full bg-white border-b border-[#7F22FE] rounded-lg px-4 py-2",
    "text-[16px] text-[#1E2939] placeholder:italic placeholder-[#99A1AF]",
    "focus:outline-none focus:ring-2 focus:ring-[#7F22FE]/20 transition-all",
    "h-[36px]",
  ].join(" "),
);

// 5b. Claims Form Select Styles
const claimsSelectVariants = cva(
  [
    "w-full bg-white border-b border-[#7F22FE] rounded-lg px-4 py-2",
    "text-base text-[#1E2939] itallic placeholder-[#99A1AF]",
    "focus:outline-none focus:ring-2 focus:ring-[#7F22FE]/20 transition-all",
    "h-[36px] appearance-none cursor-pointer",
  ].join(" "),
);

// 6. Claims Form Input Container Styles
const claimsInputContainerVariants = cva("relative w-full");

// 7. Claims Form Card Styles
const claimsCardVariants = cva(
  [
    "flex flex-col p-4 gap-4 w-full rounded-2xl",
    "bg-gradient-to-br from-[#FFE6FF]/5 to-[#AA00FF]/5",
    "border border-white/50 shadow-sm",
  ].join(" "),
);

// 8. Claims Form Header Styles
const claimsHeaderVariants = cva("flex flex-col gap-2 mb-2");

// 9. Claims Form Header Title Styles
const claimsHeaderTitleVariants = cva(
  "text-[#FF00E5] font-bold text-[20px] leading-[24px]",
);

// 10. Claims Form Header Description Styles
const claimsHeaderDescriptionVariants = cva(
  "text-[#4D525C] text-[14px] leading-[16px]",
);

// 11. Claims Form Header Icon Container
const claimsHeaderIconContainerVariants = cva("flex items-center gap-2");

// 12. Claims Form Tab Switch Styles
const claimsTabSwitchVariants = cva(
  [
    "flex items-center p-2 gap-2 bg-transparent rounded-lg",
    "shadow-[inset_1px_1px_2px_rgba(20,0,99,0.45)] h-[52px]",
  ].join(" "),
);

// 13. Claims Form Tab Button Styles
const claimsTabButtonVariants = cva(
  [
    "flex-1 h-[36px] rounded-lg flex items-center justify-center gap-2",
    "text-[16px] font-normal transition-all duration-300 cursor-pointer",
  ].join(" "),
  {
    variants: {
      isActive: {
        true: [
          "bg-[#CC00B7] text-white font-semibold",
          "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55)]",
        ].join(" "),
        false: "text-[#1E2939] hover:bg-black/5",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

// 14. Claims Form Submit Button Styles
const claimsSubmitButtonVariants = cva(
  [
    "flex items-center justify-center px-4 py-2 gap-2",
    "h-[36px] rounded-lg text-white font-medium text-[16px]",
    "shadow-[1px_1px_2px_rgba(20,0,99,0.25),inset_-2px_-2px_4px_#9A00AE,inset_0px_0px_4px_rgba(255,88,238,0.6)]",
    "bg-[linear-gradient(103.43deg,rgba(255,0,230,0)_9.78%,rgba(255,0,229,0.75)_84.11%),#4F378A]",
    "hover:opacity-90 transition-opacity disabled:opacity-70",
  ].join(" "),
);

export {
  inputVariants,
  selectVariants,
  labelVariants,
  inputGroupVariants,
  claimsLabelVariants,
  claimsInputVariants,
  claimsSelectVariants,
  claimsInputContainerVariants,
  claimsCardVariants,
  claimsHeaderVariants,
  claimsHeaderTitleVariants,
  claimsHeaderDescriptionVariants,
  claimsHeaderIconContainerVariants,
  claimsTabSwitchVariants,
  claimsTabButtonVariants,
  claimsSubmitButtonVariants,
};

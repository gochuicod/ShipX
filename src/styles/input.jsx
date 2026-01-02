import { cn } from "../lib/util";
import { forwardRef } from "react";

// Wrap with forwardRef so react-hook-form can attach its ref
const Input = forwardRef(
  (
    { className, multiline = false, disableFocusRing = false, ...props },
    ref,
  ) => {
    const baseClasses = cn(
      "rounded-lg border-b border-[#7F22FE] bg-white placeholder:text-[#99A1AF] italic font-normal text-[#99A1AF] px-4 py-2.5 outline-none transition-all",
      !disableFocusRing && "focus:ring-1 focus:ring-[#7F22FE]/20",
    );

    if (multiline) {
      return (
        <textarea
          ref={ref}
          className={cn(baseClasses, "resize-none h-[110px] w-full", className)}
          {...props}
        />
      );
    }

    return (
      <input
        ref={ref}
        className={cn(baseClasses, "h-[55px] w-full", className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };

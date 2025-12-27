import { cn } from "../lib/util";

function Input({ className, multiline = false, ...props }) {
  const baseClasses =
    "rounded-lg border-b border-[#7F22FE] bg-white placeholder:text-[#99A1AF] italic font-normal text-[#99A1AF] px-4 py-2.5";

  if (multiline) {
    return (
      <textarea
        className={cn(baseClasses, "resize-none h-[110px] w-full")}
        {...props}
      />
    );
  }

  return <input className={cn(baseClasses, "h-[55px] w-full")} {...props} />;
}

export { Input };

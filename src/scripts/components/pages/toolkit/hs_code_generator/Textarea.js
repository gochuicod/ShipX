import { cn } from "../../../../utils";

const Textarea = ({ id, placeholder, error, className, ...props }, ref) => {
  return (
    <textarea
      id={id}
      ref={ref}
      className={cn(
        "w-full border md:mt-0 mt-[1.5vw] md:rounded-[0.7vw] rounded-[2vw]",
        "md:px-[1vw] px-[2vw] md:py-[0.5vw] py-[1.5vw] resize-none focus:outline-none",
        "italic focus:not-italic md:h-[3.5vw] h-[10vw] md:text-[0.7vw] text-[2vw]",
        "text-[#99A1AF] focus:text-[#4A5565]/80",
        error
          ? "border-red-500 focus:border-red-500"
          : "border-[#B9AFD0] focus:border-blue-500",
        className,
      )}
      placeholder={error ? error.message : placeholder}
      {...props}
    />
  );
};

export default React.forwardRef(Textarea);

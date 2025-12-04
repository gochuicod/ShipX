import { cn } from "../../utils";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%",
        "bg-size-[200%_100%] bg-position-[0%_0%] hover:bg-position-[100%_0%]",
        "transition-[background-position] duration-1000 ease-in-out",
        "md:py-[0.5vw] py-[1.4vw] md:px-[1.5vw] px-[3vw]",
        "md:rounded-[2vw] rounded-full cursor-pointer",
        "text-white md:font-medium font-normal",
        "md:text-[0.8vw] text-[2.4vw]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      style={{ fontFamily: "Karla, system-ui, -apple-system, sans-serif" }}
    >
      {children}
    </button>
  );
};

export default Button;

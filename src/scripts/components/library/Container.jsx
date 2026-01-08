import { themeGuide } from "../../../styles/themeGuide";
import { cn } from "../../../lib/util";

export default function Container({ className, children, rest }) {
  return (
    <div
      className={cn(
        themeGuide.paddingX,
        "max-w-[1440px]",
        "lg:mx-auto",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

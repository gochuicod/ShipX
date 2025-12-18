import { cn } from "../../../lib/util";

const descriptionStyles = {
  paragraph: "text-lg leading-[24px] text-[#757577] font-normal",
};

export default function Description({ children, className }) {
  return (
    <p className={cn(className, descriptionStyles.paragraph)}>{children}</p>
  );
}

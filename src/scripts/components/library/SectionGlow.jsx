import { cn } from "../../../lib/util";

export default function SectionGlow({ color = "#FF00E5", className }) {
  return (
    <div
      className={cn(
        "absolute w-[383.99px] h-[383.99px] opacity-20 blur-[64px] rounded-full pointer-events-none z-0",
        className,
      )}
      style={{ backgroundColor: color }}
    />
  );
}

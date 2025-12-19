import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

const buttonVariants = cva(
  [
    // Layout & Flexbox
    "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",

    // Typography & Appearance
    "rounded-md text-base font-normal",

    // Transitions & Base Interaction
    "transition-all outline-none",

    // Focus States
    "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring",

    // Disabled States
    "disabled:pointer-events-none disabled:opacity-50",

    // Validation / Error States
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",

    // Child Element Overrides (SVG icons)
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-foreground hover:bg-violet-300/70",
        tabActive: "bg-primary/90 text-primary-foreground hover:bg-primary",
        tabDefault: "bg-background text-foreground hover:bg-gray-200",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        primary: [
          // Layout & Shape
          "flex flex-row justify-center items-center px-4 py-2 gap-1 rounded-[8px] transition-all duration-300 cursor-pointer",
          "h-[40px]",

          // Typography
          "font-['Inter'] font-normal text-[16px] text-white",

          // DEFAULT STATE
          "bg-[linear-gradient(103.43deg,#4F378A_9.78%,#CC00B7_84.11%)]",
          "shadow-[2px_2px_4px_rgba(20,0,99,0.3),inset_2px_2px_3px_rgba(255,255,255,0.4)]",

          // HOVER STATE
          "hover:bg-[linear-gradient(103.43deg,#6D4CBF_9.78%,#E000CA_84.11%)]",
          "hover:shadow-[0px_0px_12px_rgba(255,0,229,0.5),inset_2px_2px_3px_rgba(255,255,255,0.5)]",
          "hover:scale-[1.01]",

          // EXACT ACTIVE STATE (Uniform Gradient Fix)
          "active:scale-[0.98]",
          "active:font-bold",
          // We use a "flat" gradient of the same color to keep the background-image property occupied
          "active:bg-[linear-gradient(103.43deg,#CC00B7_0%,#CC00B7_100%)]",
          // Complex Shadow Stack from Figma
          "active:shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]",
        ].join(" "),
        secondary: [
          "bg-white hover:bg-secondary-hover active:bg-secondary-active",
          "h-[40px]",
          "border border-violet-300 active:border-secondary-active",
          "text-primary text-base active:text-white cursor-pointer font-normal",
          "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]",
        ].join(" "),
        tertiary: [
          "bg-white hover:bg-secondary-hover active:bg-secondary-active cursor-pointer p-0",
          "h-[40px]",
          "text-primary text-base active:text-white cursor-pointer font-normal",
          "shadow-[1px_1px_4px_rgba(20,0,99,0.3),inset_-1px_-1px_1px_rgba(154,4,129,0.15)]",
        ].join(" "),
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        tabActive: [
          "bg-[#CC00B7]",
          "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]",
          "text-white font-medium",
        ].join(" "),
        tabInactive: [
          "bg-transparent text-white/90 font-normal hover:bg-white/5",
        ].join(" "),
        // This matches your secondary code snippet for "HS Code Generator" style (bordered active state)
        tabBorderedActive: [
          "bg-[rgba(204,0,183,0.2)] border border-[#FF00E5]",
          "shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]",
        ].join(" "),
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        tab: "h-full px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      {...props}
    />
  );
}

export { Button, buttonVariants };

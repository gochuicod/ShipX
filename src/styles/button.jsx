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
          "cursor-pointer font-normal text-white",
          "bg-gradient-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5]",
          "bg-size-[200%_100%] bg-position-[0%_0%]",
          "hover:bg-position-[100%_0%]",
          "transition-[background-position] duration-1000 ease-in-out",
          "active:scale-90",
        ].join(" "),
        secondary: [
          "bg-white hover:bg-secondary-hover active:bg-secondary-active",
          "border border-violet-300 active:border-secondary-active",
          "text-primary text-base active:text-white cursor-pointer font-normal",
          "shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)]",
        ].join(" "),
        tertiary: [
          "bg-white hover:bg-secondary-hover active:bg-secondary-active",
          "text-primary text-base active:text-white cursor-pointer font-normal",
          "shadow-[1px_1px_4px_rgba(20,0,99,0.3),inset_-1px_-1px_1px_rgba(154,4,129,0.15)]",
        ].join(" "),
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
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

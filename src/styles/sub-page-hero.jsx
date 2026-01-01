import { cva } from "class-variance-authority";

export const heroVariants = cva(
  // Base styles applied to all variants
  "relative w-full bg-[#F7F7F7] overflow-hidden",
  {
    variants: {
      // Variant: Controls the height/size of the hero section
      size: {
        default: "h-[242px] md:h-[314px] xl:h-[350px]", // Responsive sizing from Figma
        sm: "h-[200px]",
        lg: "h-[450px]",
        toolsHeroMobile: "h-fit md:h-[450px]",
        fullscreen: "h-screen",
      },
      // Variant: Controls how the image is positioned
      align: {
        center: "object-center",
        top: "object-top",
        bottom: "object-bottom",
      },
    },
    defaultVariants: {
      size: "default",
      align: "center",
    },
  },
);

import { cva } from "class-variance-authority";
import { cn } from "../lib/util";

// Desktop Card (Column layout)
const cardDesktopVariants = cva(
  "group flex flex-col items-center p-4 gap-4 w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 active:scale-90",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
        section:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
        fluid:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Mobile Card (Row layout)
const cardMobileVariants = cva(
  "group flex flex-row items-start p-4 gap-4 w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 active:scale-90",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
        section:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
        fluid:
          "bg-gradient-to-br from-[oklch(0.7_0.1_316)]/20 via-[oklch(1_0_0)]/6 to-[oklch(0.6167_0.2539_333.97)]/24 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const CardRoot = ({ className, variant, isMobile, ...props }) => {
  const variants = isMobile ? cardMobileVariants : cardDesktopVariants;
  return (
    <article
      className={cn(variants({ variant }), className)}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      {...props}
    />
  );
};

// --- 2. Image Components ---
export const CardImageWrapper = ({ className, ...props }) => (
  <div
    className={cn(
      "relative rounded-2xl w-full h-full overflow-hidden",
      className,
    )}
    {...props}
  />
);

export const CardImage = ({ className, ...props }) => (
  <img
    className={cn("w-full h-full min-h-[160px] object-cover", className)}
    loading="lazy"
    {...props}
  />
);

// --- 3. Badge (Specific to Blog Card) ---
const cardBadgeVariants = cva(
  "absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-sm z-10 flex items-center justify-center",
  {
    variants: {
      variant: {
        new: "bg-[#FF00E5] text-white",
        default: "bg-gray-100 text-gray-800",
      },
    },
    defaultVariants: {
      variant: "new",
    },
  },
);

export const CardBadge = ({ className, variant, ...props }) => (
  <span className={cn(cardBadgeVariants({ variant }), className)} {...props} />
);

// --- 4. Content Wrappers ---
export const CardBody = ({ className, ...props }) => (
  <div
    className={cn("flex flex-col justify-center gap-4 w-full", className)}
    {...props}
  />
);

export const CardMetaRow = ({ className, ...props }) => (
  <div
    className={cn(
      "hidden md:flex flex-row justify-between items-center w-full gap-2",
      className,
    )}
    {...props}
  />
);

// --- 5. Category Tag ---
const categoryVariants = cva(
  "px-3 py-1 rounded-lg text-[10px] md:text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-[#F8E3F5] text-[#99008A]", // Your specific purple/pink combo
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const CardCategory = ({ className, variant, ...props }) => (
  <span className={cn(categoryVariants({ variant }), className)} {...props} />
);

// --- 6. Typography ---
export const CardDate = ({ className, ...props }) => (
  <span
    className={cn("text-gray-600 text-sm font-normal", className)}
    {...props}
  />
);

export const CardTitle = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-base font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-[#CC00B7] transition-colors",
      className,
    )}
    {...props}
  />
);

export const CardExcerpt = ({ className, ...props }) => (
  <p
    className={cn(
      "text-gray-600 text-sm font-normal leading-relaxed line-clamp-3",
      className,
    )}
    {...props}
  />
);

// --- 7. Footer & Actions ---
export const CardFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-row justify-between items-center w-full gap-2",
      className,
    )}
    {...props}
  />
);

export const CardReadMore = ({ className, ...props }) => (
  <span
    className={cn(
      "flex items-center gap-1 text-[#CC00B7] font-normal text-sm hover:opacity-80 transition-opacity",
      className,
    )}
    {...props}
  />
);

export const CardShareButton = ({ className, ...props }) => (
  <button
    className={cn(
      "text-[#CC00B7] hover:opacity-80 p-1 rounded transition-opacity",
      className,
    )}
    {...props}
  />
);

// --- 8. Image Container (for Blog Card specific layout) ---
export const CardImageContainer = ({ className, onClick, ...props }) => (
  <div
    onClick={onClick}
    className={cn("cursor-pointer relative w-full h-full", className)}
    {...props}
  />
);

// --- 9. Mobile Actions Row ---
export const CardMobileActionsRow = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-row justify-between items-center w-full gap-2",
      className,
    )}
    {...props}
  />
);

// --- 10. Mobile Read More Link ---
export const CardMobileReadMore = ({ className, onClick, ...props }) => (
  <span
    onClick={onClick}
    className={cn(
      "text-[#CC00B7] text-sm font-normal flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity",
      className,
    )}
    {...props}
  />
);

// --- 11. Share Menu Dropdown ---
export const ShareMenuDropdown = ({ className, ...props }) => (
  <div
    className={cn(
      "absolute bottom-8 right-0 md:bottom-12 bg-white shadow-xl border border-gray-100 rounded-xl p-2 flex flex-col gap-1 min-w-40 z-50 text-left",
      className,
    )}
    {...props}
  />
);

// --- 12. Share Menu Button ---
const shareMenuButtonVariants = cva(
  "flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg text-sm text-gray-700 w-full text-left",
  {
    variants: {
      platform: {
        facebook: "text-blue-600",
        twitter: "text-black",
        linkedin: "text-blue-700",
        whatsapp: "text-green-500",
        copy: "text-gray-700",
      },
    },
    defaultVariants: {
      platform: "facebook",
    },
  },
);

export const ShareMenuButton = ({ className, platform, ...props }) => (
  <button
    className={cn(shareMenuButtonVariants({ platform }), className)}
    {...props}
  />
);

// --- 13. Share Menu Divider ---
export const ShareMenuDivider = ({ className, ...props }) => (
  <div className={cn("h-px bg-gray-100 my-1", className)} {...props} />
);

// --- 14. Toast Notification ---
const toastVariants = cva(
  "fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-3 rounded-xl shadow-2xl transition-all duration-300 ease-in-out",
  {
    variants: {
      visible: {
        true: "opacity-100 translate-y-0",
        false: "opacity-0 translate-y-4 pointer-events-none",
      },
      icon: {
        success: "bg-green-600",
        error: "bg-gray-900",
        info: "bg-gray-900",
      },
    },
    defaultVariants: {
      visible: false,
      icon: "error",
    },
  },
);

export const Toast = ({ className, visible, icon, ...props }) => (
  <div className={cn(toastVariants({ visible, icon }), className)} {...props} />
);

// --- 15. Mobile Date Display ---
export const CardMobileDate = ({ className, ...props }) => (
  <p
    className={cn("text-sm text-gray-600 font-normal", className)}
    {...props}
  />
);

// --- 16. Share Menu Wrapper ---
export const ShareMenuWrapper = ({ className, ...props }) => (
  <div className={cn("relative", className)} {...props} />
);

// --- 17. Share Icon Button (Mobile & Desktop) ---
export const ShareIconButton = ({ className, ...props }) => (
  <button className={cn("p-1", className)} {...props} />
);

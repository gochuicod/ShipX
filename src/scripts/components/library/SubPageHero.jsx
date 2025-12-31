import { cn } from "../../../lib/util";
import { heroVariants } from "../../../styles/sub-page-hero"; // Import styling definition

const SubPageHero = ({
  src,
  alt = "Hero image",
  size,
  align,
  className,
  children,
  ...props
}) => {
  // 1. Calculate container styles based on variants
  const containerClasses = cn(heroVariants({ size }), className);

  // 2. Determine image alignment class manually since it applies to the <img> tag, not the container
  //    (Alternatively, you could split the CVA into containerVariants and imageVariants if preferred)
  const imageAlignment =
    align === "top"
      ? "object-top"
      : align === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <div className={containerClasses} {...props}>
      {/* Background Image */}
      {src && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            imageAlignment,
          )}
          loading="eager"
        />
      )}

      {/* Optional Overlay Content */}
      {children && (
        <div className="relative z-10 w-full h-full">{children}</div>
      )}
    </div>
  );
};

export default SubPageHero;

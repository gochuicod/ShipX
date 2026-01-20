import { cn } from "../../../lib/util";
import { Badge } from "../../../styles/badge";
import AppButton from "./AppButton";
import HighlightedHeading from "./HighlightedHeading";

export default function MobileAffiliateCard({
  variant = "default",
  logo,
  illustration,
  heading,
  headingHighlight,
  subheading,
  badges = [],
  badgeVariant = "affiliate",
  actions = [],
  className,
  style,
  ...props
}) {
  const variantStyles = {
    default:
      "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/20 to-[oklch(0.8001_0.1751_322.55)]/20",
    amilo:
      "bg-gradient-to-br from-[oklch(0.9524_0.0425_325.9)]/20 to-[oklch(0.7284_0.1708_59.45)]/20",
  };

  return (
    <div
      className={cn(
        "relative w-full h-[535px] flex flex-col items-center overflow-visible mt-40",
        className,
      )}
      style={style}
      {...props}
    >
      {/* Illustration - Absolutely positioned to overflow top */}
      {illustration && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-24 z-30 pointer-events-none overflow-visible aspect-square">
          <img
            src={illustration.src}
            alt={illustration.alt || "Illustration"}
            className="w-auto h-auto object-contain"
          />
        </div>
      )}

      {/* Card Container */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 w-full flex flex-col items-center rounded-2xl shadow-sm overflow-hidden",
          "pt-20 px-4 pb-10 gap-7",
          variantStyles[variant],
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="flex justify-center z-20">
            <img
              src={logo.src}
              alt={logo.alt || "Logo"}
              className={logo.className || "h-10"}
            />
          </div>
        )}

        {/* Content Section */}
        <div className="relative z-20 flex flex-col gap-4 items-center w-full text-center">
          {/* Heading */}
          {headingHighlight ? (
            <HighlightedHeading
              text={heading}
              highlight={headingHighlight}
              className="text-xl font-bold leading-tight"
            />
          ) : (
            <h2 className="text-xl font-bold text-slate-900 leading-tight">
              {heading}
            </h2>
          )}

          {/* Subheading */}
          <p className="text-slate-600 text-base font-normal leading-relaxed">
            {subheading}
          </p>

          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-col gap-1 w-full">
              <p className="text-sm font-medium text-slate-900">Specialties:</p>
              <div className="flex flex-wrap justify-center gap-1">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant={badgeVariant}
                    size="sm"
                    className="px-2 py-1 text-xs"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Actions */}
        {actions && actions.length > 0 && (
          <div className="flex flex-row justify-center items-center gap-4 w-full relative z-20">
            {actions.map((action, index) => (
              <AppButton
                key={index}
                style={action.style || "primary"}
                text={action.text}
                onClick={action.onClick}
                className={cn(
                  action.className,
                  action.style === "primary" && "w-fit",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

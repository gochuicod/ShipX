import { cn } from "../../../lib/util";

const highlightedHeadingStyles = {
  h1: "text-4xl font-bold text-dark-neutral",
};

export default function HighlightedHeading({
  text,
  highlight, // string or array
  className,
  highlightClass,
  disableNewlines = false,
}) {
  if (!text) return null;

  // Convert literal "\\n" strings
  const formattedText = disableNewlines
    ? text.replace(/\\n/g, " ")
    : text.replace(/\\n/g, "\n");

  // Prepare highlights
  const highlightList = Array.isArray(highlight)
    ? highlight
    : highlight
      ? [highlight]
      : [];

  // Build regex parts
  const patternParts = [
    ...highlightList.map((h) => h.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")),
    !disableNewlines ? "\\n" : null,
  ].filter(Boolean);

  const regex = new RegExp(`(${patternParts.join("|")})`, "gi");

  const parts = formattedText.split(regex);

  return (
    <h1 className={cn(highlightedHeadingStyles.h1, className)}>
      {parts.map((part, i) => {
        // Handle Newlines only if enabled
        if (!disableNewlines && part === "\n") {
          return <br key={i} />;
        }

        const isHighlight = highlightList.some(
          (h) => h.toLowerCase() === part.toLowerCase(),
        );

        return (
          <span
            key={i}
            className={cn(
              isHighlight ? `text-[#FF00E5] ${highlightClass || ""}` : "",
            )}
          >
            {part}
          </span>
        );
      })}
    </h1>
  );
}

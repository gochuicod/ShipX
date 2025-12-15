import { cn } from "../../../lib/util";

export default function HighlightedHeading({
  text, // The full sentence: "Seamless Entry to the US E-Commerce Ecosystem"
  highlight, // The part to color: "US E-Commerce"
  className, // Extra styles for the container
  highlightClass, // Extra styles for the highlighted part
}) {
  if (!highlight) {
    return (
      <h1 className={cn("text-4xl font-bold text-dark-neutral", className)}>
        {text}
      </h1>
    );
  }

  // Split the text by the highlight phrase, case-insensitive
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <h1 className={cn("text-4xl font-bold text-dark-neutral", className)}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={cn(
            part.toLowerCase() === highlight.toLowerCase()
              ? `text-[#FF00E5] ${highlightClass || ""}` // Apply pink color to match
              : "",
          )}
        >
          {part}
        </span>
      ))}
    </h1>
  );
}

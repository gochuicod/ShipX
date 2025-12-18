import { cn } from "../../../lib/util";

const highlightedHeadingStyles = {
  h1: "text-4xl font-bold text-dark-neutral",
};

export default function HighlightedHeading({
  text,
  highlight,
  className,
  highlightClass,
}) {
  if (!text) return null;

  // FIX: Convert literal "\\n" strings into actual newline characters
  const formattedText = text.replace(/\\n/g, "\n");

  // Split by the highlight word OR the newline character
  const regex = highlight
    ? new RegExp(`(${highlight}|\\n)`, "gi")
    : new RegExp("(\\n)", "g");

  const parts = formattedText.split(regex);

  return (
    <h1 className={cn(highlightedHeadingStyles.h1, className)}>
      {parts.map((part, i) => {
        // If the part is exactly a newline, render a break
        if (part === "\n") {
          return <br key={i} />;
        }

        const isHighlight =
          highlight && part.toLowerCase() === highlight.toLowerCase();

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

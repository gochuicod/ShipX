import { cn } from "../../../lib/util";

const highlightedHeadingStyles = {
  h1: "text-4xl font-bold text-dark-neutral",
};

export default function HighlightedHeading({
  text,
  highlight, // Can be a string "Word" or an array ["Word1", "Word2"]
  className,
  highlightClass,
}) {
  if (!text) return null;

  // Convert literal "\\n" strings into actual newline characters
  const formattedText = text.replace(/\\n/g, "\n");

  // Prepare highlights: Convert single string to array and escape for Regex safety
  const highlightList = Array.isArray(highlight)
    ? highlight
    : highlight
      ? [highlight]
      : [];

  // Create a regex group for all highlight words + the newline character
  // Resulting regex looks like: /(Word1|Word2|\n)/gi
  const patternParts = [
    ...highlightList.map((h) => h.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")),
    "\\n",
  ];
  const regex = new RegExp(`(${patternParts.join("|")})`, "gi");

  const parts = formattedText.split(regex);

  return (
    <h1 className={cn(highlightedHeadingStyles.h1, className)}>
      {parts.map((part, i) => {
        // Handle Newlines
        if (part === "\n") {
          return <br key={i} />;
        }

        // Check if the current part matches any word in our highlight list (case-insensitive)
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

import { cn } from "../../../lib/util";

export default function Pagination({
  totalSlides = 0,
  currentSlide = 0,
  onSlideChange = () => {},
}) {
  if (totalSlides <= 1) return null;

  return (
    <div
      className="flex flex-row items-center gap-2"
      style={{
        width: "76px",
        height: "15px",
      }}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={cn(
            "rounded-full cursor-pointer transition-all duration-500 ease-in-out",
            currentSlide === index
              ? "w-[30px] h-[15px] bg-[#FF00E5]"
              : "w-[15px] h-[15px] border-2 border-[#FF00E5]",
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

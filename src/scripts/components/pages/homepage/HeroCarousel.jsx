import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../library/AppButton";
import Description from "../../library/Description";
import Container from "../../library/Container";

export default function HeroCarousel({
  slides = [],
  autoPlay = false,
  autoPlayInterval = 7000,
}) {
  const [current, setCurrent] = useState(0);

  // Navigation Handlers
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play Logic
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [current, autoPlay, autoPlayInterval]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[current];

  // 1. Define Defaults (Used for background positioning/sizing)
  const defaultBgClasses = `
    2xl:bg-size-[1524px_785px]
    md:bg-size-[1198px_617px]
    bg-size-[776px_400px]
    2xl:bg-position-[calc(50vw-320px)_100%]
    bg-position-[bottom_center]
  `;

  return (
    <section
      className={cn(
        "relative w-full flex items-center overflow-hidden bg-white transition-all duration-300 ease-in-out",
      )}
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* BACKGROUND LAYERS
        We render a background div for EACH slide and animate opacity.
        This allows for the smooth cross-fade effect requested.
      */}
      {slides.map((slide, index) => {
        const isCurrent = index === current;
        // Determine classes for this specific slide
        const bgClasses =
          slide.bgClassName !== undefined
            ? slide.bgClassName
            : defaultBgClasses;

        return (
          <div
            key={slide.id || index}
            className={cn(
              "absolute inset-0 w-full h-full bg-no-repeat pointer-events-none transition-opacity duration-700 ease-in-out",
              bgClasses,
              isCurrent ? "opacity-100 z-0" : "opacity-0 z-0",
            )}
            style={{
              backgroundImage: `url('${slide.image}')`,
              ...slide.bgStyle,
            }}
          />
        );
      })}

      <Container className="relative z-10 flex justify-start w-full">
        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/50 hover:bg-white transition-colors hidden"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/50 hover:bg-white transition-colors hidden"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Content Wrapper */}
        <div
          key={activeSlide.id}
          className={cn(
            "grid gap-12",
            "xl:min-h-[664px] md:min-h-[662px] min-h-[652px]",
            "2xl:items-center items-start pt-8",
            "animate-fade-in", // Keeps text animation
            "2xl:w-[608px] w-full",
            "2xl:mx-0 mx-auto",
            activeSlide.contentClassName,
          )}
        >
          <div className="flex flex-col 2xl:text-left text-center">
            <HighlightedHeading
              text={activeSlide.title}
              highlight={activeSlide.titleHighlight}
              className={cn(
                themeGuide.pageTitle,
                "2xl:text-[60px] text-[48px] 2xl:leading-18 leading-12 font-bold",
                activeSlide.titleClassName
                  ? activeSlide.titleClassName
                  : "2xl:w-full xl:w-[55%] lg:w-[65%] md:w-[80%] w-full 2xl:mx-0 mx-auto",
              )}
              highlightClass="text-[#FF00E5]"
              disableNewlines
            />

            <Description
              className={cn(
                "mt-4",
                activeSlide.descriptionClassName
                  ? activeSlide.descriptionClassName
                  : "2xl:w-[80%] xl:w-[55%] lg:w-[65%] md:w-[80%] w-full 2xl:mx-0 mx-auto",
              )}
            >
              {activeSlide.description}
            </Description>

            {activeSlide.note && (
              <p className="font-bold text-[#4F378A] text-lg leading-6 mt-2">
                {activeSlide.note}
              </p>
            )}

            <div className="mt-8 flex flex-row gap-4 2xl:justify-start justify-center z-10">
              {activeSlide.primaryButton && (
                <AppButton
                  to={activeSlide.primaryButton.to}
                  text={activeSlide.primaryButton.text}
                  withLeftIcon={!!activeSlide.primaryButton.icon}
                  leftIcon={activeSlide.primaryButton.icon}
                />
              )}
              {activeSlide.secondaryButton && (
                <AppButton
                  to={activeSlide.secondaryButton.to}
                  text={activeSlide.secondaryButton.text}
                  style="secondary"
                  withRightIcon={!!activeSlide.secondaryButton.icon}
                  rightIcon={activeSlide.secondaryButton.icon}
                  scrollAlign="top"
                />
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Pagination Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                current === index
                  ? "bg-[#FF00E5] w-6"
                  : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

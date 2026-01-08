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
  autoPlayInterval = 5000,
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

  // 1. Define Defaults
  const defaultBgClasses = `
    lg:bg-size-[1524px_785px]
    md:bg-size-[1198px_617px]
    bg-size-[776px_400px]
    lg:bg-position-[calc(50vw-320px)_100%]
    bg-position-[bottom_center]
  `;

  // 2. Determine active classes
  const activeBgClasses =
    activeSlide.bgClassName !== undefined
      ? activeSlide.bgClassName
      : defaultBgClasses;

  return (
    <section
      className={cn(
        "relative w-full lg:py-0 py-12 flex items-center overflow-hidden bg-white bg-no-repeat transition-all duration-500 ease-in-out",
        activeBgClasses,
      )}
      style={{
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        backgroundImage: `url('${activeSlide.image}')`,
        ...activeSlide.bgStyle,
      }}
    >
      <Container className="relative z-10 lg:py-6 lg:pt-0 md:pt-16 flex justify-start w-full">
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
            "lg:items-center md:items-start",
            "animate-fade-in",
            // DEFAULT CONTENT WIDTH: lg:w-[608px]
            "lg:w-[608px]",
            // OVERRIDE: applied via contentClassName prop on the slide object
            activeSlide.contentClassName,
          )}
        >
          <div className="flex flex-col lg:text-left md:text-center text-center">
            <HighlightedHeading
              text={activeSlide.title}
              highlight={activeSlide.titleHighlight}
              className={cn(
                themeGuide.pageTitle,
                "lg:text-[60px] text-[48px] lg:leading-18 leading-12 font-bold",
                // DEFAULT TITLE WIDTH: lg:w-[90%]
                "lg:w-[90%] w-full",
                // OVERRIDE: applied via titleClassName prop
                activeSlide.titleClassName,
              )}
              highlightClass="text-[#FF00E5]"
            />

            <Description
              className={cn(
                "mt-4",
                // OVERRIDE: applied via descriptionClassName prop
                activeSlide.descriptionClassName,
              )}
            >
              {activeSlide.description}
            </Description>

            {activeSlide.note && (
              <p className="font-bold text-[#4F378A] text-lg leading-6 mt-2">
                {activeSlide.note}
              </p>
            )}

            <div className="mt-8 flex flex-row gap-4 lg:justify-start justify-center">
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

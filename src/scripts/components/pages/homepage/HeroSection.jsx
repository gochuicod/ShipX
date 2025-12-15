import { useTranslation } from "react-i18next";
import { CalendarDays, CircleArrowRight } from "lucide-react";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../../components/library/AppButton";
import { themeGuide } from "../../../../styles/themeGuide";
import { cn } from "../../../../lib/util";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="
        relative
        w-full
        
        /* --- HEIGHT FIX --- */
        /* calc(100vh - 80px): 
           100vh is the full screen. 
           80px is the estimated height of your header/navbar.
           Adjust '80px' to match your actual header height (e.g., 64px, 4rem, etc.)
        */
        min-h-[calc(90vh-80px)]
        
        flex items-center
        overflow-hidden
        bg-white
        py-12 2xl:py-0
        
        /* BACKGROUND IMAGE SETTINGS */
        bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@abf7e88c51827b0a1176d9fdbd6d665f1074dbd3/src/assets/hero_section/shipx_hero_section_image_v2.webp')]
        bg-no-repeat 
        bg-position-[right_center] 
        
        /* On desktop, keep image normal size. On mobile/tablet, cover the area. */
        bg-cover 2xl:bg-size-[100%_auto]
      "
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      {/* Overlay for mobile readability */}
      <div className="absolute inset-0 bg-white/90 2xl:bg-transparent 2xl:bg-linear-to-r 2xl:from-white 2xl:via-white/0 2xl:to-transparent pointer-events-none" />

      <div className="container relative z-10 px-5 2xl:px-24">
        <div className="grid min-h-[calc(90vh-80px)] grid-cols-1 items-center gap-12 2xl:grid-cols-[0.45fr_0.55fr]">
          {/* Left Column content */}
          <div className="flex flex-col text-center 2xl:text-left">
            {/* Headline */}
            <HighlightedHeading
              text={`${t("hero_section.slide_2.header_1")} ${t("hero_section.slide_2.header_2")} ${t("hero_section.slide_2.header_3")}`}
              highlight={t("hero_section.slide_2.header_2")}
              className={cn(
                themeGuide.pageTitle,
                "md:text-5xl 2xl:text-[60px] font-extrabold leading-18 tracking-tight",
              )}
              highlightClass="text-[#FF00E5]"
            />
            {/* Description */}
            <p className="mx-auto max-w-[90%] text-lg 2xl:text-base leading-6 text-[#757577] 2xl:mx-0 2xl:mt-4 font-normal">
              {`${t("hero_section.slide_2.p_1")} ${t("hero_section.slide_2.p_1_1")}` ||
                "Enter and scale in the U.S. market..."}
            </p>
            <p className="font-bold text-[#4F378A] 2xl:text-base leading-6 2xl:mt-2">
              {t("hero_section.slide_2.p_2") ||
                "Your gateway to U.S. e-commerce"}
            </p>
            {/* Book a demo and Learn More buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 2xl:justify-start">
              <AppButton
                to="/book-a-demo"
                variant="primary"
                className="shadow-lg shadow-purple-200 2xl:text-base font-normal!"
              >
                <CalendarDays className="size-5 mr-2" />
                <span>{t("header.book_a_demo") || "Book a Demo"}</span>
              </AppButton>
              <AppButton
                to="/#services"
                variant="secondary"
                className="2xl:text-base font-normal!"
              >
                <span>
                  {t("hero_section.slide_2.learn_more") || "Learn More"}
                </span>
                <CircleArrowRight className="size-5 ml-2" />
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { CalendarDays, CircleArrowRight } from "lucide-react"; // Standard icons, install if needed
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../../components/library/AppButton";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-12 lg:py-20"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="container mx-auto px-5 2xl:px-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* --- Left Column: Content --- */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* 1. Dynamic Headline */}
            <HighlightedHeading
              text={`${t("hero_section.slide_2.header_1")} ${t("hero_section.slide_2.header_2")} ${t("hero_section.slide_2.header_3")}`}
              highlight="US E-Commerce" // The phrase to turn Pink
              className="text-4xl md:text-5xl lg:text-6xl 2xl:text-15
                font-extrabold leading-[72px] tracking-tight text-[#19191D]
              "
              highlightClass="text-[#FF00E5]"
            />

            {/* 2. Description Text */}
            <p className="mx-auto max-w-xl text-lg text-[#757577] lg:mx-0">
              {`${t("hero_section.slide_2.p_1")} ${t("hero_section.slide_2.p_1_1")}` ||
                "Enter and scale in the U.S. market with custom logistics solutions built to support sellers from launch to nationwide expansion"}
            </p>

            {/* 3. Bold Tagline */}
            <p className="font-bold text-[#4F378A]">
              {`${t("hero_section.slide_2.p_2")}` ||
                "Your gateway to U.S. e-commerce"}
            </p>

            {/* 4. Action Buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 lg:justify-start">
              {/* "Book a Demo" - Solid Purple Style */}
              <AppButton
                to="/book-demo"
                variant="main"
                size="lg"
                className="shadow-lg shadow-purple-200"
              >
                <CalendarDays className="size-4" />
                <span>{t("header.book_a_demo") || "Book a Demo"}</span>
              </AppButton>

              {/* "Learn More" - White/Outline Style */}
              <AppButton to="/learn-more" variant="secondary" size="lg">
                <span>
                  {t("hero_section.slide_2.learn_more") || "Learn More"}
                </span>
                <CircleArrowRight className="size-4" />
              </AppButton>
            </div>
          </div>

          {/* --- Right Column: Image --- */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/path/to/your/image_0b3496.png" // <--- Replace with actual path
              alt="Global Logistics Earth 3D"
              className="w-full max-w-[600px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

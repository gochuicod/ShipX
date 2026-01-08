import { useTranslation } from "react-i18next";
import { CalendarDays, CircleArrowRight } from "lucide-react";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";

import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../../components/library/AppButton";
import Description from "../../library/Description";
import Container from "../../library/Container";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="
        relative
        w-full

        flex items-center
        overflow-hidden
        bg-white
        py-12 lg:py-0

        bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/hero_image.webp')]
        bg-no-repeat
        lg:bg-size-[1524px_785px]
        md:bg-size-[1198px_617px]
        bg-size-[776px_400px]
        lg:bg-position-[bottom_right_-300px]
        bg-position-[bottom_center]
      "
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <Container className="relative z-10">
        <div
          className="
            grid
            gap-12
            xl:min-h-[664px] md:min-h-[762px] min-h-[752px]
            lg:items-center md:items-start
            lg:w-[50%]
          "
        >
          {/* Left Column content */}
          <div className="flex flex-col lg:text-left md:text-center text-center">
            {/* Headline */}
            <HighlightedHeading
              text={t("hero_section.title")}
              highlight={t("hero_section.title_highlighted")}
              className={cn(
                themeGuide.pageTitle,
                "lg:text-[60px] text-[48px] lg:leading-18 leading-12 lg:w-[90%] w-full font-bold",
              )}
              highlightClass="text-[#FF00E5]"
            />
            {/* Description */}
            <Description className="mt-4">
              {t("hero_section.description")}
            </Description>
            <p className="font-bold text-[#4F378A] text-lg leading-6 mt-2">
              {t("hero_section.note")}
            </p>
            {/* Book a demo and Learn More buttons */}
            <div className="mt-8 flex flex-row gap-4 lg:justify-start justify-center">
              <AppButton
                to="/book-a-demo"
                text={t("header.book_a_demo")}
                withLeftIcon={true}
                leftIcon={<CalendarDays className="size-5" />}
              />
              <AppButton
                to="/hs-code-generator"
                text={t(
                  "hs_code_generator_page.form_section.input_images.upload_files_button",
                )}
                style="secondary"
                withRightIcon={true}
                rightIcon={<CircleArrowRight className="size-5" />}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { useTranslation } from "react-i18next";
import { CalendarDays, CircleArrowRight } from "lucide-react";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../../components/library/AppButton";
import { themeGuide } from "../../../../styles/themeGuide";
import { cn } from "../../../../lib/util";
import Description from "../../library/Description";

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

        lg:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@abf7e88c51827b0a1176d9fdbd6d665f1074dbd3/src/assets/hero_section/shipx_hero_section_image_v2.webp')]
        md:bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@0afb4af41b652763fda7e559a32a3e91ae4fc745/src/assets/hero_section/shipx_hero_section_image_v2_tablet.webp')]
        bg-[url('https://cdn.jsdelivr.net/gh/gochuicod/ShipX@0afb4af41b652763fda7e559a32a3e91ae4fc745/src/assets/hero_section/shipx_hero_section_image_v2_mobile.webp')]
        bg-no-repeat
        lg:bg-position-[right_center] bg-position-[bottom_center]

        bg-contain
        md:bg-size-[100%_80%]
        lg:bg-size-[80%_auto]
      "
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className={`container relative z-10 ${themeGuide.paddingX}`}>
        <div
          className="
            grid
            gap-12
            lg:min-h-[calc(80vh-80px)] md:min-h-[calc(60vh-80px)] min-h-[calc(80vh-80px)]
            lg:grid-cols-[0.53fr_0.47fr] grid-cols-1
            lg:items-center md:items-start
          "
        >
          {/* Left Column content */}
          <div className="flex flex-col lg:text-left md:text-left text-center">
            {/* Headline */}
            <HighlightedHeading
              text={t("hero_section.title")}
              highlight={t("hero_section.title_highlighted")}
              className={cn(
                themeGuide.pageTitle,
                "lg:text-[60px] md:text-5xl text-[32px] lg:leading-18 md:leading-12 leading-8 lg:w-[95%] md:w-[80%] w-full font-bold",
              )}
              highlightClass="text-[#FF00E5]"
            />
            {/* Description */}
            <Description className="mt-4 lg:mx-0 md:mx-0 mx-auto md:max-w-[90%] max-w-full">
              {t("hero_section.description")}
            </Description>
            <p className="font-bold text-[#4F378A] text-lg leading-6 mt-2">
              {t("hero_section.note")}
            </p>
            {/* Book a demo and Learn More buttons */}
            <div className="mt-8 flex flex-row justify-center gap-4 lg:justify-start md:justify-start">
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
      </div>
    </section>
  );
}

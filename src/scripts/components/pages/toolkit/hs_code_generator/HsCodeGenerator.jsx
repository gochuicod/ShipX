import { useTranslation } from "react-i18next";
import { Badge } from "../../../../../styles/badge";
import HsCodeGeneratorForm from "./HsCodeGeneratorForm";
import HsCodeGeneratorResult from "./HsCodeGeneratorResult";
import ToolsHeroSection from "../../../library/ToolsHeroSection";
import { useHsCode } from "../../../../hooks/useHsCode";
import SEO from "../../../ui/SEO";
import { cn } from "../../../../utils";
import { themeGuide } from "../../../../../styles/themeGuide";

export default function HsCodeGenerator() {
  const { hsCodeResult } = useHsCode();
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title={t("seo.hs_code_generator_page.title")}
        description={t("seo.hs_code_generator_page.description")}
        canonical={t("seo.hs_code_generator_page.canonical")}
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen min-h-screen flex flex-col">
        <ToolsHeroSection activePage="hs-code-generator" />

        {/* Your HS Code AI Finder section */}
        <div
          className={cn(
            themeGuide.paddingX,
            "flex lg:flex-row flex-col gap-x-8 justify-center items-center mt-16",
          )}
        >
          {/* Heading and badge */}
          <div
            className="
              flex flex-col
              justify-center
              lg:items-end items-center
              lg:w-[497px] md:w-full
              md:gap-y-0 gap-y-[2vw]
              md:mb-0 mb-[2vw]
              font-['Inter']
            "
          >
            <Badge variant="toolkit" size="default">
              {t("shipment_tracker.track_order_section.badge_text")}
            </Badge>
            <h2
              className={cn(
                themeGuide.sectionHeading,
                (i18n.language === "vn" ||
                  i18n.language === "ind" ||
                  i18n.language === "thai") &&
                  "text-end",
                "lg:mt-0 md:mt-2",
              )}
            >
              {t("hs_code_generator_page.title_section.title_1")}&nbsp;
              <span className="text-[#FF00E5]">
                {t("hs_code_generator_page.title_section.title_2")}
              </span>
            </h2>
          </div>
          {/* Description */}
          <p
            className={cn(
              themeGuide.sectionDescription,
              "lg:w-[480px] md:w-full",
              "lg:text-start text-center",
              "lg:mt-0 mt-6",
            )}
          >
            {t("hs_code_generator_page.title_section.description")}
          </p>
        </div>

        <HsCodeGeneratorForm />

        {!hsCodeResult?.error && hsCodeResult && <HsCodeGeneratorResult />}
      </div>
    </>
  );
}

import { useTranslation } from "react-i18next";
import Badge from "../shipment_tracker/Badge";
import HsCodeGeneratorForm from "./HsCodeGeneratorForm";
import HsCodeGeneratorResult from "./HsCodeGeneratorResult";
import ToolsHeroSection from "../../../library/ToolsHeroSection";
import { useHsCode } from "../../../../hooks/useHsCode";
import SEO from "../../../ui/SEO";

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
          className="
                      flex md:flex-row flex-col
                      gap-x-[2vw]
                      justify-center items-center
                      md:mt-[5vw] mt-[8vw]
                      md:px-0 px-[10vw]
                  "
        >
          <div
            className="
                          flex flex-col
                          justify-center
                          md:items-end items-center
                          md:w-[27vw]
                          md:gap-y-0 gap-y-[2vw]
                          md:mb-0 mb-[2vw]
                      "
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <Badge
              className="md:text-[0.8vw] text-[2.5vw]"
              badge_text={t("shipment_tracker.track_order_section.badge_text")}
              text_color="#FF00E5"
              bg_color="#F3F1FF"
            />
            <h2
              className={`
                md:text-[2.5vw] text-[6vw]
                text-[#1E2939]
                font-bold
                ${
                  (i18n.language === "vn" ||
                    i18n.language === "ind" ||
                    i18n.language === "thai") &&
                  "text-end"
                }
              `}
            >
              {t("hs_code_generator_page.title_section.title_1")}&nbsp;
              <span className="text-[#FF00E5]">
                {t("hs_code_generator_page.title_section.title_2")}
              </span>
            </h2>
          </div>
          <p
            className="
                          text-[#63666D]/75
                          md:text-[0.9vw] text-[3.5vw]
                          md:text-start text-center
                          font-medium
                          leading-[1.4]
                          md:w-[30vw]
                      "
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

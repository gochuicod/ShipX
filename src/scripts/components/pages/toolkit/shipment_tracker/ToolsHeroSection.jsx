import { useTranslation } from "react-i18next";
import SubPageHero from "../../../library/SubPageHero";
import AppButton from "../../../library/AppButton";

const ToolsHeroSection = ({ activePage = "file-a-claim" }) => {
  const { t, i18n } = useTranslation();

  // Figma: tab switch container & tab button styles
  const tabSwitchContainer =
    "flex md:flex-row flex-col items-center p-2 gap-2 w-fit bg-[rgba(35,22,111,0.8)] rounded-lg font-['Inter']";

  const desktopBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/toolkit_hero_desktop.webp";
  const mobileBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/toolkit_hero_mobile.webp";

  return (
    <SubPageHero
      src={desktopBgUrl}
      srcMobile={mobileBgUrl}
      align="center"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div
        className={`
            md:ps-[10vw] ps-[12vw]
            md:pe-0 pe-[12vw]
            md:pt-[5vw] pt-[15vw]
            md:pb-[5vw] pb-[25vw]
            flex flex-col justify-center items-center md:items-start
          `}
      >
        {/* Heading Container (Frame 2147236747) */}
        <div className="flex flex-col justify-center md:items-start items-center gap-6 md:w-[608px] md:max-w-[608px] w-[376px] max-w-[376px]">
          {/* Inner Heading Stack (Frame 2147236748) */}
          <div className="flex flex-col md:items-start items-center gap-2 md:w-[608px] w-[376px]">
            <h3
              className="
                font-['Inter'] font-semibold text-white tracking-[-1px]
                md:text-[40px] md:leading-12
                text-[32px] leading-10
                md:text-left text-center
              "
            >
              {t("shipment_tracker.hero_section.title")}
            </h3>
            <p
              className="
                font-['Inter'] text-white
                md:text-[16px] md:leading-5
                text-[14px] leading-[18px]
                md:text-left text-center
              "
            >
              {t("shipment_tracker.hero_section.description")}
            </p>
          </div>

          {/* Tab Switch Container */}
          <div className={tabSwitchContainer}>
            <AppButton
              to="/shipment-tracker"
              text={t("shipment_tracker.hero_section.buttons.shipment_tracker")}
              style="default"
              size="default"
              className={
                activePage === "shipment-tracker"
                  ? "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-[#CC00B7] text-white rounded-lg font-semibold md:text-base text-sm shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"
                  : "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-transparent text-white rounded-lg font-semibold md:text-base text-sm"
              }
            />
            <AppButton
              to="/hs-code-generator"
              text={t(
                "shipment_tracker.hero_section.buttons.hs_code_generator",
              )}
              style="default"
              size="default"
              className={
                activePage === "hs-code-generator"
                  ? "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-[#CC00B7] text-white rounded-lg font-semibold md:text-base text-sm shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"
                  : "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-transparent text-white rounded-lg font-semibold md:text-base text-sm"
              }
            />
            <AppButton
              to="/file-a-claim"
              text={t("shipment_tracker.hero_section.buttons.file_a_claim")}
              style="default"
              size="default"
              className={
                activePage === "file-a-claim"
                  ? "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-[#CC00B7] text-white rounded-lg font-semibold md:text-base text-sm shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]"
                  : "flex md:flex-row flex-col justify-center items-center gap-2 md:w-[197.26px] md:h-9 w-[97px] h-[79px] bg-transparent text-white rounded-lg font-semibold md:text-base text-sm"
              }
            />
          </div>
        </div>
      </div>
    </SubPageHero>
  );
};

export default ToolsHeroSection;

import { useTranslation } from "react-i18next";
import SubPageHero from "../../../library/SubPageHero";
import AppButton from "../../../library/AppButton";

const ToolsHeroSection = ({ activePage = "file-a-claim" }) => {
  const { t, i18n } = useTranslation();

  const desktopBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/toolkit_hero_desktop.webp";
  const mobileBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/toolkit_hero_mobile.webp";

  // CDN URLs for icons
  const shipmentTrackerIcon =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/shipment_tracker.svg";
  const hsCodeGeneratorIcon =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/hs_code_generator.svg";
  const fileAClaimIcon =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/icons/toolkit/file_a_claim.svg";

  // Button styles
  const activeBtnClass =
    "flex flex-row justify-center items-center gap-2 w-[197.26px] h-9 bg-[#CC00B7] text-white rounded-lg font-semibold text-base shadow-[1px_1px_2px_rgba(20,0,99,0.45),inset_-2px_-2px_4px_rgba(98,0,97,0.4),inset_2px_2px_2px_rgba(255,255,255,0.55),inset_-4px_-4px_25px_rgba(154,4,129,0.2)]";
  const inactiveBtnClass =
    "flex flex-row justify-center items-center gap-2 w-[197.26px] h-9 bg-transparent text-white rounded-lg font-semibold text-base";

  return (
    <SubPageHero
      src={desktopBgUrl}
      srcMobile={mobileBgUrl}
      align="center"
      size="toolsHeroMobile"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center p-24 gap-8 min-h-[350px] w-full h-full">
        {/* Heading Container */}
        <div className="flex flex-col justify-center items-start gap-6 flex-grow">
          {/* Inner Heading Stack */}
          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="font-['Inter'] font-semibold text-white tracking-[-1px] text-5xl leading-12">
              {t("shipment_tracker.hero_section.title")}
            </h3>
            <p className="font-['Inter'] text-white text-base leading-5 w-full">
              {t("shipment_tracker.hero_section.description")}
            </p>
          </div>

          {/* Tab Switch Container */}
          <div className="flex flex-row items-center p-1 gap-2 w-fit bg-[rgba(35,22,111,0.8)] rounded-lg">
            <AppButton
              to="/shipment-tracker"
              text={t("shipment_tracker.hero_section.buttons.shipment_tracker")}
              style={
                activePage === "shipment-tracker"
                  ? "toolsHeroActive"
                  : "toolsHeroInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={shipmentTrackerIcon}
              className="w-48 h-9 text-base"
            />
            <AppButton
              to="/hs-code-generator"
              text={t(
                "shipment_tracker.hero_section.buttons.hs_code_generator",
              )}
              style={
                activePage === "hs-code-generator"
                  ? "toolsHeroActive"
                  : "toolsHeroInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={hsCodeGeneratorIcon}
              className="w-48 h-9 text-base"
            />
            <AppButton
              to="/file-a-claim"
              text={t("shipment_tracker.hero_section.buttons.file_a_claim")}
              style={
                activePage === "file-a-claim"
                  ? "toolsHeroActive"
                  : "toolsHeroInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={fileAClaimIcon}
              className="w-48 h-9 text-base"
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - UPDATED */}
      <div className="sm:hidden flex flex-col items-center justify-center px-8 py-12 gap-4 h-full w-full">
        <div className="flex flex-col items-center gap-2 w-full">
          <h3 className="font-['Inter'] font-semibold text-white text-4xl leading-10 text-center">
            {t("shipment_tracker.hero_section.title")}
          </h3>
          <p className="font-['Inter'] text-white text-sm leading-5 w-full text-center">
            {t("shipment_tracker.hero_section.description")}
          </p>

          {/* Tab Switch Container */}
          <div className="flex flex-row items-center p-1 gap-2 w-full bg-[rgba(35,22,111,0.8)] rounded-lg">
            <AppButton
              to="/shipment-tracker"
              text={t("shipment_tracker.hero_section.buttons.shipment_tracker")}
              style={
                activePage === "shipment-tracker"
                  ? "toolsHeroMobileActive"
                  : "toolsHeroMobileInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={shipmentTrackerIcon}
              className="flex-1 h-20 text-sm"
            />
            <AppButton
              to="/hs-code-generator"
              text={t(
                "shipment_tracker.hero_section.buttons.hs_code_generator",
              )}
              style={
                activePage === "hs-code-generator"
                  ? "toolsHeroMobileActive"
                  : "toolsHeroMobileInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={hsCodeGeneratorIcon}
              className="flex-1 h-20 text-sm"
            />
            <AppButton
              to="/file-a-claim"
              text={t("shipment_tracker.hero_section.buttons.file_a_claim")}
              style={
                activePage === "file-a-claim"
                  ? "toolsHeroMobileActive"
                  : "toolsHeroMobileInactive"
              }
              size="default"
              withLeftIcon
              leftIcon={fileAClaimIcon}
              className="flex-1 h-20 text-sm"
            />
          </div>
        </div>
      </div>
    </SubPageHero>
  );
};

export default ToolsHeroSection;

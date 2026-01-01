import { useTranslation } from "react-i18next";
import TabSwitcher from "./TabSwitcher";

import { TOOLKIT_TABS } from "../pages/homepage/ToolkitSection/tabs.config";
import { themeGuide } from "../../../styles/themeGuide";

import { cn } from "../../../lib/util";

const ToolsHeroSection = ({ activePage }) => {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
        minHeight: "350px",
      }}
    >
      <div
        className={cn(
          themeGuide.paddingX,
          "relative z-10 w-full flex flex-col items-center lg:items-start",
        )}
      >
        {/* Left/Top Content Frame - Removed max-w-[608px] to fit entire width */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 grow w-full">
          {/* Heading Stack */}
          <div className="flex flex-col items-center lg:items-start gap-2 w-full">
            <h3
              className="
              font-['Inter'] font-semibold text-white tracking-[-1px]
              lg:text-[40px] lg:line-height-[48px]
              text-[32px] line-height-[40px]
            "
            >
              {t("shipment_tracker.hero_section.title")}
            </h3>
            <p
              className="
              font-['Inter'] font-normal text-white
              lg:text-[16px] lg:line-height-[20px]
              text-[14px] line-height-[18px]
              opacity-90 max-w-[608px]
            "
            >
              {t("shipment_tracker.hero_section.description")}
            </p>
          </div>

          {/* Tab Switcher Integrated */}
          <div className="flex justify-center lg:justify-start w-full">
            <TabSwitcher
              tabs={TOOLKIT_TABS}
              activeTab={activePage}
              onChange={() => {}}
              containerBg="rgba(35, 22, 111, 0.7)"
              border={false}
            />
          </div>
        </div>

        {/* Background Visuals - Designed for absolute positioning */}
        <div className="hidden md:block absolute right-[15vw] top-[7.5vw] -translate-y-1/2 -z-20 pointer-events-none">
          {/* Pink Glow Gradient */}
          <div className="absolute lg:left-0 lg:top-[-15vw] w-[800px] h-[800px] bg-[#FF00E5] opacity-20 blur-3xl rounded-full" />

          {/* 3D Illustration Container */}
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/tools_page/toolkit_hero_section_image_desktop.webp"
            alt="Logistic Tools"
            className="relative w-full h-full object-contain scale-90"
          />
        </div>
      </div>
    </section>
  );
};

export default ToolsHeroSection;

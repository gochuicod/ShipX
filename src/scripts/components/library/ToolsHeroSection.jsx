import { useTranslation } from "react-i18next";
import TabSwitcher from "./TabSwitcher";
import { TOOLKIT_TABS } from "../pages/homepage/ToolkitSection/tabs.config";

const ToolsHeroSection = ({ activePage }) => {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        // Design background: linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)
        background: "linear-gradient(180deg, #4F378A 0%, #66005C 159.37%)",
        minHeight: "350px",
      }}
    >
      {/* Main Content Container
          Desktop: padding 128px 96px, gap 32px
          Tablet: padding 64px 32px
          Mobile: padding 48px 32px
      */}
      <div
        className="
        relative z-10 w-full max-w-[1440px] flex flex-col xl:flex-row items-center justify-between
        xl:px-[96px] xl:py-[128px] xl:gap-[32px]
        md:px-[32px] md:py-[64px] md:gap-[24px]
        px-[32px] py-[48px] gap-[16px]
      "
      >
        {/* Left/Top Content Frame (Frame 2147236747) */}
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left gap-6 flex-grow max-w-[608px]">
          {/* Heading Stack (Frame 2147236748) */}
          <div className="flex flex-col items-center xl:items-start gap-2 w-full">
            <h3
              className="
              font-['Inter'] font-semibold text-white tracking-[-1px]
              xl:text-[40px] xl:line-height-[48px]
              text-[32px] line-height-[40px]
            "
            >
              {t("shipment_tracker.hero_section.title")}
            </h3>
            <p
              className="
              font-['Inter'] font-normal text-white
              xl:text-[16px] xl:line-height-[20px]
              text-[14px] line-height-[18px]
              opacity-90 max-w-[608px]
            "
            >
              {t("shipment_tracker.hero_section.description")}
            </p>
          </div>

          {/* Tab Switcher Integrated */}
          <div className="flex justify-center xl:justify-start w-full">
            <TabSwitcher
              tabs={TOOLKIT_TABS}
              activeTab={activePage}
              onChange={() => {}}
              containerBg="rgba(35, 22, 111, 0.8)"
            />
          </div>
        </div>

        {/* Background Visuals (Frame 2147236749)
            Hidden on small mobile per design docs but visible on tablet/desktop
        */}
        <div className="hidden md:block relative xl:w-[608px] xl:h-[250px] md:w-[219px] md:h-[178px]">
          {/* Pink Glow Gradient */}
          <div className="absolute xl:left-[-10px] xl:top-[-254px] w-[500px] h-[500px] bg-[#FF00E5] opacity-20 blur-[64px] rounded-full" />

          {/* 3D Illustration Container */}
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/toolkit_hero_desktop.webp"
            alt="Logistic Tools"
            className="relative z-20 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ToolsHeroSection;

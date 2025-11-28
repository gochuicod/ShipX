import React from "react";
import { useTranslation } from "react-i18next";
import SmartNavLink from "./SmartNavLink";

const ToolsHeroSection = ({ activePage = "file-a-claim" }) => {
  const { t } = useTranslation();

  // Styles for the ACTIVE button
  const activeButtonStyle =
    "bg-[#99008A] text-white rounded-full md:px-[1.5vw] px-[2.5vw] md:py-[0.2vw] py-[0.5vw] text-center cursor-pointer text-xs whitespace-nowrap";

  // Styles for the INACTIVE buttons
  const inactiveButtonStyle =
    "text-[#4F378A] text-center text-xs cursor-pointer md:px-[1vw] px-[2vw] whitespace-nowrap";

  // UPDATED CDN URLs (Pointing to the 'main' branch so they stay up to date)
  const desktopBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipment_tracker_cover_image_v3.webp";
  const mobileBgUrl =
    "https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/shipment_tracker_cta_image.svg";

  return (
    <div
      className="
          flex flex-col
          w-screen md:h-auto h-[70vw]
          bg-cover bg-center bg-no-repeat
          text-white text-[0.8vw]
          font-normal
          /* Use CSS Variables to handle the URLs safely */
          bg-(image:--bg-mobile) 
          md:bg-(image:--bg-desktop)
      "
      style={{
        // Define the variables here
        "--bg-mobile": `url('${mobileBgUrl}')`,
        "--bg-desktop": `url('${desktopBgUrl}')`,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        className="
              md:w-[40vw] w-screen
              md:ps-[10vw] ps-[12vw]
              md:pe-0 pe-[12vw]
              md:pt-[5vw] pt-[15vw]
              md:pb-[5vw] pb-[25vw]
              flex flex-col
              md:justify-start justify-center md:items-start items-center
              md:gap-y-[1vw] gap-y-[3vw]
              z-2
          "
      >
        {/* Dynamic Title */}
        <span
          className="
              md:text-[40px] text-[7vw] md:text-start md:justify-start
              md:font-bold font-semibold text-center
          "
        >
          {t("shipment_tracker.hero_section.title")}
        </span>

        {/* Dynamic Description */}
        <span
          className="
              md:text-[20px] text-[2.8vw] md:font-semibold
              md:text-start text-center max-w-full leading-[1.2]
          "
        >
          {t("shipment_tracker.hero_section.description")}
        </span>

        {/* NAV LINK TOGGLE SECTION */}
        <div
          className="
              flex flex-row
              md:gap-x-[1.5vw] gap-x-[3vw]
              bg-white
              rounded-full
              md:py-[0.20vw] py-[0.6vw]
              md:pe-[1.5vw] pe-[3vw]
              md:ps-[0.25vw] ps-[0.55vw]
              w-fit
              items-center justify-center
              md:text-[16px] text-[12px]
          "
        >
          {/* Shipment Tracker Button */}
          <SmartNavLink to="/shipment-tracker" end>
            <button
              type="button"
              className={
                activePage === "shipment-tracker"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              {t("shipment_tracker.hero_section.buttons.shipment_tracker")}
            </button>
          </SmartNavLink>

          {/* File a Claim Button */}
          <SmartNavLink to="/file-a-claim" end>
            <button
              type="button"
              className={
                activePage === "file-a-claim"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              {t("shipment_tracker.hero_section.buttons.file_a_claim")}
            </button>
          </SmartNavLink>

          {/* HS Code Generator Button */}
          <SmartNavLink to="/hs-code-generator" end>
            <button
              type="button"
              className={
                activePage === "hs-code-generator"
                  ? activeButtonStyle
                  : inactiveButtonStyle
              }
            >
              {t("shipment_tracker.hero_section.buttons.hs_code_generator")}
            </button>
          </SmartNavLink>
        </div>
      </div>
    </div>
  );
};

export default ToolsHeroSection;

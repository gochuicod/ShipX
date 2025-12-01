import { useTranslation } from "react-i18next";
import SmartNavLink from "../ui/SmartNavLink";

const ToolsHeroSection = ({ activePage = "file-a-claim" }) => {
  const { t, i18n } = useTranslation();

  const activeButtonStyle =
    "bg-[#99008A] text-white font-bold rounded-full md:px-[1.5vw] px-[2.5vw] md:py-[0.45vw] py-[1vw] text-center cursor-pointer md:text-[0.8vw] text-[3vw] whitespace-nowrap";

  const inactiveButtonStyle =
    "text-[#1A1A1A] text-center md:text-[0.8vw] text-[3vw] cursor-pointer md:px-[1vw] px-[2vw] md:py-[0.45vw] py-[1vw] whitespace-nowrap";

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
        "--bg-mobile": `url('${mobileBgUrl}')`,
        "--bg-desktop": `url('${desktopBgUrl}')`,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        className={`
              ${
                i18n.language === "vn"
                  ? "md:w-[50vw] w-screen"
                  : "md:w-[40vw] w-screen"
              }
              md:ps-[10vw] ps-[12vw]
              md:pe-0 pe-[12vw]
              md:pt-[5vw] pt-[15vw]
              md:pb-[5vw] pb-[25vw]
              flex flex-col
              md:justify-start justify-center md:items-start items-center
              md:gap-y-[1vw] gap-y-[3vw]
              z-2
          `}
      >
        <span
          className="
              md:text-[2.4vw] text-[7vw] md:text-start md:justify-start
              md:font-bold font-semibold text-center
          "
        >
          {t("shipment_tracker.hero_section.title")}
        </span>

        <span
          className={`
              md:text-[1vw] text-[2.8vw] md:font-semibold
              md:text-start text-center max-w-full leading-[1.2]
              ${i18n.language === "vn" && "md:w-[30vw] w-full"}
          `}
        >
          {t("shipment_tracker.hero_section.description")}
        </span>

        <div
          className="
                flex flex-row
                md:gap-x-0 gap-x-[1.5vw]
                bg-white
                rounded-full
                md:py-[0.15vw] py-[0.7vw]
                md:px-[0.20vw] px-[0.7vw]
                w-fit
                items-center justify-center
                md:text-[0.8vw] text-[2.8vw]
            "
        >
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
        </div>
      </div>
    </div>
  );
};

export default ToolsHeroSection;

import { button as MotionButton } from "motion/react-client";
import { margin } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import ParallaxSection from "./ParallaxSection";
import SmartNavLink from "./SmartNavLink";

const ServiceHeadline = () => {
  const { t, i18n } = useTranslation();

  return (
    <ParallaxSection>
      <div
        className={`flex flex-col ${margin} justify-center items-center md:py-[10vw] py-[15vw]`}
        style={{
          fontFamily: "Public_Sans, system-ui, -apple-system, sans-serif",
        }}
      >
        <SmartNavLink
          to="/blog/shipx-goes-live-smarter-future-asean-cross-border-logistics"
          end
        >
          <div
            className={`${i18n.language === "en" ? "md:pr-0" : "md:pr-[2vw]"} flex md:flex-row flex-col md:gap-x-[5vw] gap-x-0 md:gap-y-0 gap-y-[10vw] justify-center items-center bg-[#FFD6FA]/50 md:rounded-[1.5vw] rounded-[3.5vw]`}
          >
            <div className="flex md:w-[30vw] w-full">
              <img
                loading="lazy"
                className="shadow-[0_0_1vw_rgba(79,55,138,0.15)] md:rounded-[1.5vw] rounded-[3.5vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_sglink_banner_image_1.webp"
                alt="ShipX Goes Live"
              />
            </div>
            <div className="flex flex-col md:gap-y-[0.5vw] gap-y-[2vw] md:w-[15vw] w-auto justify-center md:items-start items-center md:pb-0 pb-[5vw]">
              <h2 className="text-[#1A1A1A] md:text-[1vw] text-[5vw] font-semibold md:leading-[1vw] leading-[5vw] md:text-start text-center">
                {t("service_headline_section.heading_1")}&nbsp;
                <span className="text-[#FF00E5]">
                  {t("service_headline_section.heading_2")}
                </span>
                &nbsp;{t("service_headline_section.heading_3")}
              </h2>
              <MotionButton
                type="button"
                className="bg-[#FF00E5] flex flex-row md:gap-x-[0.5vw] gap-[1.5vw] justify-center items-center md:px-[1.5vw] px-[5vw] md:py-[0.5vw] py-[1.5vw] md:rounded-[0.5vw] rounded-[2vw] text-white font-medium md:text-[0.8vw] text-[2.5vw] text-center cursor-pointer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                {t("service_headline_section.button_text_1")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="md:w-[1vw] w-[2.5vw] md:h-[1vw] h-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </MotionButton>
            </div>
          </div>
        </SmartNavLink>
      </div>
    </ParallaxSection>
  );
};

export default ServiceHeadline;

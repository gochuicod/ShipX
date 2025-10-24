import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { margin } from "../../utils/constants";
import { button as MotionButton } from "motion/react-client";
import SmartNavLink from "./SmartNavLink";
const ParallaxSection = lazy(() => import("./ParallaxSection"));

const SGAmiloCards = () => {
  const { t } = useTranslation();

  return (
    <ParallaxSection>
      <div
        className={`relative w-[100vw] ${margin} flex md:flex-row flex-col justify-center items-center md:gap-x-[3vw] gap-x-0 md:gap-y-0 gap-y-[10vw] md:pb-[10vw] pb-[25vw]`}
      >
        <div className="absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[15vw_0vw_25vw_rgba(74,58,255,0.3)] -z-10"></div>
        <div className="absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[20vw_10vw_15vw_rgba(255,0,229,0.3)] -z-30"></div>
        <div className="absolute top-[15vw] left-[-15vw] size-[15vw] rounded-full shadow-[5vw_0.5vw_25vw_rgba(45,91,255,0.35)] -z-20"></div>
        {/* SG Link Card */}
        <div className="relative">
          {/* Don't have an account button */}
          <SmartNavLink to="/book-a-demo" end>
            <button
              type="button"
              end
              className="
                      bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                      bg-[length:200%_100%] bg-[position:0%_0%]
                      hover:bg-[position:100%_0%]
                      transition-[background-position] duration-1000 ease-in-out
                      md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                      text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer
                      flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw]
                    "
            >
              <span className="md:text-[0.8vw] text-[2.5vw] font-normal">
                {t("systems_section.signup_button.question")}
              </span>
              <span className="flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold">
                {t("systems_section.signup_button.button")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="#FFFFFF"
                  className="md:size-[0.7vw] size-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </SmartNavLink>
          <div className="relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_14.svg"
                alt="Amilo Logo"
                className="md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
              />
            </div>
            <p
              className="text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="inline text-[#FF00E5]">
                {t("systems_section.sglink_card.title_highlight")}&nbsp;
              </span>
              {t("systems_section.sglink_card.title_rest")}
            </p>
            <p className="text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]">
              {t("systems_section.sglink_card.description")}
            </p>
            <MotionButton
              type="button"
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() =>
                (window.location.href = "https://admin.sglinkapi.com/")
              }
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

              {/* Inner white area */}
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]">
                  {t("systems_section.sglink_card.button")}
                </span>
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_2.svg"
                  alt="Amilo Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </MotionButton>
            <div className="flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0">
              <div
                className="
                        md:h-[13vw] h-[20vw]
                        md:w-[20vw] w-[50vw]
                        opacity-30
                        bg-no-repeat md:bg-top bg-top-left
                        bg-[length:50vw_50vw]
                        md:bg-[length:30vw_30vw]
                      "
                style={{
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_16.svg")`,
                }}
              ></div>

              <div className="flex flex-col gap-y-[3vw]">
                <div
                  className="
                          md:h-[12vw] h-[17vw]
                          md:w-[20vw] w-[25vw]
                          opacity-30
                          bg-no-repeat bg-top
                          bg-[length:120vw_60vw]
                          md:bg-[length:100vw_50vw]
                        "
                  style={{
                    backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_17.svg")`,
                  }}
                ></div>

                <div
                  className="
                          md:h-[12vw] h-[17vw]
                          md:w-[20vw] w-[25vw]
                          opacity-30
                          bg-no-repeat bg-center
                          bg-[length:120vw_60vw]
                          md:bg-[length:100vw_50vw]
                        "
                  style={{
                    backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_18.svg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Amilo Card */}
        <div className="relative">
          <SmartNavLink to="/book-a-demo" end>
            <button
              type="button"
              end
              className="
                      bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                      bg-[length:200%_100%] bg-[position:0%_0%]
                      hover:bg-[position:100%_0%]
                      transition-[background-position] duration-1000 ease-in-out
                      md:py-[0.6vw] py-[1.5vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                      text-white font-medium absolute md:bottom-[-1vw] bottom-[-3vw] left-1/2 transform -translate-x-1/2 cursor-pointer
                      flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center z-[10] lg:w-auto md:w-auto w-[60vw]
                    "
            >
              <span className="md:text-[0.8vw] text-[2.5vw] font-normal">
                {t("systems_section.signup_button.question")}
              </span>
              <span className="flex flex-row md:text-[0.8vw] text-[2.5vw] md:gap-x-[0.1vw] gap-x-[0.5vw] justify-center items-center text-white font-bold">
                {t("systems_section.signup_button.button")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3.5}
                  stroke="#FFFFFF"
                  className="md:size-[0.7vw] size-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </SmartNavLink>
          <div className="relative overflow-hidden flex flex-col md:gap-y-[1vw] gap-y-[3vw] md:w-[35vw] w-full md:shadow-[0_0vw_1vw_rgba(79,55,138,0.15)] shadow-[0_0vw_5vw_rgba(79,55,138,0.15)] md:rounded-[2vw] rounded-[3vw] md:px-[3vw] px-[5vw] md:pt-[3vw] pt-[5vw] md:pb-[23vw] pb-[33vw] bg-white">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_15.svg"
                alt="Amilo Logo"
                className="md:h-[4vw] h-[15vw] md:w-[12vw] w-[30vw]"
              />
            </div>
            <p
              className="text-[#0E0E0E] md:text-[1.7vw] text-[4vw] text-wrap text-left font-semibold md:leading-[2.1vw] leading-[4.5vw]"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="inline text-[#FF00E5]">
                {t("systems_section.amilo_card.title_highlight")}&nbsp;
              </span>
              {t("systems_section.amilo_card.title_rest")}
            </p>
            <p className="text-[#63666D]/80 md:text-[1.05vw] text-[2.55vw] text-wrap text-justify font-medium md:leading-[1.55vw] leading-[3.05vw]">
              {t("systems_section.amilo_card.description")}
            </p>
            <MotionButton
              type="button"
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit z-[10]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => (window.location.href = "https://vip.amilo.co/")}
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

              {/* Inner white area */}
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2.5vw]">
                  {t("systems_section.amilo_card.button")}
                </span>
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/header_svg_1.svg"
                  alt="Amilo Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </MotionButton>
            <div className="flex flex-row md:gap-x-[2vw] gap-x-[5vw] items-center justify-center absolute bottom-0 left-0">
              <div
                className="
                        md:h-[13vw] h-[20vw]
                        md:w-[20vw] w-[50vw]
                        opacity-30
                        bg-no-repeat md:bg-top bg-center
                        bg-[length:150vw_25vw]
                        md:bg-[length:100vw_13vw]
                      "
                style={{
                  backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_20.svg")`,
                }}
              ></div>

              <div className="flex flex-col gap-y-[3vw]">
                <div
                  className="
                          md:h-[12vw] h-[17vw]
                          md:w-[20vw] w-[25vw]
                          opacity-30
                          bg-no-repeat bg-top
                          bg-[length:120vw_25vw]
                          md:bg-[length:100vw_20vw]
                        "
                  style={{
                    backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_19.svg")`,
                  }}
                ></div>

                <div
                  className="
                          md:h-[12vw] h-[17vw]
                          md:w-[20vw] w-[25vw]
                          opacity-30
                          bg-no-repeat bg-center
                          bg-[length:150vw_60vw]
                          md:bg-[length:100vw_15vw]
                        "
                  style={{
                    backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_21.svg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default SGAmiloCards;

import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { button as MotionButton } from "motion/react-client";
import SmartNavLink from "./SmartNavLink";
const ParallaxSection = lazy(() => import("./ParallaxSection"));

const Platform = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="platform"
      className={`lg:min-h-screen md:min-h-fit min-h-screen relative flex flex-col justify-center items-center pt-[3vw] pb-[5vw] overflow-hidden select-none`}
    >
      <img
        className="absolute md:w-[50vw] w-[80vw] md:h-[45vw] h-[80vw] md:translate-x-[17vw] translate-x-[10vw] md:-translate-y-[1vw] translate-y-[1vw] -z-10"
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_4.webp"
        alt=""
      />
      <ParallaxSection className="lg:min-h-screen md:min-h-fit min-h-screen relative flex flex-col justify-center items-center overflow-hidden select-none">
        <div className="flex md:flex-row flex-col gap-x-[0.1vw] justify-center items-center">
          <div className="flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center">
            <div
              className="flex md:flex-row flex-col gap-x-[0.5vw] md:gap-y-0 gap-y-[2vw] md:items-start items-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF00E5"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="md:size-[0.5vw] size-[1.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                {t("platform_section.badge_1")}
              </span>
              <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#414141] font-normal bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]">
                {t("platform_section.badge_2")}
              </span>
            </div>
            <p
              className="text-[#1A1A1A] md:text-[2.3vw] text-[6vw] font-semibold md:leading-[2.5vw] leading-[6.5vw] md:text-start text-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("platform_section.header_1")}&nbsp;
              <br />
              {t("platform_section.header_2")}
            </p>
            <p
              className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80 md:text-start text-center md:pt-0 pt-[3vw] md:pb-0 pb-[2vw]"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("platform_section.description_1")}
              <br className="md:block hidden" />
              {t("platform_section.description_2")}
            </p>
            <div
              className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center"
              style={{
                fontFamily: "Karla, system-ui, -apple-system, sans-serif",
              }}
            >
              <SmartNavLink
                to="/book-a-demo"
                className="text-[#4F378A] font-semibold"
              >
                <MotionButton
                  type="button"
                  className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 10,
                    },
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

                  {/* Inner white area */}
                  <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
                    {t("platform_section.book_a_demo")}
                  </div>
                </MotionButton>
              </SmartNavLink>
              <SmartNavLink
                to="/#contact-us"
                end
                className="
                        bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                        bg-[length:200%_100%] bg-[position:0%_0%]
                        hover:bg-[position:100%_0%]
                        transition-[background-position] duration-1000 ease-in-out
                        md:py-[0.6vw] py-[1.3vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full cursor-pointer
                        text-white font-medium shadow-[0_0.5vw_1vw_rgba(255,0,229,0.25)]
                      "
              >
                {t("platform_section.contact_us")}
              </SmartNavLink>
            </div>
          </div>
          <img
            className="md:w-[35vw] w-[60vw] md:h-[25vw] h-[20vh]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_2.webp"
            alt=""
          />
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-center items-center">
          <div className="flex flex-col justify-center items-center md:rounded-[2vw] rounded-[4vw] md:p-[2vw] p-[5vw] bg-white md:inset-shadow-[0_0_0.5vw_rgba(79,55,138,0.1)] inset-shadow-[0_0_3.5vw_rgba(79,55,138,0.1)]">
            <span className="text-[#4D4D4D] md:text-[0.7vw] text-[2.4vw] font-medium">
              {t("platform_section.trusted_by")}
            </span>
            <div className="relative md:w-[30vw] w-[80vw] h-fit overflow-hidden">
              <div className="flex animate-scroll-right items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_2.webp"
                  alt="scrolling"
                  className="md:h-[6vw] h-[10vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_2.webp"
                  alt="scrolling"
                  className="md:h-[6vw] h-[10vw] object-contain"
                />
              </div>

              <style jsx>{`
                @keyframes scrollRight {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scrollRight 50s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
            <div className="relative md:w-[30vw] w-[80vw] h-fit overflow-hidden">
              <div className="flex animate-scroll items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_3.webp"
                  alt="scrolling"
                  className="md:h-[6vw] h-[10vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_logo_3.webp"
                  alt="scrolling"
                  className="md:h-[6vw] h-[10vw] object-contain"
                />
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll {
                  animation: scroll 45s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-center text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-medium md:w-[40vw] w-[80vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pl-[5vw] pl-0 md:pr-[10vw] pr-0 md:pb-0 pb-[5vw]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
              <img
                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg"
                alt="plane"
              />
              <p className="pl-[1vw]">
                {t("platform_section.info_1")}{" "}
                {i18n.language !== "vn" && <br className="md:block hidden" />}
                {t("platform_section.info_1_1")}
              </p>
            </div>
            <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
              <img
                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_9.svg"
                alt="basket"
              />
              <p className="pl-[1vw]">
                {t("platform_section.info_2")}{" "}
                {i18n.language !== "vn" && <br className="md:block hidden" />}
                {t("platform_section.info_2_1")}
              </p>
            </div>
            <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
              <img
                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_7.svg"
                alt="magnifier"
              />
              <p className="pl-[1vw]">
                {t("platform_section.info_3")}{" "}
                {i18n.language !== "vn" && <br className="md:block hidden" />}
                {t("platform_section.info_3_1")}
              </p>
            </div>
            <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
              <img
                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_6.svg"
                alt="package"
              />
              <p className="pl-[1vw]">
                {t("platform_section.info_4")}{" "}
                {i18n.language !== "vn" && <br className="md:block hidden" />}
                {t("platform_section.info_4_1")}
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Platform;

import { lazy } from "react";
import { offices } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { button as MotionButton } from "motion/react-client";
import SmartNavLink from "./SmartNavLink";
const TooltipCard = lazy(() => import("./ToolTipCard"));
const ParallaxSection = lazy(() => import("./ParallaxSection"));

const Offices = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="network"
      className={`lg:min-h-screen md:h-fit h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:px-[8vw] px-[5vw]`}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_10.svg"
        alt=""
        className="absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <ParallaxSection>
        <div
          className={`flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full ${i18n.language !== "vn" ? "md:ml-[5vw]" : "md:ml-[2vw]"}`}
        >
          <div className="md:w-[36vw] w-auto">
            <span
              className="md:hidden flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] w-fit mx-auto"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
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
              {t("offices_section.badge_1")}
            </span>
            <p className="text-[#1A1A1A] md:text-[2.3vw] text-[6vw] md:text-start text-center font-semibold md:leading-[3.5vw] leading-[6.5vw]">
              {t("offices_section.header_1")}{" "}
              {i18n.language === "en" ? <br className="md:block hidden" /> : ""}
              {t("offices_section.header_2")}{" "}
              <p className="inline text-[#FF00E5]">
                {t("offices_section.header_3")}
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw] md:w-[35vw]">
            <div className="flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]">
              <span className="md:flex hidden flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
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
                {t("offices_section.badge_1")}
              </span>
              <div
                className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center"
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
                      {t("offices_section.book_a_demo")}
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
                  {t("offices_section.contact_us")}
                </SmartNavLink>
              </div>
            </div>
            <p className="text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw] md:text-start text-center">
              {t("offices_section.description_1")}&nbsp;
              {i18n.language === "en" ? <br className="md:block hidden" /> : ""}
              {t("offices_section.description_2")}
            </p>
          </div>
        </div>
        <div
          className="flex md:flex-row flex-col justify-center items-center md:pt-0 pt-[5vw]"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          <div className="flex md:flex-col flex-wrap md:justify-normal justify-center md:gap-y-[1.5vw] gap-y-[3vw] md:gap-x-0 gap-x-[3vw] md:pl-[8vw] pl-[1.5vw] md:pr-0 pr-[1.5vw]">
            {offices.map((office, index) =>
              office.hidden ? null : (
                <TooltipCard
                  key={index}
                  image={office.image}
                  country_name={t(
                    `offices_section.offices.${office.key}.country_name`,
                  )}
                  description={
                    <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                      {t(`offices_section.offices.${office.key}.address`)}
                    </span>
                  }
                  contact_number={t(
                    `offices_section.offices.${office.key}.contact_number`,
                    "",
                  )}
                  email={t(`offices_section.offices.${office.key}.email`)}
                />
              ),
            )}
          </div>
          {/* Map Image */}
          <div
            className="flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[125vw_90vw] bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/offices_section_map_image.webp")`,
            }}
          ></div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Offices;

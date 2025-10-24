import { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { button as MotionButton } from "motion/react-client";
import SmartNavLink from "./SmartNavLink";
const ParallaxSection = lazy(() => import("./ParallaxSection"));
const CarouselServices = lazy(() => import("./CarouselServices"));

const Services = () => {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);

  return (
    <div
      id="services"
      className={`lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden`}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_4.svg"
        alt=""
        className="absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_5.svg"
        alt=""
        className="absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_5.svg"
        alt=""
        className="absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190"
        aria-hidden="true"
      />
      <ParallaxSection className="lg:h-screen md:h-fit h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center overflow-hidden">
        <span
          className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] select-none"
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
          {t("services_section.badge_1")}
        </span>
        <p
          className="md:text-[2vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] select-none md:mt-0 mt-[1vw] px-[2vw]"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          <p className="inline text-[#FF00E5]">
            {t("services_section.header_1")}
          </p>
          &nbsp;&ndash;&nbsp;
          {t("services_section.header_2")}
          <br className="md:block hidden" />
          {t("services_section.header_3")}
        </p>
        <div
          className="flex md:flex-row flex-col gap-x-[5vw] justify-center items-center md:pt-0 pt-[5vw]"
          style={{
            fontFamily: "Karla, system-ui, -apple-system, sans-serif",
          }}
        >
          <div className="flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[3vw] md:w-[25vw] w-[95vw] md:justify-start justify-center md:gap-x-0 gap-x-[3vw]">
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(0)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_1.svg"
                  alt="globe"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_1")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(1)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg"
                  alt="plane"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_2")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(2)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_3.svg"
                  alt="flag"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_3")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(3)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_4.svg"
                  alt="warehouse"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_4")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(4)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_5.svg"
                  alt="amazon icon"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_5")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(5)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_6.svg"
                  alt="package"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_6")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(6)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_7.svg"
                  alt="magnifier"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_7")}
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setSlide(7)}
                className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
              >
                <img
                  className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_8.svg"
                  alt="dollar"
                />
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                  {t("services_section.link_8")}
                </span>
              </div>
            </div>
            <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none">
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
                    {t("services_section.book_a_demo")}
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
                {t("services_section.contact_us")}
              </SmartNavLink>
            </div>
          </div>
          <CarouselServices slide={slide} />
        </div>
        <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]">
          {t("services_section.note")}
        </span>
      </ParallaxSection>
    </div>
  );
};

export default Services;

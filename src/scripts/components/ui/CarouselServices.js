import i18n from "i18next";
import { Carousel } from "@material-tailwind/react";
import { useSwipeable } from "react-swipeable";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function CarouselServices({ slide }) {
  const { t } = useTranslation();
  const handlers = useSwipeable({
    onSwipedLeft: () => document.querySelector(".st-prev")?.click(),
    onSwipedRight: () => document.querySelector(".st-next")?.click(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  const setActiveIndexRef = useRef(null);

  useEffect(() => {
    if (typeof slide === "number" && setActiveIndexRef.current)
      setActiveIndexRef.current(slide);
  }, [slide]);

  return (
    <div {...handlers}>
      <Carousel
        autoplay={true}
        autoplayDelay={5000}
        loop={true}
        transition={{ duration: 1 }}
        className="md:w-[25vw] w-[80vw] rounded-none select-none md:pt-0 pt-[5vw]"
        prevArrow={({ handlePrev }) => (
          <button
            type="button"
            onClick={handlePrev}
            className="
              !absolute top-2/4 left-[1vw] -translate-y-2/4 st-next
              bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
              bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]
              transition-[background-position] duration-1000 ease-in-out
              rounded-full p-[0.5vw] shadow-lg cursor-pointer hidden
            "
          >
            {/* Left arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-[1vw] h-[1vw]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            type="button"
            onClick={handleNext}
            className="
              !absolute top-2/4 right-[1vw] -translate-y-2/4 st-prev
              bg-gradient-to-r from-[#FF00E5] from-0% via-[#FF00E5] via-60% to-[#4F378A] to-100%
              bg-[length:200%_100%] bg-[position:100%_0%] hover:bg-[position:0%_0%]
              transition-[background-position] duration-1000 ease-in-out
              rounded-full p-[0.5vw] shadow-lg cursor-pointer hidden
            "
          >
            {/* Right arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="w-[1vw] h-[1vw]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          setActiveIndexRef.current = setActiveIndex;

          return (
            <div className="absolute md:bottom-4 bottom-2 left-2/4 flex -translate-x-2/4 md:gap-[0.4vw] gap-[1vw]">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block md:h-[0.3vw] h-[1vw] cursor-pointer rounded-full transition-all content-[''] ${
                    activeIndex === i
                      ? "md:w-[0.5vw] w-[3.5vw] bg-[#FF00E5]"
                      : "md:w-[0.3vw] w-[1vw] bg-[#FF00E5]/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          );
        }}
      >
        {/* First slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_1")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.6vw] md:leading-[2vw] text-[4.5vw] leading-[7vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_1.header_1")}{" "}
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_1.header_2")}&nbsp;
              {i18n.language !== "vn" && <br />}
              {t("services_section.carousel.slide_1.header_3")}
            </p>{" "}
            {t("services_section.carousel.slide_1.header_4")}
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_1.price_desc_1")}&nbsp;
              <br />
              {t("services_section.carousel.slide_1.price_desc_2")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_1.currency")}
              <p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">
                {t("services_section.carousel.slide_1.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_1.webp"
            alt="Main Image 1"
          />
        </div>
        {/* Second slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_2")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.6vw] md:leading-[2vw] text-[4.5vw] leading-[7vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_2.header_1")}{" "}
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_2.header_2")}&nbsp;
              {i18n.language !== "vn" && <br />}
              {t("services_section.carousel.slide_2.header_3")}
            </p>{" "}
            {t("services_section.carousel.slide_2.header_4")}
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_2.price_desc_1")}
              <br />
              {t("services_section.carousel.slide_2.price_desc_2")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_2.currency")}
              <p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">
                {t("services_section.carousel.slide_2.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_7.webp"
            alt="Main Image 7"
          />
        </div>
        {/* Third slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_3")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_3.header_1")}{" "}
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_3.header_2")}&nbsp;
              {i18n.language !== "vn" && <br />}
              {t("services_section.carousel.slide_3.header_3")}
            </p>{" "}
            {t("services_section.carousel.slide_3.header_4")}&nbsp;
            {i18n.language !== "vn" && <br />}
            {t("services_section.carousel.slide_3.header_5")}
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_3.price_desc_1")}&nbsp;
              {i18n.language !== "vn" && <br />}
              {t("services_section.carousel.slide_3.price_desc_2")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[4vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_3.currency")}
              <p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">
                {t("services_section.carousel.slide_3.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_8.webp"
            alt="Main Image 8"
          />
        </div>
        {/* Fourth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_4")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.4vw] md:leading-[2.2vw] text-[4vw] leading-[6vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_4.header_1")}&nbsp;
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_4.header_2")}
            </p>{" "}
            {i18n.language !== "vn" && <br />}
            {t("services_section.carousel.slide_4.header_3")}
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_4.price_desc_1")}{" "}
              <br className="md:block hidden" />
              {i18n.language !== "vn" && <br />}
              {t("services_section.carousel.slide_4.price_desc_2")}&nbsp;
              {t("services_section.carousel.slide_4.price_desc_3")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_4.currency")}
              <p className="text-[#FF00E5] md:text-[3vw] text-[8vw]">
                {t("services_section.carousel.slide_4.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_9.webp"
            alt="Main Image 9"
          />
        </div>
        {/* Fifth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_5")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.8vw] md:leading-[2.5vw] text-[5vw] leading-[7vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_5.header_1")}
            </p>
            {i18n.language !== "vn" ? <br /> : <>&nbsp;</>}
            {t("services_section.carousel.slide_5.header_2")}
          </p>
          <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[0.7vw] py-[1.5vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]">
            {/* Left: Description */}
            <p className="text-[#63666D] md:text-[0.6vw] text-[2vw] leading-snug text-left">
              {t("services_section.carousel.slide_5.price_desc_1")}&nbsp;
              <br />
              {t("services_section.carousel.slide_5.price_desc_2")}
            </p>

            {/* Right: Pricing */}
            <div className="flex flex-col justify-center items-center md:gap-y-[0.1vw] gap-y-0">
              <div className="flex flex-row items-baseline">
                <span className="text-[#FF99F5] md:text-[1.5vw] text-[3vw] font-black leading-none">
                  {t("services_section.carousel.slide_5.currency")}
                </span>
                <span className="text-[#FF00E5] md:text-[3vw] text-[8vw] font-black leading-none ml-[0.3vw]">
                  {t("services_section.carousel.slide_5.price_1")}
                </span>
              </div>
              <p className="md:text-[1vw] text-[2vw] text-[#0E0E0E] font-medium leading-none">
                {t("services_section.carousel.slide_5.price_2")}
              </p>
            </div>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_10.webp"
            alt="Main Image 10"
          />
        </div>
        {/* Sixth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_6")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.3vw] md:leading-[1.5vw] text-[4vw] leading-[5vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_6.header_1")}
            {i18n.language !== "vn" && <br />}
            {t("services_section.carousel.slide_6.header_2")}{" "}
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_6.header_3")}
              {i18n.language !== "vn" && <br />}
              &nbsp;{t("services_section.carousel.slide_6.header_4")}
            </p>
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_6.price_desc_1")}
              <br />
              {t("services_section.carousel.slide_6.price_desc_2")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_6.currency")}
              <p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">
                {t("services_section.carousel.slide_6.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_11.webp"
            alt="Main Image 11"
          />
        </div>
        {/* Seventh slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className={`flex flex-row md:gap-x-[0.5vw] gap-x-[1vw] items-center ${i18n.language === "vn" ? "md:text-[0.7vw]" : "md:text-[0.8vw]"} text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.link_7")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.1vw] md:leading-[1.6vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.6vw] md:leading-[2vw] text-[5vw] leading-[7vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_7.header_1")}&nbsp;
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_7.header_2")}
            </p>
            {i18n.language === "vn" ? <>&nbsp;</> : <br />}
            {t("services_section.carousel.slide_7.header_3")}
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[3vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              {t("services_section.carousel.slide_7.price_desc_1")}&nbsp;
              <br />
              {t("services_section.carousel.slide_7.price_desc_2")}
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              {t("services_section.carousel.slide_7.currency")}
              <p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">
                {t("services_section.carousel.slide_7.price")}
              </p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_img_12.webp"
            alt="Main Image 12"
          />
        </div>
        {/* Eighth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4F378A"
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
            {t("services_section.carousel.slide_8.badge_1")}
          </span>
          <p
            className={`${i18n.language === "vn" ? "md:text-[1.2vw] md:leading-[1.7vw] text-[4vw] leading-[4.5vw]" : "md:text-[1.6vw] md:leading-[2vw] text-[5vw] leading-[7vw]"} text-[#1A1A1A] text-start font-semibold`}
            style={{
              fontFamily: "Karla, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("services_section.carousel.slide_8.header_1")}&nbsp;
            <p className="inline text-[#FF00E5]">
              {t("services_section.carousel.slide_8.header_2")}
            </p>
            {i18n.language !== "vn" ? <br /> : <>&nbsp;</>}
            {t("services_section.carousel.slide_8.header_3")}
          </p>
          <div className="flex flex-col md:gap-y-[1vw] gap-y-[2vw]">
            <div className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none">
              <img
                className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_23.svg"
                alt="Main Icon 23"
              />
              <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]">
                {t("services_section.carousel.slide_8.list_1.item_1")}
              </span>
            </div>
            <div className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none">
              <img
                className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_24.svg"
                alt="Main Icon 24"
              />
              <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]">
                {t("services_section.carousel.slide_8.list_1.item_2")}
              </span>
            </div>
            <div className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none">
              <img
                className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_24.svg"
                alt="Main Icon 24"
              />
              <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]">
                {t("services_section.carousel.slide_8.list_1.item_3")}
              </span>
            </div>
            <div className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none">
              <img
                className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_25.svg"
                alt="Main Icon 25"
              />
              <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]">
                {t("services_section.carousel.slide_8.list_1.item_4")}
              </span>
            </div>
            <div className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[1.5vw] px-[3vw] md:py-[1vw] py-[3vw] items-center justify-start cursor-pointer select-none">
              <img
                className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/main_icon_8.svg"
                alt="Main Icon 8"
              />
              <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[1.5vw] pl-[3vw]">
                {t("services_section.carousel.slide_8.list_1.item_5")}
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

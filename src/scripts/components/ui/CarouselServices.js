import { Carousel } from "@material-tailwind/react";
import {
  main_img_1,
  main_img_7,
  main_img_8,
  main_img_9,
  main_img_10,
  main_img_11,
  main_img_12,
  main_img_13,
} from "../../../assets/assets";
import { useSwipeable } from "react-swipeable";
import { useEffect, useRef } from "react";

export default function CarouselServices({ slide }) {
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
        className="md:w-[25vw] w-[75vw] rounded-none select-none md:pt-0 pt-[5vw]"
        prevArrow={({ handlePrev }) => (
          <button
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
            style={{ fontFamily: "Karla" }}
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
            Express Worldwide
          </span>
          <p
            className="md:text-[1.6vw] text-[4.5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]"
            style={{ fontFamily: "Karla" }}
          >
            From{" "}
            <p className="inline text-[#FF00E5]">
              SG, VN, MY, TH, ID <br />
              to anywhere
            </p>{" "}
            in the world
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Prices starting from as low as <br />
              Transit time ~3-5 days
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">22</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_1}
          />
        </div>
        {/* Second slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            Economy Worldwide
          </span>
          <p
            className="md:text-[1.6vw] text-[4.5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]"
            style={{ fontFamily: "Karla" }}
          >
            From anywhere in{" "}
            <p className="inline text-[#FF00E5]">
              ASEAN <br />
              to anywhere
            </p>{" "}
            in the world
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[1vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Prices starting from as low as <br />
              Transit time ~10-15 days
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">9</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_7}
          />
        </div>
        {/* Third slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            USA Destination Corridor
          </span>
          <p
            className="md:text-[1.3vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[6vw]"
            style={{ fontFamily: "Karla" }}
          >
            Dedicated Corridor from{" "}
            <p className="inline text-[#FF00E5]">
              ASEAN <br />
              to US
            </p>{" "}
            with various transit and <br /> cost options
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Prices starting as low as <br />
              Transit time $$-$$ days
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[4vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">4.53</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_8}
          />
        </div>
        {/* Fourth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            USA Destination Fulfilment
          </span>
          <p
            className="md:text-[1.4vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2.2vw] leading-[6vw]"
            style={{ fontFamily: "Karla" }}
          >
            Network of <p className="inline text-[#FF00E5]">2+ warehouses</p>{" "}
            <br />
            across USA for local fulfilment
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Pick & Pack starting from as low as{" "}
              <br className="md:block hidden" />
              <br />
              Preferred carrier last mile rates for <br />
              nationwide delivery
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">2</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_9}
          />
        </div>
        {/* Fifth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            Fulfilment by Amazon
          </span>
          <p
            className="md:text-[1.8vw] text-[5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2.5vw] leading-[7vw]"
            style={{ fontFamily: "Karla" }}
          >
            <p className="inline text-[#FF00E5]">End-to-end operations</p>
            <br />
            from origin to FBA
          </p>
          <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[0.7vw] py-[1.5vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]">
            {/* Left: Description */}
            <p className="text-[#63666D] md:text-[0.6vw] text-[2vw] leading-snug text-left">
              Pick & Pack starting from as low as <br />
              Transit time 30-40 days
            </p>

            {/* Right: Pricing */}
            <div className="flex flex-col justify-center items-center md:gap-y-[0.1vw] gap-y-0">
              <div className="flex flex-row items-baseline">
                <span className="text-[#FF99F5] md:text-[1.5vw] text-[3vw] font-black leading-none">
                  $
                </span>
                <span className="text-[#FF00E5] md:text-[3vw] text-[8vw] font-black leading-none ml-[0.3vw]">
                  383
                </span>
              </div>
              <p className="md:text-[1vw] text-[2vw] text-[#0E0E0E] font-medium leading-none">
                per CBM
              </p>
            </div>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_10}
          />
        </div>
        {/* Sixth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            Bulk Freight to USA
          </span>
          <p
            className="md:text-[1.3vw] text-[4vw] text-[#1A1A1A] text-start font-semibold  md:leading-[1.5vw] leading-[5vw]"
            style={{ fontFamily: "Karla" }}
          >
            Join our scheduled sea-freight
            <br />
            containers for{" "}
            <p className="inline text-[#FF00E5]">
              cheaper
              <br /> consolidated rates into USA
            </p>
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Prices starting from as low as
              <br />
              Transit time 40-60 days
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">3.6</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_11}
          />
        </div>
        {/* Seventh slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-evenly md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            Global Compliance & Documentation
          </span>
          <p
            className="md:text-[1.6vw] text-[5vw] text-[#1A1A1A] text-start font-semibold  md:leading-[2vw] leading-[7vw]"
            style={{ fontFamily: "Karla" }}
          >
            Team of <p className="inline text-[#FF00E5]">Experts and APIs</p>
            <br />
            for Efficient Trade
          </p>
          <div
            className="flex flex-row font-normal gap-x-[1vw] justify-center items-center bg-white md:px-[0.5vw] px-[1vw] md:py-[2vw] py-[3vw] md:rounded-[1vw] rounded-[3vw] shadow-[0_0.5vw_1vw_rgba(0,0,0,0.05)]"
            style={{ fontFamily: "Inter" }}
          >
            <p className="text-[#63666D] md:text-[0.6vw] text-[2.3vw]">
              Prices starting from as low as <br />
              Transit time 10-15 days
            </p>
            <p className="flex flex-row tracking-0 text-[#FF99F5] md:text-[2vw] text-[5vw] font-black items-start leading-0">
              $<p className="text-[#FF00E5] md:text-[4vw] text-[8vw]">99</p>
            </p>
          </div>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_12}
          />
        </div>
        {/* Eighth slide: custom hero section */}
        <div className="flex flex-col md:justify-between justify-between md:gap-y-[1vw] gap-y-[1.5vw] md:w-[25vw] w-full bg-[#F8F7FF] md:p-[2vw] p-[5vw] md:rounded-[2vw] rounded-[5vw] md:h-[36vw] h-[100vw]">
          <span
            className="flex flex-row  md:gap-x-[0.5vw] gap-x-[1vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-white rounded-[2vw] md:px-[0.7vw] px-[3vw] md:py-[0.4vw] py-[1vw]"
            style={{ fontFamily: "Karla" }}
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
            Financing and Customer Service
          </span>
          <p className="md:text-[1.8vw] text-[5.5vw] text-[#FF00E5] text-center font-bold md:leading-[1.5vw] leading-[7vw]">
            Coming Soon!
          </p>
          <img
            className="w-full md:h-[15vw] h-[45vw] rounded-[2vw]"
            src={main_img_13}
          />
        </div>
      </Carousel>
    </div>
  );
}

import {
  main_logo_4,
  main_logo_5,
  main_logo_6,
  main_logo_7,
  main_logo_8,
  main_logo_9,
  main_svg_1,
  main_svg_11,
  main_svg_12,
} from "../../../assets/assets";
import { Carousel } from "@material-tailwind/react";
import { useSwipeable } from "react-swipeable";
import * as motion from "motion/react-client";

export default function CarouselNav() {
  const handlers = useSwipeable({
    onSwipedLeft: () => document.querySelector(".mt-prev")?.click(),
    onSwipedRight: () => document.querySelector(".mt-next")?.click(),
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <Carousel
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
        transition={{ duration: 1 }}
        className="w-screen rounded-none md:pb-[1vw] pb-[10vw]"
        swipe={true} // enable swipe
        draggable={true} // allow dragging
        touchMove={true} // respond to touch
        verticalSwiping={false} // make sure it only reacts to horizontal
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="
              !absolute top-2/4 left-[1vw] -translate-y-2/4 mt-next
              bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
              bg-[length:200%_100%] bg-[position:0%_0%] hover:bg-[position:100%_0%]
              transition-[background-position] duration-1000 ease-in-out
              rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden
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
              !absolute top-2/4 right-[1vw] -translate-y-2/4 mt-prev
              bg-gradient-to-r from-[#FF00E5] from-0% via-[#FF00E5] via-60% to-[#4F378A] to-100%
              bg-[length:200%_100%] bg-[position:100%_0%] hover:bg-[position:0%_0%]
              transition-[background-position] duration-1000 ease-in-out
              rounded-full p-[0.5vw] shadow-lg cursor-pointer md:flex hidden
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
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-0 left-2/4 flex -translate-x-2/4 md:gap-[0.4vw] gap-[1vw]">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block md:h-[0.3vw] h-[2vw] cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "md:w-[1.5vw] w-[5.5vw] bg-[#FF00E5]"
                    : "md:w-[0.3vw] w-[2vw] bg-[#FF00E5]/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* First slide: custom hero section */}
        <div className="flex flex-col">
          <div className="relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]">
            <div className="md:flex-1 flex flex-col md:w-[55%] w-full">
              {/* Tagline */}
              <div
                className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                <span className="bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]">
                  ShipX
                </span>
                <span className="md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]">
                  Your Gateway Abroad
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#9E77ED"
                  className="md:size-[0.6vw] size-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              {/* Headline */}
              <div className="flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0">
                <h1
                  className="text-[#1A1A1A] font-extrabold md:text-[3.7vw] text-[10vw] md:leading-[4.2vw] leading-[10.5vw]"
                  style={{
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Everything You Need <br className="md:block hidden" />
                  To Grow{" "}
                  <p className="inline text-[#FF00E5] font-black">
                    Internationally
                  </p>
                </h1>
                <p
                  className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  From Economy Shipping To Express Delivery, FBA Fulfillment To
                  Marketplace <br className="md:block hidden" /> integrations,
                  ShipX Equips You With The Tools To Scale Worldwide
                </p>
                <p
                  className="text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Community Of 1000+ International Shippers From ASEAN
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                    text-white font-medium cursor-pointer
                  "
                >
                  Book A Demo Now!
                </button>
                <motion.button
                  className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 500, damping: 10 },
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

                  {/* Inner white area */}
                  <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
                    <span className="text-[#4F378A] font-semibold">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="#FF00E5"
                      className="md:size-[0.7vw] size-[2.5vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-fit w-full flex justify-end items-center select-none">
              <img
                className="md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0"
                src={main_svg_1}
                alt="Main SVG 1"
              />
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col select-none">
            <span
              className="text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Trusted By Industry <b>Leaders & 2500+ More</b>
            </span>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-left items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_4}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_4}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
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

                .animate-scroll-left {
                  animation: scroll 45s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-right items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_5}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_5}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 50s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Second slide: custom hero section */}
        <div className="flex flex-col">
          <div className="relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]">
            <div className="flex-1 flex-col md:w-[55%] w-full">
              {/* Tagline */}
              <div
                className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                <span className="bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]">
                  ShipX
                </span>
                <span className="md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]">
                  Destination US
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#9E77ED"
                  className="md:size-[0.6vw] size-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              {/* Headline */}
              <div className="flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0">
                <h1
                  className="text-[#1A1A1A] font-extrabold md:text-[3.8vw] text-[10vw] md:leading-[4.3vw] leading-[10.5vw]"
                  style={{
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Seamless Entry To The
                  <p className="inline text-[#FF00E5] font-black"> US</p>{" "}
                  Ecosystem
                </h1>
                <p
                  className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Enter And Scale In The U.S. Market With Custom Logistics
                  Solutions Built To <br className="md:block hidden" />
                  Support Sellers From Launch To Nationwide Expansion
                </p>
                <p
                  className="text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Your Gateway To U.S. E-Commerce
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                    text-white font-medium cursor-pointer
                  "
                >
                  Book A Demo Now!
                </button>
                <motion.button
                  className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 500, damping: 10 },
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

                  {/* Inner white area */}
                  <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
                    <span className="text-[#4F378A] font-semibold">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="#FF00E5"
                      className="md:size-[0.7vw] size-[2.5vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-fit w-full flex justify-end items-center select-none">
              <img
                className="md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0"
                src={main_svg_11}
                alt="Main SVG 11"
              />
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col select-none">
            <span
              className="text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Synergized By Industry <b>Partners & 50+ More</b>
            </span>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-left items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_6}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_6}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
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

                .animate-scroll-left {
                  animation: scroll 55s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-right items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_7}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_7}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 55s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Third slide: custom hero section */}
        <div className="flex flex-col">
          <div className="relative flex md:flex-row flex-col-reverse md:gap-y-0 items-center md:pt-0 pt-[10vw] md:min-h-[75vh] min-h-fit bg-white md:px-[10vw] px-[10vw]">
            <div className="flex-1 flex-col md:w-[55%] w-full">
              {/* Tagline */}
              <div
                className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full md:pl-[0.3vw] pl-[0.7vw] md:pr-[0.45vw] pr-[2vw] md:py-[0.2vw] py-[0.5vw] md:text-[0.6vw] text-[2.5vw] items-center font-semibold text-[#6941C6]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                <span className="bg-white md:px-[0.5vw] px-[1.5vw] md:py-[0.05vw] py-[0.5vw] rounded-full border border-[#E9D7FE]">
                  ShipX
                </span>
                <span className="md:pl-[0.5vw] pl-[1vw] md:pr-[0.5vw] pr-[1vw]">
                  Worldwide Delivery
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#9E77ED"
                  className="md:size-[0.6vw] size-[2.5vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

              {/* Headline */}
              <div className="flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0">
                <h1
                  className="text-[#1A1A1A] font-extrabold md:text-[3.8vw] text-[10vw] md:leading-[4.3vw] leading-[10.5vw]"
                  style={{
                    fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Delivering To{" "}
                  <p className="inline text-[#FF00E5]">
                    190+ <br className="md:block hidden" />
                    Countries
                  </p>{" "}
                  With Ease
                </h1>
                <p
                  className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Reach Customers Worldwide With Seamless Logistics That
                  Simplify Cross-
                  <br className="md:block hidden" />
                  Border Sales, Ensuring Smooth Growth Without Operational
                  Headaches
                </p>
                <p
                  className="text-[#402B73] md:text-[0.8vw] text-[3vw] font-bold"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  Community Of 1000+ International Shippers From ASEAN
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
                <button
                  className="
                    bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:200%_100%] bg-[position:0%_0%]
                    hover:bg-[position:100%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-full
                    text-white font-medium cursor-pointer
                  "
                >
                  Book A Demo Now!
                </button>
                <motion.button
                  className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 500, damping: 10 },
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

                  {/* Inner white area */}
                  <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
                    <span className="text-[#4F378A] font-semibold">
                      Learn More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="#FF00E5"
                      className="md:size-[0.7vw] size-[2.5vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="md:w-fit w-full flex justify-end items-center select-none">
              <img
                className="md:w-fit w-full md:h-[35vw] h-[35vh] md:p-0 pb-0"
                src={main_svg_12}
                alt="Main SVG 12"
              />
            </div>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col select-none">
            <span
              className="text-[#63666D] md:text-[0.6vw] text-[2vw] font-medium text-center"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Trusted By Industry <b>Leaders & 2500+ More</b>
            </span>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-left items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_8}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_8}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
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

                .animate-scroll-left {
                  animation: scroll 45s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
            <div className="relative w-full h-fit overflow-hidden">
              <div className="absolute top-[-2.5vw] md:left-[-10vw] left-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="absolute top-[-2.5vw] md:right-[-10vw] right-[-20vw] md:size-[10vw] size-[20vw] rounded-full shadow-[-5vw_0.5vw_3vw_rgba(255,255,255,1)] z-40"></div>
              <div className="flex animate-scroll-right items-center gap-y-[3vw]">
                {/* Original logos */}
                <img
                  src={main_logo_9}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />

                {/* Duplicate logos for seamless loop */}
                <img
                  src={main_logo_9}
                  alt="scrolling"
                  className="md:h-[3vw] h-[7.5vw] object-contain"
                />
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(-50%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }

                .animate-scroll-right {
                  animation: scroll 50s linear infinite;
                  width: max-content; /* ensures no weird shrinking */
                }
              `}</style>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

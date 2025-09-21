import {
  main_logo_1,
  main_logo_2,
  main_logo_3,
  main_svg_1,
  main_svg_11,
  main_svg_12
} from '../../assets/assets'
import { Carousel } from "@material-tailwind/react";
import { useSwipeable } from 'react-swipeable';

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
        className="w-screen rounded-none"
        swipe={true}          // enable swipe
        draggable={true}      // allow dragging
        touchMove={true}      // respond to touch
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
              strokeWidth={2.5} stroke="white" className="w-[1vw] h-[1vw]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24"
              strokeWidth={2.5} stroke="white" className="w-[1vw] h-[1vw]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 md:gap-[0.4vw] gap-[1vw]">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block md:h-[0.3vw] h-[2vw] cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "md:w-[1.5vw] w-[5.5vw] bg-[#FF00E5]" : "md:w-[0.3vw] w-[2vw] bg-[#FF00E5]/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* First slide: custom hero section */}
        <div className="relative flex md:flex-row flex-col md:gap-y-0 items-center px-[5vw] md:pt-0 pt-[10vw] md:min-h-[90vh] min-h-screen bg-white">
          <div className="flex-1 flex-col md:w-[55%] w-full">
            {/* Tagline */}
            <div className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full pl-[0.3vw] pr-[0.45vw] py-[0.2vw] md:text-[0.6vw] text-[2vw] items-center font-semibold text-[#6941C6]">
              <span className="bg-white px-[0.5vw] py-[0.05vw] rounded-full border border-[#E9D7FE]">
                ShipX
              </span>
              <span className="pl-[0.5vw] pr-[0.5vw]">Your Gateway Abroad</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#9E77ED"
                className="size-[0.6vw]"
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
              <h1 className="font-bold md:text-[4vw] text-[7.5vw] md:leading-[3.5vw] leading-[8.5vw]">
                Everything You Need <br />
                To Grow <p className="inline text-[#FF00E5]">Internationally</p>
              </h1>
              <p className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80">
                From Economy Shipping To Express Delivery, FBA Fulfillment To
                Marketplace <br /> integrations, ShipX Equips You With The Tools
                To Scale Worldwide
              </p>
              <p className="text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold">
                Community Of 1000+ International Shippers From ASEAN
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-x-[1vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]">
              <button
                className="
                  bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:200%_100%] bg-[position:0%_0%]
                  hover:bg-[position:100%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] rounded-[2vw]
                  text-white font-medium cursor-pointer
                "
              >
                Book A Demo Now!
              </button>
              <div
                className="
                  bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:100%_200%] bg-[position:0%_100%]
                  hover:bg-[position:0%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:p-[0.1vw] p-[0.5vw] rounded-[2vw]
                  text-white font-medium
                "
              >
                <button
                  className="
                    flex flex-row gap-x-[0.5vw] items-center
                    bg-white
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                    text-[#4F378A] relative z-10
                    border-none cursor-pointer
                  "
                  style={{ outline: "none" }}
                >
                  Learn More
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
                </button>
              </div>
            </div>

            {/* Trusted By */}
            <div className="flex flex-col select-none">
              <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-medium">
                Trusted By Industry <b>Leaders & 2500+ More</b>
              </span>
              <div className="relative w-full h-fit overflow-hidden">
                  <div className="flex animate-scroll items-center gap-[3vw]">
                    {/* Original logos */}
                    <img src={main_logo_1} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />

                    {/* Duplicate logos for seamless loop */}
                    <img src={main_logo_1} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />
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

                    .animate-scroll {
                      animation: scroll 30s linear infinite;
                      width: max-content; /* ensures no weird shrinking */
                    }
                  `}</style>
                </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[45%] w-full flex-1 justify-end items-center select-none">
            <img
              className="md:w-[40vw] w-full md:h-[40vw] h-full md:p-0 p-[5vw]"
              src={main_svg_1}
              alt="Main SVG 1"
            />
          </div>
        </div>

        {/* Second slide: custom hero section */}
        <div className="relative flex md:flex-row flex-col md:gap-y-0 items-center px-[5vw] md:pt-0 pt-[10vw] md:min-h-[90vh] min-h-screen bg-white">
          <div className="flex-1 flex-col md:w-[55%] w-full">
            {/* Tagline */}
            <div className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full pl-[0.3vw] pr-[0.45vw] py-[0.2vw] md:text-[0.6vw] text-[2vw] items-center font-semibold text-[#6941C6]">
              <span className="bg-white px-[0.5vw] py-[0.05vw] rounded-full border border-[#E9D7FE]">
                ShipX
              </span>
              <span className="pl-[0.5vw] pr-[0.5vw]">Destination US</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#9E77ED"
                className="size-[0.6vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div className="flex flex-col md:gap-y-[1.5vw] gap-y-[5vw] select-none mt-0">
              <h1 className="font-bold md:text-[4vw] text-[6.5vw] md:leading-[3.5vw] leading-[8.5vw]">
                Seamless Entry To The
                <p className="inline text-[#FF00E5]"> US <br />E-Commerce </p>
                Ecosystem
              </h1>
              <p className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80">
                Enter And Scale In The U.S. Market With Custom Logistics Solutions Built To <br />
                Support Sellers From Launch To Nationwide Expansion
              </p>
              <p className="text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold">
                Your Gateway To U.S. E-Commerce
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-x-[1vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]">
              <button
                className="
                  bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:200%_100%] bg-[position:0%_0%]
                  hover:bg-[position:100%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] rounded-[2vw]
                  text-white font-medium cursor-pointer
                "
              >
                Book A Demo Now!
              </button>
              <div
                className="
                  bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:100%_200%] bg-[position:0%_100%]
                  hover:bg-[position:0%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:p-[0.1vw] p-[0.5vw] rounded-[2vw]
                  text-white font-medium
                "
              >
                <button
                  className="
                    flex flex-row gap-x-[0.5vw] items-center
                    bg-white
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                    text-[#4F378A] relative z-10
                    border-none cursor-pointer
                  "
                  style={{ outline: "none" }}
                >
                  Learn More
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
                </button>
              </div>
            </div>

            {/* Trusted By */}
            <div className="flex flex-col select-none">
              <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-medium">
                Synergized by Industry <b>Partners & 50+ More</b>
              </span>
              <div className="relative w-full h-fit overflow-hidden">
                  <div className="flex animate-scroll items-center gap-[3vw]">
                    {/* Original logos */}
                    <img src={main_logo_2} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />

                    {/* Duplicate logos for seamless loop */}
                    <img src={main_logo_2} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />
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

                    .animate-scroll {
                      animation: scroll 30s linear infinite;
                      width: max-content; /* ensures no weird shrinking */
                    }
                  `}</style>
                </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[45%] w-full flex-1 justify-end items-center select-none">
            <img
              className="md:w-[40vw] w-full md:h-[40vw] h-full md:p-0 p-[5vw]"
              src={main_svg_11}
              alt="Main SVG 1"
            />
          </div>
        </div>

        {/* Third slide: custom hero section */}
        <div className="relative flex md:flex-row flex-col md:gap-y-0 items-center px-[5vw] md:pt-0 pt-[10vw] md:min-h-[90vh] min-h-screen bg-white">
          <div className="flex-1 flex-col md:w-[55%] w-full">
            {/* Tagline */}
            <div className="flex flex-row bg-[#F9F5FF] w-fit select-none rounded-full pl-[0.3vw] pr-[0.45vw] py-[0.2vw] md:text-[0.6vw] text-[2vw] items-center font-semibold text-[#6941C6]">
              <span className="bg-white px-[0.5vw] py-[0.05vw] rounded-full border border-[#E9D7FE]">
                ShipX
              </span>
              <span className="pl-[0.5vw] pr-[0.5vw]">Worldwide Delivery</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#9E77ED"
                className="size-[0.6vw]"
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
              <h1 className="font-bold md:text-[4vw] text-[8vw] md:leading-[3.5vw] leading-[8.5vw]">
                Delivering To <p className="inline text-[#FF00E5]">190+ <br /> Countries&nbsp;</p>
                With Ease
              </h1>
              <p className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80">
                Reach Customers Worldwide With Seamless Logistics That Simplify Cross-<br />
                Border Sales, Ensuring Smooth Growth Without Operational Headaches
              </p>
              <p className="text-[#402B73] md:text-[0.8vw] text-[2.5vw] font-bold">
                Take Your Brand Global, Stress-Free
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-x-[1vw] md:text-[0.7vw] text-[2.5vw] font-normal md:my-[2.5vw] my-[5vw]">
              <button
                className="
                  bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:200%_100%] bg-[position:0%_0%]
                  hover:bg-[position:100%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] rounded-[2vw]
                  text-white font-medium cursor-pointer
                "
              >
                Book A Demo Now!
              </button>
              <div
                className="
                  bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                  bg-[length:100%_200%] bg-[position:0%_100%]
                  hover:bg-[position:0%_0%]
                  transition-[background-position] duration-1000 ease-in-out
                  md:p-[0.1vw] p-[0.5vw] rounded-[2vw]
                  text-white font-medium
                "
              >
                <button
                  className="
                    flex flex-row gap-x-[0.5vw] items-center
                    bg-white
                    md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                    text-[#4F378A] relative z-10
                    border-none cursor-pointer
                  "
                  style={{ outline: "none" }}
                >
                  Learn More
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
                </button>
              </div>
            </div>

            {/* Trusted By */}
            <div className="flex flex-col select-none">
              <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-medium">
                Connected By Leading <b>Integrations & 20+ More</b>
              </span>
              <div className="relative w-full h-fit overflow-hidden">
                  <div className="flex animate-scroll items-center gap-[3vw]">
                    {/* Original logos */}
                    <img src={main_logo_3} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />

                    {/* Duplicate logos for seamless loop */}
                    <img src={main_logo_3} alt="scrolling" className="md:h-[6vw] h-[15vw] object-contain" />
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

                    .animate-scroll {
                      animation: scroll 30s linear infinite;
                      width: max-content; /* ensures no weird shrinking */
                    }
                  `}</style>
                </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-[45%] w-full flex-1 justify-end items-center select-none">
            <img
              className="md:w-[40vw] w-full md:h-[40vw] h-full md:p-0 p-[5vw]"
              src={main_svg_12}
              alt="Main SVG 1"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
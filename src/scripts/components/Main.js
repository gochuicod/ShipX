import {
  main_svg_2,
  main_svg_3,
  main_svg_4,
  main_svg_5,
  main_svg_6,
  main_svg_7,
  main_svg_8,
  main_svg_10,
  main_icon_1,
  main_icon_2,
  main_icon_3,
  main_icon_4,
  main_icon_5,
  main_icon_6,
  main_icon_7,
  main_icon_8,
  main_icon_9,
  main_icon_10,
  main_icon_11,
  main_icon_12,
  main_icon_13,
  main_icon_14,
  main_icon_15,
  main_icon_16,
  main_icon_17,
  main_icon_18,
  main_icon_19,
  main_icon_20,
  main_icon_21,
  main_icon_22,
  main_img_2,
  main_img_4,
  main_img_5,
  main_img_6,
  main_logo_2,
  main_logo_3,
} from "../../assets/assets";

import ContactForm from "./ui/ContactForm";
import Carousel from "./ui/CarouselNav";
import CarouselServices from "./ui/CarouselServices";
import Counter from "./ui/Counter";
import * as motion from "motion/react-client";
import { NavLink } from "react-router-dom";
import HoverBorderGradient from "./ui/hover-border-gradient";

import TooltipCard from "./ui/ToolTipCard";
import { useState } from "react";

const Main = ({ margin }) => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[-5vw] left-[-10vw] size-[10vw] rounded-full shadow-[5vw_0.5vw_15vw_rgba(79,55,138,1)] z-40"></div>
      <div className="absolute top-[8vw] right-[-15vw] size-[15vw] rounded-full shadow-[-5vw_0.5vw_20vw_rgba(255,0,229,0.2)] z-40"></div>
      <div className="absolute top-1/2 left-[-30vw] size-[30vw] rounded-full shadow-[15vw_-10vw_20vw_rgba(255,0,229,0.1)] -z-10"></div>
      <div className="flex flex-col">
        {/* Hero Section */}
        <Carousel margin={margin} />
        {/* Hero Section End */}
        {/* Statistics Section Start */}
        <div
          id="statistics"
          className={`relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] md:pt-[15vw] pt-[40vw] md:pb-[5vw] pb-[30vw] overflow-hidden ${margin} select-none`}
        >
          <img
            src={main_svg_2}
            alt=""
            className="absolute -translate-x-[0.01vw] md:-translate-y-[5vw] -translate-y-[50vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_3}
            alt=""
            className="absolute md:-translate-y-[5.5vw] -translate-y-[40vw] translate-x-[40vw] md:w-[25vw] w-[45vw] md:h-[25vw] h-[45vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <div className="flex flex-row gap-x-[3vw]">
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={2500} duration={5} />+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Customers
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={10} duration={5} />+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Global Partners
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={192} duration={5} />
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Countries Covered
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={2.5} duration={5} />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Orders Processed
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={40} duration={5} />+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Tech Enabled Warehouses
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={13} duration={5} />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Orders Fulfilled
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={45} duration={5} />+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Logistics & Ecommerce Partners
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  <Counter end={300} duration={5} />+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  Trucks Operated
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-[4vw] text-[8vw] font-black bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text">
                  $
                  <Counter end={60} duration={5} />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[1.8vw] text-center text-[#1A1A1A] font-medium">
                  GMV Per Year
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:items-start items-center md:gap-y-[0.5vw] gap-y-[1.5vw]">
              <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#FF00E5] font-semibold bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF00E5"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="md:size-[0.5vw] size-[1vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                Our Statistics
              </span>
              <p className="md:text-[2vw] text-[7vw] text-[#1A1A1A] md:text-start text-center font-bold md:leading-[2.5vw] leading-[7.5vw]">
                Powered by our unified <br />
                network — delivering <br className="md:block hidden" />
                excellence through ShipX
              </p>
            </div>
          </div>
        </div>
        {/* Statistics Section End */}
        {/* Services Section Start */}
        <div
          id="services"
          className={`md:h-screen h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden ${margin}`}
        >
          <img
            src={main_svg_4}
            alt=""
            className="absolute -translate-x-[40vw] translate-y-[12vw] w-[200vw] h-[45vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_5}
            alt=""
            className="absolute -translate-x-[41vw] -translate-y-[35vw] w-[150vw] h-[80vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <img
            src={main_svg_5}
            alt=""
            className="absolute translate-x-[23vw] translate-y-[24vw] w-[200vw] h-[80vw] pointer-events-none select-none -z-10 rotate-190"
            aria-hidden="true"
          />
          <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw] select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF00E5"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="md:size-[0.5vw] size-[1vw]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Our Services
          </span>
          <p className="md:text-[2vw] text-[6.5vw] text-[#1A1A1A] text-center font-bold md:leading-[2.5vw] leading-[7vw] select-none">
            <p className="inline text-[#FF00E5]">All in one platform</p> &ndash;
            ShipX aggregates cross-
            <br className="md:block hidden" />
            border solutions from Amilo & SG Link
          </p>
          <div className="flex md:flex-row flex-col gap-x-[5vw] justify-center items-center md:pt-0 pt-[5vw]">
            <div className="flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[3vw] md:w-[25vw] w-[95vw] md:justify-start justify-center md:gap-x-0 gap-x-[3vw]">
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(0)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_1}
                  />
                  <span
                    className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]"
                  >
                    Express Worldwide
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(1)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_2}
                  />
                  <span
                    className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]"
                  >
                    Economy Worldwide
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(2)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_3}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    USA Destination Corridor
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(3)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_4}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    USA Destination Fulfilment
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(4)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_5}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    Fulfilment by Amazon
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(5)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_6}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    Bulk Freight to USA
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(6)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_7}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    Global Compliance & Documentation
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setSlide(7)}
                  className="flex flex-row w-full md:rounded-[1vw] rounded-[3vw] bg-white z-10 md:px-[2vw] px-[2vw] md:py-[0.5vw] py-[2vw] items-center justify-start md:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.05)] shadow-[0_0.5vw_1.5vw_rgba(255,0,229,0.15)] hover:shadow-[0_0.5vw_1vw_rgba(255,0,229,0.35)] transition-shadow duration-500 ease-in-out cursor-pointer select-none"
                >
                  <img
                    className="md:w-[2vw] w-[3vw] md:h-[2vw] h-[3vw]"
                    src={main_icon_8}
                  />
                  <span className="text-[#4F378A] font-semibold md:text-[1vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    Financing and Customer Service
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white font-medium"
                >
                  <NavLink
                    to=""
                    end
                    className="text-[#4F378A]"
                  >
                    Book a Demo
                  </NavLink>
                </HoverBorderGradient>
                <NavLink
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
                  Contact Us
                </NavLink>
              </div>
            </div>
            <CarouselServices slide={slide} />
          </div>
          <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]">
            *Prices shown are starting prices only and may vary by country,
            specifications, and applicable conditions
          </span>
        </div>
        {/* Services Section End */}
        {/* Platform Section Start */}
        <div
          id="platform"
          className={`min-h-screen relative flex flex-col justify-center items-center py-[10vw] ${margin} overflow-hidden select-none`}
        >
          <img
            className="absolute md:w-[50vw] w-[100vw] md:h-[45vw] h-[100vw] md:translate-x-[17vw] translate-x-[10vw] md:-translate-y-[1vw] translate-y-[25vw] -z-10"
            src={main_img_4}
          />
          <div className="flex md:flex-row flex-col gap-x-[0.1vw] justify-center items-center">
            <div className="flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center">
              <div className="flex md:flex-row flex-col gap-x-[0.5vw] md:gap-y-0 gap-y-[2vw] md:items-start items-center">
                <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF00E5"
                    viewBox="0 0 24 24"
                    strokeWidth={0}
                    stroke="currentColor"
                    className="md:size-[0.5vw] size-[1vw]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  Our Platform
                </span>
                <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#414141] font-normal bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw]">
                  Two proven platforms. One unified solution. That's ShipX.
                </span>
              </div>
              <p className="text-[#1A1A1A] md:text-[2.3vw] text-[6vw] font-bold md:leading-[2.5vw] leading-[7.5vw] md:text-start text-center">
                One window for all your <br />
                cross-border logistics needs
              </p>
              <p className="text-[#63666D] md:text-[0.8vw] text-[2.5vw] font-medium opacity-80 md:text-start text-center md:pt-0 pt-[3vw] md:pb-0 pb-[2vw]">
                ShipX Brings Together Modern Cross-Border Platform Technology
                And Tech-
                <br className="md:block hidden" />
                Enabled Logistics Networks Into A Single, Easy-To-Use Solution.
              </p>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white font-medium flex flex-row md:gap-x-[0.5vw] gap-x-[2vw] items-center"
                >
                  <NavLink
                    to=""
                    end
                    className="text-[#4F378A]"
                  >
                    Book a Demo
                  </NavLink>
                </HoverBorderGradient>
                {/* <div
                  className="
                    bg-gradient-to-t from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                    bg-[length:100%_200%] bg-[position:0%_100%]
                    hover:bg-[position:0%_0%]
                    transition-[background-position] duration-1000 ease-in-out
                    md:p-[0.12vw] p-[0.5vw] rounded-[2vw]
                    text-white font-medium
                  "
                >
                  <button
                    className="
                      bg-white cursor-pointer
                      md:py-[0.4vw] py-[0.6vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                      text-[#4F378A] relative z-10
                      border-none
                    "
                    style={{ outline: "none" }}
                  >
                    Book a Demo
                  </button>
                </div> */}
                <NavLink
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
                  Contact Us
                </NavLink>
              </div>
            </div>
            <img
              className="md:w-[35vw] w-[60vw] md:h-[25vw] h-[20vh]"
              src={main_img_2}
            />
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center items-center">
            <div className="flex flex-col justify-center items-center md:rounded-[2vw] rounded-[4vw] md:p-[2vw] p-[5vw] bg-white md:inset-shadow-[0_0_0.5vw_rgba(79,55,138,0.1)] inset-shadow-[0_0_3.5vw_rgba(79,55,138,0.1)]">
              <span className="text-[#4D4D4D] md:text-[0.7vw] text-[2.4vw] font-medium">
                Our Trusted Partners
              </span>
              <div className="relative md:w-[30vw] w-[80vw] h-fit overflow-hidden">
                <div className="flex animate-scroll-right items-center gap-y-[3vw]">
                  {/* Original logos */}
                  <img
                    src={main_logo_2}
                    alt="scrolling"
                    className="md:h-[6vw] h-[10vw] object-contain"
                  />

                  {/* Duplicate logos for seamless loop */}
                  <img
                    src={main_logo_2}
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
                    animation: scrollRight 30s linear infinite;
                    width: max-content; /* ensures no weird shrinking */
                  }
                `}</style>
              </div>
              <div className="relative md:w-[30vw] w-[80vw] h-fit overflow-hidden">
                <div className="flex animate-scroll items-center gap-y-[3vw]">
                  {/* Original logos */}
                  <img
                    src={main_logo_3}
                    alt="scrolling"
                    className="md:h-[6vw] h-[10vw] object-contain"
                  />

                  {/* Duplicate logos for seamless loop */}
                  <img
                    src={main_logo_3}
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
                    animation: scroll 35s linear infinite;
                    width: max-content; /* ensures no weird shrinking */
                  }
                `}</style>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-medium md:w-[35vw] w-[80vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pl-[5vw] pl-0 md:pr-[10vw] pr-0 md:pb-0 pb-[5vw]">
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_2}
                />
                <p className="pl-[1vw]">
                  Manage Orders And Shipments Across{" "}
                  <br className="md:block hidden" />
                  ASEAN and Global Destinations
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_9}
                />
                <p className="pl-[1vw]">
                  Integrate Marketplaces Like Amazon,{" "}
                  <br className="md:block hidden" />
                  Shopee, Lazada, eBay, and Shopify
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_7}
                />
                <p className="pl-[1vw]">
                  Track Performance In Real Time, With{" "}
                  <br className="md:block hidden" />
                  Visibility Across Every Step
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_6}
                />
                <p className="pl-[1vw]">
                  Access Warehousing, Fulfillment, Freight,{" "}
                  <br className="md:block hidden" />
                  And Delivery From One Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Platform Section End */}
        {/* Freight & Customs Section Start */}
        <div className={`flex flex-col gap-y-[2vw] ${margin} select-none`}>
          <div className="flex md:flex-row flex-col justify-between items-center gap-x-[5vw]">
            <div className="flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center">
              <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FF00E5"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="md:size-[0.5vw] size-[1vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                Global Freight, Customs & Fulfillment Solutions
              </span>
              <p className="md:text-[2.3vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-bold md:leading-[2.5vw] leading-[6.5vw]">
                <p className="inline text-[#FF00E5]">Seamless</p> Trade{" "}
                <br className="md:block hidden" />
                Across Borders
              </p>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="bg-white font-medium"
                >
                  <NavLink
                    to=""
                    end
                    className="text-[#4F378A]"
                  >
                    Book a Demo
                  </NavLink>
                </HoverBorderGradient>
                {/* <div
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
                      bg-white cursor-pointer
                      md:py-[0.4vw] py-[0.6vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                      text-[#4F378A] relative z-10
                      border-none
                    "
                    style={{ outline: "none" }}
                  >
                    Book a Demo
                  </button>
                </div> */}
                <NavLink
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
                  Contact Us
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[5vw]">
              <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[5vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2.5vw] pl-[5vw] md:pr-0 pr-[5vw] md:py-0 py-[5vw]">
                <div className="flex flex-col">
                  <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 py-[0.2vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4F378A"
                      viewBox="0 0 24 24"
                      strokeWidth={0}
                      stroke="currentColor"
                      className="md:size-[0.7vw] size-[1.1vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    Freight & Customs
                  </span>
                  <p className="md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-bold md:leading-[2.5vw] leading-[5vw]">
                    <p className="inline text-[#FF00E5]">Flexible</p> freight
                    and clearance <br />
                    <p className="inline text-[#FF00E5]">services</p> for
                    regional & global trade
                  </p>
                </div>
                <img
                  className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                  src={main_img_5}
                />
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]">
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_10}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Multimodal Transport <br />
                    <p className="text-[#63666D] text-normal">
                      sea, air, road & <br className="md:block hidden" />
                      combined logistics
                    </p>
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_11}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Cross-Border Trucking <br />
                    <p className="text-[#63666D] text-normal">
                      bonded-lanes (VN-SG, TH-VN)
                    </p>
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_12}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Customs Solutions <br />
                    <p className="text-[#63666D] text-normal">
                      clearance, IOSS/VAT, duty{" "}
                      <br className="md:block hidden" />
                      management
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[5vw]">
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]">
              <div className="flex md:flex-row flex-col-reverse justify-start md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[5vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:p-0 p-[5vw]">
                <img
                  className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                  src={main_img_6}
                />
                <div className="flex flex-col">
                  <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 py-[0.2vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4F378A"
                      viewBox="0 0 24 24"
                      strokeWidth={0}
                      stroke="currentColor"
                      className="md:size-[0.7vw] size-[1.1vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    Warehousing & Fulfillment
                  </span>
                  <p className="md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-bold md:leading-[2.5vw] leading-[5vw]">
                    <p className="inline text-[#FF00E5]">Strategic hubs</p>{" "}
                    across Vietnam, <br />
                    Thailand, Singapore, and Malaysia
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]">
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_13}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Inventory Services <br />
                    <p className="text-[#63666D] text-normal">
                      storage, pick & pack, returns{" "}
                      <br className="md:block hidden" />
                      management
                    </p>
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_14}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Seamless Integrations <br />
                    <p className="text-[#63666D] text-normal">
                      Shopify, Shopee, Lazada, eBay,{" "}
                      <br className="md:block hidden" />
                      Amazon
                    </p>
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]">
                  <img
                    className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                    src={main_icon_15}
                  />
                  <p className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                    Regional Advantage <br />
                    <p className="text-[#63666D] text-normal">
                      optimized location for <br className="md:block hidden" />
                      fast fulfillment
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:pt-0 pt-[10vw]">
              <p className="text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90">
                Trusted Infrastructure And Smart{" "}
                <br className="md:block hidden" />
                Integrations That Make International{" "}
                <br className="md:block hidden" />
                Growth Simpler And Faster
              </p>
            </div>
          </div>
        </div>
        {/* Freight & Customs Section End */}
        {/* Offices Section Start */}
        <div
          id="network"
          className={`md:min-h-screen h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:${margin} px-0`}
        >
          <img
            src={main_svg_10}
            alt=""
            className="absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
          <div className={`flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full md:px-0 ${margin}`}>
            <p className="md:text-[2.3vw] text-[5vw] md:text-start text-center font-bold md:leading-[3.5vw] leading-[5.5vw]">
              Local presence, global corridors{" "}
              <br className="md:block hidden" />—{" "}
              <p className="inline text-[#FF00E5]">the ShipX advantage</p>
            </p>
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]">
              <div className="flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]">
                <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={0}
                    stroke="currentColor"
                    className="md:size-[0.5vw] size-[1vw]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  Our Offices
                </span>
                <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-white font-medium"
                  >
                    <NavLink
                      to=""
                      end
                      className="text-[#4F378A]"
                    >
                      Book a Demo
                    </NavLink>
                  </HoverBorderGradient>
                  {/* <div
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
                        bg-white
                        md:py-[0.4vw] py-[0.6vw] md:px-[1.5vw] px-[3vw] md:rounded-[2vw] rounded-[1.5vw] font-medium
                        text-[#4F378A] relative z-10
                        border-none cursor-pointer
                      "
                      style={{ outline: "none" }}
                    >
                      Book a Demo
                    </button>
                  </div> */}
                  <NavLink
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
                    Contact Us
                  </NavLink>
                </div>
              </div>
              <p className="text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw]">
                Our Network Of Regional Hubs And Domain Experts Ensures <br />
                Your Business Thrives Globally, Without Losing Its Local Edge
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center md:pt-0 pt-[5vw]">
            <div className="flex md:flex-col flex-wrap md:justify-normal justify-center md:gap-y-[1.5vw] gap-y-[3vw] md:gap-x-0 gap-x-[3vw] md:pl-[8vw] pl-0">
              <TooltipCard
                image={main_icon_20}
                country_name={`Singapore`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    60 Kaki Bukit Place, Eunos <br className="md:block hidden" />
                    Techpark #03-19, S415979
                  </span>
                }
                contact_number={`(+65) 9001 9941`}
                email={`contact.sg@shipx.asia`}
              />
              <TooltipCard
                image={main_icon_21}
                country_name={`Thailand`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    450/2 Boonyasathit Building,
                    <br className="md:block hidden" />
                    2th Floor, Rama III Rd.,
                    <br className="md:block hidden" />
                    Bangkok 10120
                  </span>
                }
                contact_number={`(+65) 96 798 8971`}
                email={`contact.th@amilo.co`}
              />
              <TooltipCard
                image={main_icon_22}
                country_name={`Vietnam`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    350 National Highway 1A, Binh
                    <br className="md:block hidden" />
                    Hung Hoa B, Binh Tan, Ho Chi
                    <br className="md:block hidden" />
                    Minh
                  </span>
                }
                contact_number={`(+84) 90 270 23 45`}
                email={`contact.vn@amilo.co`}
              />
              <TooltipCard
                image={main_icon_18}
                country_name={`Malaysia`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    Suite 5.03 Level 5 Block, Bangunan Pan Global, 1A, Jln Tandang, Seksyen 51, 46050 Petaling Jaya, Selangor
                  </span>
                }
                contact_number={`(+60) 12 525 5019`}
                email={`contact.my@amilo.co`}
              />
              <TooltipCard
                image={main_icon_17}
                country_name={`Indonesia`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    Jl. KH Mas Mansyur No. 119 <br className="md:block hidden" />- 121. Nyamplungan
                    Kecamatan
                    <br className="md:block hidden" />
                    Pabean Cantikan, Surabaya
                  </span>
                }
                contact_number={`(+60) 12 525 5019`}
                email={`contact.my@amilo.co`}
              />
              <TooltipCard
                image={main_icon_19}
                country_name={`Philippines`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    60 Kaki Bukit Place, Eunos <br className="md:block hidden" />
                    Techpark #03-19, S415979
                  </span>
                }
                contact_number={`(+65) 9001 9941`}
                email={`contact.sg@shipx.asia`}
              />
              <TooltipCard
                image={main_icon_16}
                country_name={`United States`}
                description={
                  <span className="text-[#757577] md:text-[0.7vw] text-[2vw]">
                    60 Kaki Bukit Place, Eunos <br className="md:block hidden" />
                    Techpark #03-19, S415979
                  </span>
                }
                contact_number={`(+65) 9001 9941`}
                email={`contact.sg@shipx.asia`}
              />
            </div>
            {/* Map Image */}
            <div
              className="flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[130vw_120vw] bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${main_svg_6})`}}
            >
            </div>
            {/* <img className="md:w-[60vw] w-full h-full" src={main_svg_6} /> */}
          </div>
        </div>
        {/* Offices Section End */}
        {/* Contact Us Section Start */}
        <div
          id="contact-us"
          className="relative flex flex-col justify-center items-center md:pt-[15vw] pt-[10vw] overflow-hidden"
        >
          <img
            src={main_svg_7}
            alt=""
            className="absolute md:-translate-y-[17vw] -translate-y-[65vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none z-10"
            aria-hidden="true"
          />
          <img
            src={main_svg_7}
            alt=""
            className="absolute translate-x-[30vw] md:-translate-y-[5vw] -translate-y-[50vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10"
            aria-hidden="true"
          />
          <span className="flex flex-row gap-x-[0.5vw] items-center md:text-[0.8vw] text-[2.2vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-[1.5vw] py-[0.2vw] cursor-pointer select-none z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF00E5"
              viewBox="0 0 24 24"
              strokeWidth={0}
              stroke="currentColor"
              className="md:size-[0.5vw] size-[1vw]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Contact Us
          </span>
          <p className="md:text-[2.3vw] text-[5vw] text-[#1A1A1A] text-center font-bold md:leading-[2.5vw] leading-[5.5vw] mt-[1vw] md:mb-[8vw] mb-[15vw] select-none z-20">
            Ready to take your products{" "}
            <p className="inline text-[#FF00E5]">global?</p> <br />
            Let's talk.
          </p>
          <div className="relative flex md:flex-row flex-col-reverse justify-start items-center gap-x-[5vw] md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[10vw] pl-[15vw] pr-[8vw] py-[8vw] rounded-t-[2vw] md:w-[70vw] w-[90vw] bg-white z-10">
            <img
              src={main_svg_8}
              alt=""
              className="absolute md:-translate-x-[44vw] -translate-x-[60vw] -translate-y-[0vw] w-[200vw] md:h-[29vw] h-[120vw] pointer-events-none select-none z-0"
              aria-hidden="true"
            />
            <div className="flex flex-col md:w-[20vw] w-full md:text-[0.8vw] text-[2.3vw] md:pt-0 pt-[10vw]">
              <span className="text-[#0E0E0E] md:text-[1.5vw] text-[4vw] font-bold select-none">
                Contact Information
              </span>
              <span className="text-black md:text-[0.9vw] text-[2.5vw] font-normal mt-[1vw] select-none">
                Let's partner and grow
              </span>
              <div className="flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[5vw] md:mt-[3vw] mt-[5vw] md:gap-x-0 gap-x-[5vw]">
                {/* Contact Number */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF00E5"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF00E5"
                    className="md:size-[1vw] size-[3vw]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>
                  <span className="md:pl-[1vw] pl-[3vw]">+1012 3456 789</span>
                </div>
                {/* Email Address */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF00E5"
                    className="md:size-[1vw] size-[3vw]"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span className="md:pl-[1vw] pl-[3vw]">info@shipx.asia</span>
                </div>
                {/* Address */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF00E5"
                    className="md:size-[1vw] size-[3vw]"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="md:pl-[1vw] pl-[3vw]">
                    391B Orchard Road #22, <br />
                    Ngee Ann City Singapore, 238874
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
        {/* Contact Us Section End */}
      </div>
    </div>
  );
};

export default Main;

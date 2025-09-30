import {
  main_svg_2,
  main_svg_3,
  main_svg_4,
  main_svg_5,
  main_svg_6,
  main_svg_7,
  main_svg_8,
  main_svg_10,
  main_svg_13,
  main_icon_1,
  main_icon_2,
  main_icon_3,
  main_icon_4,
  main_icon_5,
  main_icon_6,
  main_icon_7,
  main_icon_8,
  main_icon_9,
  main_img_2,
  main_img_4,
  main_img_5,
  main_img_6,
  main_logo_2,
  main_logo_3,
} from "../../assets/assets";

import { useState } from "react";
import { offices, services, services_2 } from "../utils/constants";
import { NavLink } from "react-router-dom";
import * as motion from "motion/react-client";

import ContactForm from "./ui/ContactForm";
import NewsletterForm from "./ui/NewsletterForm";
import Carousel from "./ui/CarouselNav";
import CarouselServices from "./ui/CarouselServices";
import Counter from "./ui/Counter";
import TooltipCard from "./ui/ToolTipCard";

import { useTranslation } from "react-i18next";

const Main = ({ margin }) => {
  const { t } = useTranslation();
  const [slide, setSlide] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

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
          className={`relative flex md:flex-row flex-col-reverse justify-center items-center gap-x-[3vw] md:gap-y-0 gap-y-[10vw] md:pt-[15vw] pt-[40vw] md:pb-[5vw] pb-[30vw] overflow-hidden select-none ${margin}`}
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
          <div className={`flex flex-row md:gap-x-[0.5vw] gap-x-[0.5vw]`}>
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(t("statistics_section.customers_number"))}
                    duration={5}
                  />
                  +
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.customers_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(t("statistics_section.global_partners_number"))}
                    duration={5}
                  />
                  +
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.global_partners_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(
                      t("statistics_section.countries_covered_number"),
                    )}
                    duration={5}
                  />
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.countries_covered_label")}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(
                      t("statistics_section.orders_processed_number"),
                    )}
                    decimals={1}
                    duration={5}
                  />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.orders_processed_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(t("statistics_section.tech_warehouses_number"))}
                    duration={5}
                  />
                  +
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.tech_warehouses_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(
                      t("statistics_section.orders_fulfilled_number"),
                    )}
                    duration={5}
                  />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.orders_fulfilled_label")}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-[5vw] justify-center items-center">
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(t("statistics_section.logistics_number"))}
                    duration={5}
                  />
                  +
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.logistics_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Counter
                    className=""
                    end={Number(t("statistics_section.trucks_number"))}
                    duration={5}
                  />
                  +
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.trucks_label")}
                </span>
              </div>
              <div className="flex flex-col items-center md:w-[15vw] w-[30vw]">
                <span
                  className="md:text-[4vw] text-[8vw] font-bold bg-gradient-to-t from-[#4F378A] to-[#FF00E5] inline-block text-transparent bg-clip-text md:h-[5vw] h-[10vw]"
                  style={{
                    fontFamily:
                      "Kantumruy_Pro, system-ui, -apple-system, sans-serif",
                  }}
                >
                  $
                  <Counter
                    className=""
                    end={Number(t("statistics_section.gmv_number"))}
                    duration={5}
                  />
                  M+
                </span>
                <span className="md:text-[0.8vw] text-[2vw] text-center text-[#1A1A1A] font-medium">
                  {t("statistics_section.gmv_label")}
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            <div className="flex flex-col md:items-start items-center md:gap-y-[0.5vw] gap-y-[1.5vw]">
              <span className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#FFD6FA] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]">
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
                {t("statistics_section.badge_1")}
              </span>
              <p className="md:text-[2vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]">
                {t("statistics_section.tagline_1")}&nbsp;
                <br />
                {t("statistics_section.tagline_2")}&nbsp;
                <br className="md:block hidden" />
                {t("statistics_section.tagline_3")}
              </p>
            </div>
          </div>
        </div>
        {/* Statistics Section End */}
        {/* Services Section Start */}
        <div
          id="services"
          className={`md:h-screen h-auto relative flex flex-col md:gap-y-[1vw] gap-y-0 justify-center items-center pt-[5vw] overflow-hidden`}
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
            </p>{" "}
            &ndash;
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_1")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_2")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_3")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_4")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_5")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_6")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_7")}
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
                  <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[2vw] md:pl-[2vw] pl-[1vw]">
                    {t("services_section.link_8")}
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-center items-center select-none">
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
                      {t("services_section.book_a_demo")}
                    </span>
                  </div>
                </motion.button>
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
                  {t("services_section.contact_us")}
                </NavLink>
              </div>
            </div>
            <CarouselServices slide={slide} />
          </div>
          <span className="text-[#63666D] md:text-[0.6vw] text-[2vw] text-center select-none md:pt-0 pt-[3vw]">
            {t("services_section.note")}
          </span>
        </div>
        {/* Services Section End */}
        {/* Platform Section Start */}
        <div
          id="platform"
          className={`min-h-screen relative flex flex-col justify-center items-center py-[10vw] overflow-hidden select-none`}
        >
          <img
            className="absolute md:w-[50vw] w-[80vw] md:h-[45vw] h-[80vw] md:translate-x-[17vw] translate-x-[10vw] md:-translate-y-[1vw] translate-y-[1vw] -z-10"
            src={main_img_4}
          />
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
                      {t("platform_section.book_a_demo")}
                    </span>
                  </div>
                </motion.button>
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
                  {t("platform_section.contact_us")}
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
                {t("platform_section.trusted_by")}
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
                    animation: scrollRight 50s linear infinite;
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
                    animation: scroll 45s linear infinite;
                    width: max-content; /* ensures no weird shrinking */
                  }
                `}</style>
              </div>
            </div>
            <div
              className="flex flex-col justify-start items-center text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-medium md:w-[35vw] w-[80vw] md:gap-y-[1.5vw] gap-y-[4vw] md:pl-[5vw] pl-0 md:pr-[10vw] pr-0 md:pb-0 pb-[5vw]"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_2}
                />
                <p className="pl-[1vw]">
                  {t("platform_section.info_1")}{" "}
                  <br className="md:block hidden" />
                  {t("platform_section.info_1_1")}
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_9}
                />
                <p className="pl-[1vw]">
                  {t("platform_section.info_2")}{" "}
                  <br className="md:block hidden" />
                  {t("platform_section.info_2_1")}
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_7}
                />
                <p className="pl-[1vw]">
                  {t("platform_section.info_3")}{" "}
                  <br className="md:block hidden" />
                  {t("platform_section.info_3_1")}
                </p>
              </div>
              <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] items-center w-full">
                <img
                  className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                  src={main_icon_6}
                />
                <p className="pl-[1vw]">
                  {t("platform_section.info_4")}{" "}
                  <br className="md:block hidden" />
                  {t("platform_section.info_4_1")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Platform Section End */}
        {/* Freight & Customs Section Start */}
        <div
          className={`flex flex-col md:gap-y-[2vw] gap-y-0 ${margin} select-none`}
        >
          <div className="flex md:flex-row flex-col justify-between items-center gap-x-[5vw]">
            <div className="flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center md:w-[21vw] w-auto">
              <span
                className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw]"
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
                {t("freight_section.badge_1")}
              </span>
              <p
                className="md:text-[2.3vw] text-[6vw] text-[#1A1A1A] md:text-start text-center font-semibold md:leading-[2.5vw] leading-[6.5vw]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                <p className="inline text-[#FF00E5]">
                  {t("freight_section.header_1")}
                </p>
                &nbsp;{t("freight_section.header_2")}{" "}
                <br className="md:block hidden" />
                {t("freight_section.header_3")}
              </p>
              <div
                className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
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
                      {t("freight_section.book_a_demo")}
                    </span>
                  </div>
                </motion.button>
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
                  {t("freight_section.contact_us")}
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]">
              <div
                className="flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2.5vw] pl-[5vw] md:pr-0 pr-[5vw] md:py-0 py-[5vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
                <div className="flex flex-col">
                  <span className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4F378A"
                      viewBox="0 0 24 24"
                      strokeWidth={0}
                      stroke="currentColor"
                      className="md:size-[0.7vw] size-[1.5vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    {t("freight_section.badge_2")}
                  </span>
                  <p className="md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw]">
                    <p className="inline text-[#FF00E5]">
                      {t("freight_section.header_4")}
                    </p>
                    &nbsp;
                    {t("freight_section.header_5")}&nbsp;
                    <br className="md:block hidden" />
                    <p className="inline text-[#FF00E5]">
                      {t("freight_section.header_6")}
                    </p>
                    &nbsp;
                    {t("freight_section.header_7")}
                  </p>
                </div>
                <img
                  className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                  src={main_img_5}
                />
                {/* Collapsible Area */}
                <div className="md:hidden flex flex-col justify-start items-start w-full mt-[1vw]">
                  {/* Button */}
                  <button
                    onClick={() => setIsOpen1(!isOpen1)}
                    className="w-full text-[#1A1A1A] text-[2.4vw] text-center transition"
                  >
                    {isOpen1 ? (
                      <span className="font-medium">
                        {t("freight_section.collapsible_text_opened_1")}
                      </span>
                    ) : (
                      <span className="font-medium">
                        {t("freight_section.collapsible_text_closed_1")}
                      </span>
                    )}
                  </button>

                  {/* Collapsible Content */}
                  <motion.div initial={false}>
                    {isOpen1 && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 10,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]"
                          style={{
                            fontFamily:
                              "Inter, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {services.map((service, index) => (
                            <div
                              key={index}
                              className="flex flex-row justify-start items-center"
                            >
                              <img
                                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                                src={service.icon}
                                alt={t(
                                  `freight_section.services_1.${service.key}.title`,
                                )}
                              />
                              <div className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                                {t(
                                  `freight_section.services_1.${service.key}.title`,
                                )}{" "}
                                <br />
                                <p className="text-[#63666D] text-normal">
                                  {t(
                                    `freight_section.services_1.${service.key}.description_1`,
                                  )}{" "}
                                  <br className="md:block hidden" />
                                  {t(
                                    `freight_section.services_1.${service.key}.description_2`,
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
              <div
                className="md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw]"
                  >
                    <img
                      className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                      src={service.icon}
                      alt={t(`freight_section.services_1.${service.key}.title`)}
                    />
                    <div className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                      {t(`freight_section.services_1.${service.key}.title`)}{" "}
                      <br />
                      <p className="text-[#63666D] text-normal">
                        {t(
                          `freight_section.services_1.${service.key}.description`,
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-x-[5vw]">
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]">
              <div
                className="flex md:flex-row flex-col-reverse justify-start md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:p-0 p-[5vw]"
                style={{
                  fontFamily: "Karla, system-ui, -apple-system, sans-serif",
                }}
              >
                {/* Collapsible Area */}
                <div className="md:hidden flex flex-col justify-start items-start w-full mt-[1vw]">
                  {/* Button */}
                  <button
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="w-full text-[#1A1A1A] text-[2.4vw] text-center transition"
                  >
                    {isOpen2 ? (
                      <span className="font-medium">
                        {t("freight_section.collapsible_text_opened_2")}
                      </span>
                    ) : (
                      <span className="font-medium">
                        {t("freight_section.collapsible_text_closed_2")}
                      </span>
                    )}
                  </button>

                  {/* Collapsible Content */}
                  <motion.div initial={false}>
                    {isOpen2 && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 10,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="flex md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[5vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]"
                          style={{
                            fontFamily:
                              "Inter, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {services_2.map((service, index) => (
                            <div
                              key={index}
                              className="flex flex-row justify-start items-center"
                            >
                              <img
                                className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                                src={service.icon}
                                alt={t(
                                  `freight_section.services_2.${service.key}.title`,
                                )}
                              />
                              <div className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                                {t(
                                  `freight_section.services_2.${service.key}.title`,
                                )}{" "}
                                <br />
                                <p className="text-[#63666D] text-normal">
                                  {t(
                                    `freight_section.services_2.${service.key}.description`,
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                <img
                  className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                  src={main_img_6}
                />
                <div className="flex flex-col">
                  <span className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#4F378A] font-semibold bg-transparent md:rounded-[0.5vw] rounded-[1vw] md:px-[0.5vw] px-0 md:py-[0.2vw] py-[0.5vw]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#4F378A"
                      viewBox="0 0 24 24"
                      strokeWidth={0}
                      stroke="currentColor"
                      className="md:size-[0.7vw] size-[1.5vw]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                    {t("freight_section.badge_3")}
                  </span>
                  <p className="md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw]">
                    <p className="inline text-[#FF00E5]">
                      {t("freight_section.header_8")}
                    </p>{" "}
                    {t("freight_section.header_9")}&nbsp;
                    <br className="md:block hidden" />
                    {t("freight_section.header_10")}
                  </p>
                </div>
              </div>
              <div
                className="md:flex hidden md:flex-row flex-col justify-between gap-x-[1.5vw] md:gap-y-0 gap-y-[3vw] md:text-[0.8vw] text-[2.4vw] md:pt-0 pt-[3vw]"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                {services_2.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center 
                              md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] 
                              shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] 
                              md:pl-[2vw] pl-[5vw] pr-[3.5vw] 
                              md:py-[1.5vw] py-[3vw] 
                              rounded-[1.5vw]"
                  >
                    <img
                      className="md:w-[2vw] w-[4vw] md:h-[2vw] h-[4vw]"
                      src={service.icon}
                      alt={t(`freight_section.services_2.${service.key}.title`)}
                    />
                    <div className="font-semibold text-start md:pl-[1.5vw] pl-[3vw]">
                      {t(`freight_section.services_2.${service.key}.title`)}{" "}
                      <br />
                      <p className="text-[#63666D] text-normal">
                        {t(
                          `freight_section.services_2.${service.key}.description`,
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:pt-0 pt-[10vw] md:w-[21vw] w-auto">
              <p
                className="text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                {t("freight_section.header_11")}{" "}
                <br className="md:block hidden" />
                {t("freight_section.header_12")}{" "}
                <br className="md:block hidden" />
                {t("freight_section.header_13")}
              </p>
            </div>
          </div>
        </div>
        {/* Freight & Customs Section End */}
        {/* Offices Section Start */}
        <div
          id="network"
          className={`md:min-h-screen h-auto relative flex flex-col justify-center items-center pt-[16vw] overflow-hidden select-none md:px-[8vw] px-[5vw]`}
        >
          <img
            src={main_svg_10}
            alt=""
            className="absolute translate-x-[36vw] -translate-y-[18vw] w-[200vw] md:h-[43vw] h-[83vw] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
          <div
            className={`flex md:flex-row flex-col gap-x-[2vw] justify-center items-center w-full`}
          >
            <p className="text-[#1A1A1A] md:text-[2.3vw] text-[6vw] md:text-start text-center font-semibold md:leading-[3.5vw] leading-[6.5vw]">
              {t("offices_section.header_1")} <br className="md:block hidden" />
              {t("offices_section.header_2")}{" "}
              <p className="inline text-[#FF00E5]">
                {t("offices_section.header_3")}
              </p>
            </p>
            <div className="flex flex-col gap-y-[1vw] md:pt-0 pt-[3vw]">
              <div className="flex flex-row md:justify-start justify-center md:gap-x-[3vw] gap-x-[10vw]">
                <span className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.7vw] text-[2.6vw] text-white font-semibold bg-[#4F378A] md:rounded-[0.5vw] rounded-[2vw] md:px-[0.8vw] px-[1.8vw] py-[0.2vw]">
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
                  <motion.button
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
                      <span className="text-[#4F378A] font-semibold">
                        {t("offices_section.book_a_demo")}
                      </span>
                    </div>
                  </motion.button>
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
                    {t("offices_section.contact_us")}
                  </NavLink>
                </div>
              </div>
              <p className="text-[#63666D] md:text-[0.85vw] text-[2.5vw] font-medium opacity-80 tracking-wider md:pt-0 pt-[2vw]">
                {t("offices_section.description_1")}&nbsp;
                <br />
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
              className="flex md:w-[60vw] w-[100vw] md:h-[40vw] h-[75vw] md:bg-size-[auto_47vw] bg-size-[130vw_120vw] bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${main_svg_6})` }}
            ></div>
          </div>
        </div>
        {/* Offices Section End */}
        {/* Contact Us Section Start */}
        <div
          id="contact-us"
          className="relative flex flex-col justify-center items-center md:pt-[0.5vw] pt-[1vw] overflow-hidden"
        >
          <img
            src={main_svg_7}
            alt=""
            className="absolute md:-translate-y-[2vw] -translate-y-[35vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
          <img
            src={main_svg_7}
            alt=""
            className="absolute translate-x-[30vw] md:translate-y-[10vw] -translate-y-[15vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10"
            aria-hidden="true"
          />
          {/* Future Announcements Banner Start */}
          <div
            className={`flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-x-[5vw] gap-x-[11vw] bg-gradient-to-r from-[#4F378A] from-5% to-[#FF00E5] to-100% md:rounded-[2vw] rounded-[4vw] md:pl-[8vw] pl-[5vw] md:pt-0 pt-[5vw] md:pb-0 pb-[5vw] md:pr-0 pr-[5vw] md:my-[5vw] my-[10vw] md:w-[70vw] w-[90vw]`}
          >
            <div className="flex flex-col">
              <span
                className="text-[#FFFFFF] md:text-[2.3vw] text-[6vw] font-semibold md:text-start text-center"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                {t("newsletter_section.header_1")}
              </span>
              <p className="text-[#FFFFFF] md:text-[0.85vw] text-[2.5vw] md:text-start text-center md:pt-[0.5vw] pt-[2vw]">
                {t("newsletter_section.description_1")}
                <br className="md:block hidden" />
                {t("newsletter_section.description_2")}
              </p>
              <NewsletterForm />
            </div>
            <div className="flex flex-col">
              <div
                className="md:flex hidden md:w-[25vw] w-[80vw] md:h-[15vw] h-[30vw] md:bg-size-[25vw_15vw] bg-size-[100vw_50vw] bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${main_svg_13})` }}
              ></div>
            </div>
          </div>
          {/* Future Announcements Banner End */}
          <span
            className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] cursor-pointer select-none z-20 md:mt-[5vw] mt-0"
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
            {t("contact_us_section.badge_1")}
          </span>
          <p
            className={`md:text-[2.3vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] mt-[1vw] md:mb-[8vw] mb-[15vw] select-none z-20 md:px-0 px-[5vw]`}
            style={{
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            {t("contact_us_section.header_1")}{" "}
            <p className="inline text-[#FF00E5]">
              {t("contact_us_section.header_2")}
            </p>{" "}
            <br className="md:block hidden" />
            {t("contact_us_section.header_3")}
          </p>
          <div className="relative flex md:flex-row flex-col-reverse justify-start items-center gap-x-[5vw] md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[10vw] pl-[15vw] pr-[8vw] py-[8vw] rounded-t-[2vw] md:w-[70vw] w-[90vw] bg-white z-10">
            <img
              src={main_svg_8}
              alt=""
              className="absolute md:-translate-x-[44vw] -translate-x-[65vw] md:-translate-y-0 translate-y-[5vw] w-[200vw] md:h-[29vw] h-[145vw] pointer-events-none select-none z-0"
              aria-hidden="true"
            />
            <div
              className="flex flex-col md:w-[20vw] w-full md:text-[0.8vw] text-[2.5vw] md:pt-0 pt-[10vw]"
              style={{
                fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="text-[#0E0E0E] md:text-[1.5vw] text-[5vw] font-semibold select-none">
                {t("contact_us_section.header_4")}
              </span>
              <span className="text-black md:text-[0.9vw] text-[3vw] font-normal mt-[1vw] select-none">
                {t("contact_us_section.subheader_1")}
              </span>
              <div className="flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[5vw] md:mt-[3vw] mt-[10vw] md:gap-x-0 gap-x-[5vw]">
                {/* Contact Number */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF00E5"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF00E5"
                    className="md:size-[1vw] size-[4.5vw]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>
                  <span className="md:pl-[1vw] pl-[3vw]">
                    {t("contact_us_section.number")}
                  </span>
                </div>
                {/* Email Address */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF00E5"
                    className="md:size-[1vw] size-[4.5vw]"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span className="md:pl-[1vw] pl-[3vw]">
                    {t("contact_us_section.email")}
                  </span>
                </div>
                {/* Address */}
                <div className="flex flex-row items-center w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF00E5"
                    className="md:size-[1vw] size-[4.5vw]"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="md:pl-[1vw] pl-[3vw]">
                    {t("contact_us_section.address_1")}&nbsp;
                    <br />
                    {t("contact_us_section.address_2")}
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

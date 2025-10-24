import { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { button as MotionButton } from "motion/react-client";
import { margin, services, services_2 } from "../../utils/constants";
import SmartNavLink from "./SmartNavLink";
const ParallaxSection = lazy(() => import("./ParallaxSection"));

const FreightAndCustoms = () => {
  const { t, i18n } = useTranslation();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <ParallaxSection>
      <div
        className={`flex flex-col md:gap-y-[2vw] gap-y-0 ${margin} select-none`}
      >
        <div className="flex md:flex-row flex-col justify-between items-center gap-x-[5vw]">
          <div
            className={`
                    flex flex-col gap-y-[1vw] md:justify-start justify-center md:items-start items-center w-auto
                    ${
                      i18n.language === "en"
                        ? "md:w-[25vw]"
                        : i18n.language === "vn"
                          ? "md:w-[42vw]"
                          : i18n.language === "my"
                            ? "md:w-[42vw]"
                            : i18n.language === "thai"
                              ? "md:w-[36vw]"
                              : "md:w-[30vw]"
                    }
                  `}
          >
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
              &nbsp;{t("freight_section.header_2")}
              {i18n.language === "en" ? <br className="md:block hidden" /> : ""}
              <span className="md:hidden">&nbsp;</span>
              {t("freight_section.header_3")}
            </p>
            <div
              className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw] font-normal justify-start items-center md:pt-0 pt-[2vw]"
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
                    {t("freight_section.book_a_demo")}
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
                {t("freight_section.contact_us")}
              </SmartNavLink>
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
                  {i18n.language === "en" ? (
                    <br className="md:block hidden" />
                  ) : (
                    ""
                  )}
                  <p className="inline text-[#FF00E5]">
                    {t("freight_section.header_6")}
                  </p>
                  &nbsp;
                  {t("freight_section.header_7")}
                </p>
              </div>
              <img
                className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_5.webp"
                alt="Freight Section - Freight & Customs"
              />
              {/* Collapsible Area */}
              <div className="md:hidden flex flex-col justify-start items-start w-full mt-[1vw]">
                {/* Button */}
                <button
                  type="button"
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
                <div initial={false}>
                  {isOpen1 && (
                    <div
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
                                  `freight_section.services_1.${service.key}.description`,
                                )}{" "}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
                  className={`flex flex-row justify-start items-center md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:pl-[2vw] pl-[5vw] pr-[3.5vw] md:py-[1.5vw] py-[3vw] rounded-[1.5vw] ${i18n.language === "vn" && "w-[18vw]"}`}
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
              className={`
                      flex md:flex-row flex-col-reverse justify-start md:items-center items-start gap-x-[4vw] md:gap-y-0 gap-y-[2vw] rounded-[2vw] md:shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)] shadow-[0_0.5vw_3vw_rgba(79,55,138,0.15)] md:p-0 p-[5vw]
                      ${i18n.language === "thai" && "md:pr-[2vw]"}
                    `}
              style={{
                fontFamily: "Karla, system-ui, -apple-system, sans-serif",
              }}
            >
              {/* Collapsible Area */}
              <div className="md:hidden flex flex-col justify-start items-start w-full mt-[1vw]">
                {/* Button */}
                <button
                  type="button"
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
                <div initial={false}>
                  {isOpen2 && (
                    <div
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
                    </div>
                  )}
                </div>
              </div>
              <img
                className="md:w-[20vw] w-[80vw] md:h-[14vw] h-[50vw] rounded-[2vw] shadow-[0_0.5vw_1vw_rgba(79,55,138,0.075)]"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_6.webp"
                alt="Freight Section - Customs & Fulfillment Solutions"
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
                <p
                  className={`md:text-[1.8vw] text-[4vw] text-[#1A1A1A] text-start font-semibold md:leading-[2.5vw] leading-[5.5vw] ${i18n.language === "vn" && "md:pr-[3vw]"}`}
                >
                  <p className="inline text-[#FF00E5]">
                    {t("freight_section.header_8")}
                  </p>{" "}
                  {t("freight_section.header_9")}&nbsp;
                  {i18n.language === "en" ? (
                    <br className="md:block hidden" />
                  ) : (
                    ""
                  )}
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
          <div
            className={`${i18n.language === "vn" ? "md:w-[30vw]" : "md:w-[21vw]"} flex flex-col md:pt-0 pt-[10vw] w-auto`}
          >
            <p
              className="text-[#63666D] md:text-[1vw] text-[4vw] text-center font-medium italic opacity-90"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("freight_section.header_11")}{" "}
              <br className="md:block hidden" />
              {t("freight_section.header_12")}{" "}
              {i18n.language === "en" ? <br className="md:block hidden" /> : ""}
              {t("freight_section.header_13")}
            </p>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default FreightAndCustoms;

import { lazy } from "react";
import { useTranslation } from "react-i18next";
const ParallaxSection = lazy(() => import("./ParallaxSection"));
const ContactForm = lazy(() => import("./ContactForm"));

const ContactUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="contact-us"
      className="relative flex flex-col justify-center items-center md:pt-[10vw] pt-[1vw] overflow-hidden"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_7.svg"
        alt=""
        className="absolute md:-translate-y-[5vw] -translate-y-[35vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_7.svg"
        alt=""
        className="absolute translate-x-[30vw] md:translate-y-[10vw] -translate-y-[15vw] w-[200vw] md:h-[53vw] h-full pointer-events-none select-none opacity-20 -z-10"
        aria-hidden="true"
      />
      <ParallaxSection>
        <div className="relative flex flex-col md:shadow-[0_0.5vw_2vw_rgba(255,0,229,0.15)] shadow-[0_0.5vw_3vw_rgba(255,0,229,0.25)] md:pl-[8vw] pl-[15vw] pr-[8vw] md:py-[4vw] py-[8vw] md:rounded-t-[2vw] rounded-t-[5vw] md:w-[70vw] w-[90vw] bg-white z-10">
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_svg_8.svg"
            alt=""
            className="absolute md:-translate-x-[43vw] -translate-x-[75vw] md:-translate-y-[2vw] translate-y-[5vw] w-[200vw] md:h-[34vw] h-[145vw] pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <div className="flex flex-col justify-center items-center md:pb-[5vw] pb-[10vw]">
            <span
              className="flex flex-row md:gap-x-[0.5vw] gap-x-[1.5vw] items-center md:text-[0.8vw] text-[2.5vw] text-[#FF00E5] font-semibold bg-[#F3F1FF] md:rounded-[0.5vw] rounded-[1.5vw] md:px-[0.5vw] px-[1.5vw] md:py-[0.2vw] py-[0.5vw] cursor-pointer select-none z-20 w-fit"
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
              className={`md:text-[2.3vw] text-[6vw] text-[#1A1A1A] text-center font-semibold md:leading-[2.5vw] leading-[6.5vw] mt-[1vw] select-none z-20 ${i18n.language === "vn" ? "" : "md:px-0 px-[5vw]"}`}
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              {t("contact_us_section.header_1")}{" "}
              <p className="inline text-[#FF00E5]">
                {t("contact_us_section.header_2")}
              </p>{" "}
              {i18n.language === "en" ? <br className="md:block hidden" /> : ""}
              {t("contact_us_section.header_3")}
            </p>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-x-[3vw]">
            <div
              className="flex flex-col md:w-[23vw] w-full md:text-[0.8vw] text-[2.5vw] md:pt-0 pt-[10vw]"
              style={{
                fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
              }}
            >
              <span className="text-[#0E0E0E] md:text-[1.7vw] text-[5vw] font-semibold select-none">
                {t("contact_us_section.header_4")}
              </span>
              <span className="text-black md:text-[0.9vw] text-[3vw] font-normal mt-[1vw] select-none">
                {t("contact_us_section.subheader_1")}
              </span>
              <div className="flex md:flex-col flex-wrap md:gap-y-[1vw] gap-y-[5vw] md:mt-[3vw] mt-[10vw] md:gap-x-0 gap-x-[5vw]">
                {/* Contact Number */}
                {/* <div className="flex flex-row items-center w-fit">
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
                        <a
                          href={`tel:${t("contact_us_section.number")}`}
                          className="md:pl-[1vw] pl-[3vw]"
                        >
                          {t("contact_us_section.number")}
                        </a>
                      </div> */}
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
                  <a
                    href={`mailto:${t("contact_us_section.email")}`}
                    className="md:pl-[1vw] pl-[3vw]"
                  >
                    {t("contact_us_section.email")}
                  </a>
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
      </ParallaxSection>
    </div>
  );
};

export default ContactUs;

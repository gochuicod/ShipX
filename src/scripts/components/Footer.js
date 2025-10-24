import { button as MotionButton } from "motion/react-client";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import SmartNavLink from "./ui/SmartNavLink";

const Footer = memo(() => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col justify-center bg-gradient-to-t from-[#4F378A] from-10% to-[rgb(255,0,229)] text-white px-[6vw] md:py-[1.5vw] py-[3vw] md:text-[0.8vw] text-[2.6vw]">
      <div className="flex md:flex-row flex-col justify-between">
        {/* Description */}
        <div
          className="flex flex-col md:gap-y-[1vw] gap-y-[3vw] justify-start md:w-[40%] w-full"
          style={{ fontFamily: "Karla, system-ui, -apple-system, sans-serif" }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row md:gap-x-[0.5vw] gap-x-[1vw] justify-start items-center">
              <img
                loading="lazy"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo_white.svg"
                alt="ShipX Logo"
                className="md:w-[5vw] w-[20vw] md:h-[2.5vw] h-[10vw]"
              />
              <img
                loading="lazy"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/sglink_amilo_logo_white.svg"
                alt="SGLink Logo"
                className="md:w-[5vw] w-[22vw] md:h-[1.5vw] h-[6vw]"
              />
            </div>
            <span className="md:text-[1vw] text-[3.5vw]">
              {t("footer.tagline")}
            </span>
            <p className="mt-[0.8vw]">
              {t("footer.description_1")}&nbsp;
              <br />
              {t("footer.description_2")}
            </p>
          </div>
          <div className="flex flex-row md:gap-x-[1vw] gap-x-[3vw] md:text-[0.8vw] text-[2.6vw]">
            <div className="flex flex-col relative overflow-hidden md:p-[0.10vw] p-[0.5vw]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#4F378A] to-[#FF00E5] rounded-full" />
              <SmartNavLink to="/book-a-demo" end>
                <button
                  type="button"
                  className={`relative flex flex-row items-center justify-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-[#8E3CAD] rounded-full text-white transition-all duration-300 hover:bg-[#A24BD0] focus:outline-none cursor-pointer`}
                >
                  {t("footer.book_a_demo")}
                </button>
              </SmartNavLink>
            </div>
            <SmartNavLink to="/#contact-us" end>
              <MotionButton
                type="button"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="bg-white text-[#FF00E5] font-bold md:py-[0.5vw] py-[1vw] md:px-[1.5vw] px-[3vw] rounded-full cursor-pointer"
              >
                {t("footer.contact_us")}
              </MotionButton>
            </SmartNavLink>
          </div>
        </div>
        {/* Links */}
        <div
          className="flex flex-row justify-end gap-x-[4vw] md:w-[60%] w-full md:pt-0 py-[5vw]"
          style={{ fontFamily: "Karla, system-ui, -apple-system, sans-serif" }}
        >
          <div className="flex flex-col gap-y-[1vw]">
            <SmartNavLink
              to="/"
              end
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("footer.home")}
            </SmartNavLink>
            <SmartNavLink to="/#services" end>
              {t("footer.services")}
            </SmartNavLink>
            <SmartNavLink to="/#platform" end>
              {t("footer.platform")}
            </SmartNavLink>
            <SmartNavLink to="/#network" end>
              {t("footer.network")}
            </SmartNavLink>
          </div>
          <div className="flex flex-col gap-y-[1vw]">
            <SmartNavLink to="/#contact-us" end>
              {t("footer.contact")}
            </SmartNavLink>
            <SmartNavLink to="/privacy-policy" end>
              {t("footer.privacy_policy")}
            </SmartNavLink>
            <SmartNavLink to="/terms-and-conditions" end>
              {t("footer.terms_and_conditions")}
            </SmartNavLink>
          </div>
          <div className="flex flex-col gap-y-[1vw] md:w-[15vw]">
            <span className="font-medium">{t("footer.reach_us_1")}</span>
            {/* Contact Number */}
            {/* <div className="flex flex-row items-center md:pl-[1vw] pl-[3vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:size-[1vw] size-[4vw]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                />
              </svg>
              <a href="tel:+841900633027" className="md:pl-[1vw] pl-[3vw]">
                {t("footer.reach_us_2")}
              </a>
            </div> */}
            {/* Email Address */}
            <div className="flex flex-row items-center md:pl-[1vw] pl-[3vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:size-[1vw] size-[4vw]"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <a
                href={`mailto:${t("footer.reach_us_3")}`}
                className="md:pl-[1vw] pl-[3vw]"
              >
                {t("footer.reach_us_3")}
              </a>
            </div>
            {/* Address */}
            <div className="flex flex-row items-center md:pl-[1vw] pl-[3vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="md:size-[1.5vw] size-[4vw]"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="md:pl-[1vw] pl-[3vw]">
                {t("footer.reach_us_4")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <span
        className="text-center md:pt-0 pt-[2vw]"
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        &copy; {new Date().getFullYear()} {t("footer.copyright")}
      </span>
    </footer>
  );
});

export default Footer;

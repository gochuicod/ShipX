import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { shipx, sglink, main_img_14 } from "../../assets/assets";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constants";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Portal,
} from "@headlessui/react";

const linkClass =
  "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  const [selected, setSelected] = useState(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return (
      languages.find((language) => language.key === current) || languages[0]
    );
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 select-none">
      <div
        className={`${bannerOpen ? "block" : "hidden"} overflow-hidden relative isolate flex items-center gap-x-6 bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px sm:px-3.5 sm:before:flex-1`}
      >
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-577/310 md:w-[25vw] w-[115vw] bg-linear-to-r from-[#4F378A] to-[#FF00E5] opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-577/310 md:w-[25vw] w-[115vw] bg-linear-to-r from-[#4F378A] to-[#FF00E5] opacity-30"
          />
        </div>
        <div className="flex flex-row justify-center items-center md:gap-x-[1vw] gap-x-[3vw] md:py-[0.5vw] py-[3vw] md:px-0 px-[3vw]">
          <span className="text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw]">
            {t("header.banner.message")}
          </span>
          <Listbox
            value={selected}
            onChange={(language) => {
              setSelected(language);
              i18n.changeLanguage(language.key);
              localStorage.setItem("lang", language.key);
            }}
          >
            <div className="relative">
              <ListboxButton className="relative flex flex-row w-full cursor-default grid-cols-1 md:rounded-[0.5vw] rounded-[2vw] bg-white/70 py-1.5 pr-2 pl-3 text-left text-white outline-1 -outline-offset-1 outline-white/10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
                <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                  <span className="block truncate text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-semibold">
                    {selected.name}
                  </span>
                </span>
                {/* Check Up Down Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1A1A1A"
                  className="md:size-[1vw] size-[4vw]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </ListboxButton>

              <Portal>
                <ListboxOptions
                  anchor="bottom start"
                  transition
                  className="relative max-h-56 overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-1 text-base outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm [--anchor-gap:0.25rem] z-[1000] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]"
                >
                  {languages.map((language) => (
                    <ListboxOption
                      key={language.id}
                      value={language}
                      className="group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-[#FF00E5] data-focus:outline-hidden"
                    >
                      <div className="flex items-center">
                        <span
                          className="ml-3 block truncate font-normal group-data-focus:font-semibold group-data-focus:text-white text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw]"
                          onClick={() => changeLanguage(language.key)}
                        >
                          {language.name}
                        </span>
                      </div>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Portal>
            </div>
          </Listbox>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="p-3 focus-visible:-outline-offset-4 cursor-pointer"
            onClick={() => setBannerOpen(!bannerOpen)}
          >
            {/* X Mark Icon */}
            <span className="sr-only">Dismiss</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-[1vw] size-[4vw]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <header
        className="
          sticky top-0 z-50 select-none
          flex flex-row bg-white text-[#1A1A1A] justify-between items-center 
          md:py-[1vw] md:px-[8vw] py-[5vw] px-[10vw] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)]
          shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]
        "
        style={{ fontFamily: "Karla, system-ui, -apple-system, sans-serif" }}
      >
        {/* Left: Logo */}
        <div className="flex flex-row gap-x-[1vw] justify-center items-center">
          <div className="flex flex-row gap-x-[0.5vw] justify-center items-center">
            <NavLink
              to="/"
              end
              className={linkClass}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={shipx}
                alt="ShipX Logo"
                className="md:w-[3vw] md:h-[1.5vw] w-[14vw] h-[7vw]"
              />
            </NavLink>
            <NavLink
              to="/"
              end
              className={linkClass}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={sglink}
                alt="SGLink Logo"
                className="md:w-[3vw] md:h-[1.5vw] w-[16vw] h-[5vw]"
              />
            </NavLink>
          </div>
          <img className="h-[1vw] w-[1vw]" src={main_img_14} />
          <span className="hidden md:inline text-[0.8vw] font-normal">
            {/* ASEAN's Next Generation Platform */}
            {t("header.tagline")}
          </span>
        </div>

        {/* Right: Nav + Buttons (hidden on mobile) */}
        <nav className="hidden md:flex flex-row gap-x-[2.5vw] font-medium text-[0.8vw]">
          <NavLink
            to="/"
            end
            className={linkClass}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("header.home")}
          </NavLink>
          <NavLink to="/#services" end className={linkClass}>
            {t("header.services")}
          </NavLink>
          <NavLink to="/#platform" end className={linkClass}>
            {t("header.platform")}
          </NavLink>
          <NavLink to="/#network" end className={linkClass}>
            {t("header.network")}
          </NavLink>
        </nav>

        <div className="hidden md:flex flex-row gap-x-[1vw] text-[0.8vw] font-normal">
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
            <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
              <span className="text-[#4F378A] font-semibold">
                {t("header.book_a_demo")}
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
              py-[0.5vw] px-[1.5vw] rounded-[2vw]
              text-white font-medium
            "
          >
            {t("header.contact_us")}
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative md:hidden flex flex-col justify-between w-[8vw] h-[4.5vw] p-[0.1vw] focus:outline-none"
        >
          {/* Top bar */}
          <motion.span
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />

          {/* Middle bar */}
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />

          {/* Bottom bar */}
          <motion.span
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-full right-0 w-full bg-white shadow-[0_7vw_10vw_rgba(255,0,229,0.10)] 
                        flex flex-col items-start p-[5vw] gap-y-[3vw] md:hidden 
                        text-[#1A1A1A] text-[3.5vw] font-medium"
            >
              <NavLink
                to="/"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t("header.home")}
              </NavLink>
              <NavLink
                to="/#services"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => setIsOpen(false)}
              >
                {t("header.services")}
              </NavLink>
              <NavLink
                to="/#platform"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => setIsOpen(false)}
              >
                {t("header.platform")}
              </NavLink>
              <NavLink
                to="/#network"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => setIsOpen(false)}
              >
                {t("header.network")}
              </NavLink>
              <NavLink
                to="/"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => setIsOpen(false)}
              >
                {t("header.book_a_demo")}
              </NavLink>
              <NavLink
                to="/#contact-us"
                end
                className={`${linkClass} w-full text-left px-[5vw]`}
                onClick={() => setIsOpen(false)}
              >
                {t("header.contact_us")}
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;

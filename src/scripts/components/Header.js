import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { shipx, sglink_amilo, main_img_14, sglink } from "../../assets/assets";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { languages } from "../utils/constants";
import LoginModal from "./ui/LoginModal";
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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return (
      languages.find((language) => language.key === current) || languages[0]
    );
  });

  return (
    <div className="sticky top-0 z-50 select-none">
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
                src={sglink_amilo}
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
          <Listbox
            className="md:block hidden"
            value={selected}
            onChange={(language) => {
              setSelected(language);
              i18n.changeLanguage(language.key);
              localStorage.setItem("lang", language.key);
            }}
          >
            <div className="relative">
              <ListboxButton className="relative flex flex-row w-full justify-center items-center gap-x-[0.5vw] px-[0.6vw] py-[0.3vw] cursor-pointer md:rounded-[0.5vw] rounded-[2vw] text-center focus-visible:outline-0 shadow-[0_0.1vw_0.5vw_rgba(255,0,229,0.15)]">
                <span className="flex items-center">
                  <span className="block text-[#1A1A1A] md:text-[0.8vw] text-[2.2vw] font-semibold">
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
                  className="relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-[1000] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]"
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
                          onClick={() => i18n.changeLanguage(language.key)}
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

        <div className="hidden md:flex flex-row justify-center items-center gap-x-[1vw] text-[0.8vw] font-normal">
          <LoginModal />
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
              <NavLink
                to="/book-a-demo"
                className="text-[#4F378A] font-semibold"
              >
                {t("header.book_a_demo")}
              </NavLink>
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
              md:py-[0.6vw] py-[0.5vw] px-[1.5vw] rounded-[2vw]
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
                to="/book-a-demo"
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
              <Listbox
                className={`${linkClass} w-full text-left px-[5vw]`}
                value={selected}
                onChange={(language) => {
                  setSelected(language);
                  i18n.changeLanguage(language.key);
                  localStorage.setItem("lang", language.key);
                }}
              >
                <div className="relative">
                  <ListboxButton className="relative flex flex-row w-full gap-x-[2vw] justify-start items-center focus-visible:outline-0">
                    <span className="flex items-center">
                      <span className="block text-[#1A1A1A] text-[3.5vw] font-medium">
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
                      className="size-[4.5vw]"
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
                      className="relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-[1000] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]"
                    >
                      {languages.map((language) => (
                        <ListboxOption
                          key={language.id}
                          value={language}
                          className="group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-[#FF00E5] data-focus:outline-hidden"
                        >
                          <div className="flex items-center">
                            <span
                              className="ml-3 block truncate font-normal group-data-focus:font-semibold group-data-focus:text-white text-[#1A1A1A] text-[3.5vw]"
                              onClick={() => i18n.changeLanguage(language.key)}
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
              <LoginModal />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;

import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmartNavLink from "./ui/SmartNavLink";
import { div as MotionDiv, span as MotionSpan } from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constants";
import LoginModal from "./library/LoginModal";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Popover,
  Portal,
} from "@headlessui/react";
import { themeGuide } from "../../styles/themeGuide";
import { cn } from "../../lib/util";

import Logo from "./library/Logo";
import AppButton from "./library/AppButton";

const linkClass =
  "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

const Header = memo(() => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Dropdown Component for Navigation
  const Dropdown = ({ title, items }) => (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              group ${linkClass} flex items-center gap-x-1 focus:outline-none cursor-pointer
              ${open ? "text-[#FF00E5]" : ""}
            `}
          >
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              className={`w-3 h-3 transition-all duration-300 group-hover:stroke-[#FF00E5] ${
                open ? "rotate-180 stroke-[#FF00E5]" : "stroke-[#1A1A1A]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className="absolute z-10 mt-3 md:w-[12vw] -translate-x-1/4 transform bg-white md:rounded-[0.5vw] rounded-[2vw] border border-[#FF00E5]">
            <div className="p-1">
              {items.map((item) => (
                <SmartNavLink key={item.to} to={item.to} className="group">
                  <div className="flex items-center gap-x-3 px-4 py-2 md:text-[0.8vw] text-[2.2vw] text-gray-700 rounded-md transition-colors duration-300 group-hover:text-[#FF00E5] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                    {/* Render the icon directly if it exists */}
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </SmartNavLink>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );

  const navLinks = [
    { to: "/", label: t("header.home") },
    { to: "/#services", label: t("header.services") },
    {
      label: t("header.toolkit"),
      items: [
        {
          to: "/shipment-tracker",
          label: t("header.shipment_tracker"),
          icon: (
            <img
              className="md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]"
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_2.svg"
              alt="ShipX - plane"
            />
          ),
        },
        {
          to: "/hs-code-generator",
          label: t("header.hs_code_generator"),
          icon: (
            <img
              className="md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]"
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_24.svg"
              alt="ShipX - Calculator"
            />
          ),
        },
        {
          to: "/file-a-claim",
          label: t("header.file_a_claim"),
          icon: (
            <img
              className="md:w-[1.5vw] w-[3vw] md:h-[1.5vw] h-[3vw]"
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_icon_13.svg"
              alt="ShipX - Messaging"
            />
          ),
        },
      ],
    },
    { to: "/#platform", label: t("header.platform") },
    {
      label: t("header.resources"),
      items: [
        {
          to: "/blog",
          label: t("header.blogs"),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
            </svg>
          ),
        },
        {
          to: "/frequently-asked-questions",
          label: t("header.faqs"),
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  const mobileNavLinks = [
    ...navLinks,
    { to: "/#contact-us", label: t("header.contact_us") },
    { to: "/book-a-demo", label: t("header.book_a_demo") },
  ];

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = async (language) => {
    setSelected(language);
    try {
      await i18n.changeLanguage(language.key); // loads from CDN
      localStorage.setItem("lang", language.key);

      const segments = window.location.pathname.split("/").filter(Boolean);

      if (languages.some((l) => l.key === segments[0])) {
        segments.shift();
      }

      const newPath =
        language.key === "en"
          ? `/${segments.join("/")}`
          : `/${language.key}${segments.length ? "/" + segments.join("/") : ""}`;
      navigate(newPath, { replace: true });
    } catch (err) {
      console.error("Failed to load language:", err);
    }
  };

  const [selected, setSelected] = useState(() => {
    const current = i18n.language || localStorage.getItem("lang") || "en";
    return (
      languages.find((language) => language.key === current) || languages[0]
    );
  });

  useEffect(() => {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";
    const matched = languages.find((lang) => lang.key === currentLang);
    if (matched && matched.key !== selected.key) {
      setSelected(matched);
    }
  }, [i18n.language]);

  return (
    <div className="sticky top-0 z-50 select-none">
      <header
        className="
          sticky top-0 z-50 select-none
          flex flex-row bg-white text-[#1A1A1A] justify-between items-center 
          2xl:py-5 2xl:px-24
          md:py-[1vw]
          py-[5vw] px-[10vw]
        "
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <Logo />

        {/* Right: Nav + Buttons (hidden on mobile) */}
        <nav
          className="
            hidden md:flex
            flex-row
            gap-x-[2.5vw]
            font-normal
            2xl:text-base
            text-[0.8vw]
            text-nav
          "
        >
          {navLinks.map((link) =>
            link.items ? (
              <Dropdown
                key={link.label}
                title={link.label}
                items={link.items}
              />
            ) : (
              <SmartNavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </SmartNavLink>
            ),
          )}
        </nav>

        <div
          className="
            hidden md:flex
            flex-row
            justify-center items-center
            gap-x-[1vw]
            2xl:text-base
            md:text-base
            text-[0.8vw]
            font-normal
            text-nav
          "
        >
          {/* Translations Dropdown */}
          <Popover
            className={cn(
              themeGuide.headerLanguageItem,
              "md:block hidden",
              "relative",
            )}
          >
            {({ open, close }) => (
              <>
                <Popover.Button
                  type="button"
                  className="
                    relative
                    flex flex-row
                    w-full
                    justify-center items-center
                    gap-x-[0.5vw]
                    cursor-pointer
                    md:rounded-[0.5vw] rounded-[2vw]
                    text-center
                    focus-visible:outline-0
                  "
                >
                  <span className="flex items-center">
                    <span className={cn(themeGuide.headerLanguageItem)}>
                      {selected.name}
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    className={`w-3 h-3 transition-all duration-300 group-hover:stroke-[#FF00E5] ${
                      open ? "rotate-180 stroke-[#FF00E5]" : "stroke-[#1A1A1A]"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Popover.Button>
                <Popover.Panel
                  transition
                  className="
                    absolute right-0 z-1000
                    mt-[0.5vw]
                    h-fit w-max
                    overflow-auto
                    md:rounded-[0.5vw] rounded-[2vw]
                    bg-white
                    py-[0.5vw]
                    text-start
                    outline-1 -outline-offset-1 outline-white/10
                    data-leave:transition data-leave:duration-100 data-leave:ease-in
                    data-closed:data-leave:opacity-0
                    border border-[#FF00E5]
                  "
                >
                  {languages.map((language) => (
                    <div
                      key={language.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => {
                        handleLanguageChange(language);
                        close();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleLanguageChange(language);
                          close();
                        }
                      }}
                      className="group relative cursor-pointer py-2 pr-9 pl-3 select-none hover:bg-[#FF00E5] hover:outline-hidden"
                    >
                      <div className="flex items-center">
                        <span
                          className={cn(
                            themeGuide.headerLanguageItem,
                            "ml-3 block truncate group-hover:text-white group-hover:font-semibold",
                          )}
                        >
                          {language.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </Popover.Panel>
              </>
            )}
          </Popover>
          {/* Login Modal */}
          <LoginModal />
          {/* Book a Demo and Contact Us Buttons */}
          <AppButton to="/book-a-demo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {t("header.book_a_demo")}
          </AppButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Hamburger menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative md:hidden flex flex-col justify-between w-[8vw] h-[4.5vw] p-[0.1vw] focus:outline-none"
        >
          {/* Top bar */}
          <MotionSpan
            animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />

          {/* Middle bar */}
          <MotionSpan
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />

          {/* Bottom bar */}
          <MotionSpan
            animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-[0.5vw] w-full bg-black rounded-full"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-full right-0 w-full bg-white shadow-[0_7vw_10vw_rgba(255,0,229,0.10)] 
                        flex flex-col items-start p-[5vw] gap-y-[3vw] md:hidden 
                        text-[#1A1A1A] text-[3.5vw] font-medium divide-y divide-gray-200"
            >
              {mobileNavLinks.map((link) =>
                link.items ? (
                  <div key={link.label} className="w-full pt-3">
                    <span className="px-[5vw] font-bold text-gray-400 text-sm">
                      {link.label}
                    </span>
                    {link.items.map((item) => (
                      <SmartNavLink
                        key={item.to}
                        to={item.to}
                        onClick={handleMobileLinkClick}
                        className={`${linkClass} block w-full text-left px-[5vw] py-2`}
                      >
                        {item.label}
                      </SmartNavLink>
                    ))}
                  </div>
                ) : (
                  <SmartNavLink
                    key={link.to}
                    to={link.to}
                    onClick={handleMobileLinkClick}
                    className={`${linkClass} w-full text-left px-[5vw] pt-3`}
                  >
                    {link.label}
                  </SmartNavLink>
                ),
              )}

              <Listbox
                className={`${linkClass} w-full text-left px-[5vw]`}
                value={selected}
                onChange={handleLanguageChange}
              >
                <div className="relative">
                  <ListboxButton
                    type="button"
                    className="relative flex flex-row w-full gap-x-[2vw] justify-start items-center focus-visible:outline-0"
                  >
                    <span className="flex items-center">
                      <span className="block text-[#1A1A1A] text-[3.5vw] font-medium">
                        {selected.name}
                      </span>
                    </span>
                    {/* Dropdown Icon */}
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
                      className="relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-1000 md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]"
                    >
                      {languages.map((language) => (
                        <ListboxOption
                          key={language.id}
                          value={language}
                          className="group relative cursor-default py-2 pr-9 pl-3 text-white select-none data-focus:bg-[#FF00E5] data-focus:outline-hidden"
                        >
                          <div className="flex items-center">
                            <span className="ml-3 block truncate font-normal group-data-focus:font-semibold group-data-focus:text-white text-[#1A1A1A] md:text-[3.5vw] text-[3vw]">
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
            </MotionDiv>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
});

export default Header;

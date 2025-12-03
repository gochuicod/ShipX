import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmartNavLink from "./ui/SmartNavLink";
import {
  div as MotionDiv,
  button as MotionButton,
  span as MotionSpan,
} from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constants";
import LoginModal from "./ui/LoginModal";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Popover,
  Portal,
} from "@headlessui/react";

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
          <Popover.Panel className="absolute z-10 mt-3 md:w-[12vw] -translate-x-1/4 transform bg-white md:rounded-[0.5vw] rounded-[2vw] border border-[#4D4D4D]">
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
    { to: "/#network", label: t("header.network") },
  ];

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
          md:py-[1vw] md:px-[5vw] py-[5vw] px-[10vw] md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)]
          shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]
        "
        style={{ fontFamily: "Karla, system-ui, -apple-system, sans-serif" }}
      >
        {/* Left: Logo */}
        <div className="flex flex-row gap-x-[1vw] justify-center items-center">
          <div className="flex flex-row gap-x-[0.5vw] justify-center items-center">
            <SmartNavLink
              to="/"
              className={linkClass}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                loading="lazy"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/shipx_logo.svg"
                alt="ShipX Logo"
                className="md:w-[3vw] md:h-[1.5vw] w-[14vw] h-[7vw]"
              />
            </SmartNavLink>
            <SmartNavLink
              to="/"
              className={linkClass}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                loading="lazy"
                src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo_sglink_amilo.svg"
                alt="SGLink Logo"
                className="md:w-[3vw] md:h-[1.5vw] w-[16vw] h-[5vw]"
              />
            </SmartNavLink>
          </div>
          <img
            loading="lazy"
            className="h-[1vw] w-[1vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/main_img_14.webp"
            alt="Separator"
          />
          <span className="hidden md:inline text-[0.8vw] font-normal">
            {/* ASEAN's Next Generation Platform */}
            {t("header.tagline")}
          </span>
          <Listbox
            className="md:block hidden"
            value={selected}
            onChange={async (language) => {
              setSelected(language);
              try {
                await i18n.changeLanguage(language.key); // loads from CDN
                localStorage.setItem("lang", language.key);

                const segments = window.location.pathname
                  .split("/")
                  .filter(Boolean);

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
            }}
          >
            <div className="relative">
              <ListboxButton
                type="button"
                className="relative flex flex-row w-full justify-center items-center gap-x-[0.5vw] px-[0.6vw] py-[0.3vw] cursor-pointer md:rounded-[0.5vw] rounded-[2vw] text-center focus-visible:outline-0 shadow-[0_0.1vw_0.5vw_rgba(255,0,229,0.15)]"
              >
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
                  className="relative h-fit overflow-auto md:rounded-[0.5vw] rounded-[2vw] bg-white py-[0.5vw] mt-[0.5vw] text-start outline-1 -outline-offset-1 outline-white/10 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 z-1000 md:shadow-[0_0.5vw_0.5vw_rgba(255,0,229,0.15)] shadow-[0_3vw_5vw_rgba(255,0,229,0.15)]"
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

        <div className="hidden md:flex flex-row justify-center items-center gap-x-[1vw] text-[0.8vw] font-normal">
          <LoginModal />
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
              <div className="absolute inset-0 bg-linear-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />

              {/* Inner white area */}
              <div className="relative flex flex-row items-center gap-x-[1vw] md:px-[2vw] px-[5vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full">
                {t("services_section.book_a_demo")}
              </div>
            </MotionButton>
          </SmartNavLink>
          <SmartNavLink
            to="/#contact-us"
            className="
              bg-linear-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
              bg-size-[200%_100%] bg-position-[0%_0%]
              hover:bg-position-[100%_0%]
              transition-[background-position] duration-1000 ease-in-out
              md:py-[0.6vw] py-[0.5vw] px-[1.5vw] rounded-[2vw]
              text-white font-medium
            "
          >
            {t("header.contact_us")}
          </SmartNavLink>
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
                        text-[#1A1A1A] text-[3.5vw] font-medium divide-y divide-gray-100"
            >
              {navLinks.map((link) =>
                link.items ? (
                  <div key={link.label} className="w-full pt-3">
                    <span className="px-[5vw] font-bold text-gray-400 text-sm">
                      {link.label}
                    </span>
                    {link.items.map((item) => (
                      <SmartNavLink
                        key={item.to}
                        to={item.to}
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
                    className={`${linkClass} w-full text-left px-[5vw] pt-3`}
                  >
                    {link.label}
                  </SmartNavLink>
                ),
              )}

              <Listbox
                className={`${linkClass} w-full text-left px-[5vw]`}
                value={selected}
                onChange={async (language) => {
                  setSelected(language);

                  try {
                    await i18n.changeLanguage(language.key); // update i18n
                    localStorage.setItem("lang", language.key);

                    // Preserve current path segments
                    const segments = window.location.pathname
                      .split("/")
                      .filter(Boolean);

                    // Remove language prefix if present
                    if (languages.some((l) => l.key === segments[0])) {
                      segments.shift();
                    }

                    // Build new path with language prefix (skip 'en')
                    const newPath =
                      language.key === "en"
                        ? `/${segments.join("/")}`
                        : `/${language.key}${segments.length ? "/" + segments.join("/") : ""}`;

                    navigate(newPath, { replace: true });
                  } catch (err) {
                    console.error("Failed to switch language:", err);
                  }
                }}
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

import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmartNavLink from "./ui/SmartNavLink";
import { span as MotionSpan } from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constants";
import { Popover } from "@headlessui/react";

import { themeGuide } from "../../styles/themeGuide";

import { cn } from "../../lib/util";

import Logo from "./library/Logo";
import LoginModal from "./library/LoginModal";
import AppButton from "./library/AppButton";
import MobileMenu from "./library/MobileMenu";

import { CalendarDays } from "lucide-react";

const linkClass =
  "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

const Header = memo(() => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Option A: If LoginModal is controlled by state, set that state here.
    // setIsLoginModalOpen(true);

    // Option B: If LoginModal is a button wrapper, you might need to simulate a click
    // or simply navigate to a login page if that's how it works.
    console.log("Login clicked");

    // If you simply want to close the menu after clicking login:
    setIsOpen(false);
  };

  // Dropdown Component for Navigation (Hoverable)
  const Dropdown = ({ title, items }) => (
    <div className="relative group h-full flex items-center">
      {/* The Trigger Link */}
      <div
        className={cn(
          linkClass,
          "flex items-center gap-x-1 cursor-pointer py-4", // Padding ensures the hover bridge
          "group-hover:text-[#FF00E5]",
        )}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 group-hover:stroke-[#FF00E5] stroke-[#1A1A1A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* The Panel - Automatically fits content via min-w-max */}
      <div
        className="
        absolute top-full left-0 z-50 
        invisible opacity-0 translate-y-1
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-200 ease-out
      "
      >
        {/* Invisible bridge to prevent menu from closing when moving mouse down */}
        <div className="h-2 w-full" />

        <div
          className="
          min-w-max bg-white rounded-lg border border-[#FF00E5] 
          shadow-lg p-1 overflow-hidden
        "
        >
          {items.map((item) => (
            <SmartNavLink
              key={item.to}
              to={item.to}
              className="group/item block"
            >
              <div
                className="
                flex items-center gap-x-3 px-4 py-3 
                text-base text-gray-700 rounded-md 
                transition-colors duration-200 
                hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-4
              "
              >
                {/* Render the icon */}
                <span className="shrink-0 scale-110">{item.icon}</span>
                {/* min-w-max and whitespace-nowrap prevents text wrapping */}
                <span className="whitespace-nowrap font-medium pr-2">
                  {item.label}
                </span>
              </div>
            </SmartNavLink>
          ))}
        </div>
      </div>
    </div>
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
        className={`
          sticky top-0 z-50 select-none
          flex flex-row bg-white text-[#1A1A1A] justify-between items-center
          ${themeGuide.paddingX}
          py-3 px-8
        `}
        style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
      >
        <Logo />

        {/* Right: Nav + Buttons (hidden on mobile) */}
        <nav className="hidden 2xl:flex flex-row gap-x-[2.5vw] font-normal 2xl:text-base text-nav items-center">
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
            hidden 2xl:flex
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
          <AppButton
            to="/book-a-demo"
            text={t("header.book_a_demo")}
            withLeftIcon={true}
            leftIcon={<CalendarDays className="size-5" />}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Hamburger menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative 2xl:hidden flex flex-col justify-between md:w-[4vw] w-[6vw] md:h-[3vw] h-[3.5vw] p-0 focus:outline-none"
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
            <MobileMenu
              isOpen={isOpen}
              navLinks={mobileNavLinks}
              languages={languages}
              selectedLang={selected}
              onLanguageChange={handleLanguageChange}
              onLinkClick={handleMobileLinkClick}
              onLoginClick={handleLoginClick} // <--- Pass the handler here
              t={t}
            />
          )}
        </AnimatePresence>
      </header>
    </div>
  );
});

export default Header;

import { memo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SmartNavLink from "./ui/SmartNavLink";
import { span as MotionSpan } from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { languages } from "../utils/constants";

import { themeGuide } from "../../styles/themeGuide";

import Logo from "./library/Logo";
import LoginModal from "./library/LoginModal";
import AppButton from "./library/AppButton";
import MobileMenu from "./library/MobileMenu";
import Dropdown from "./library/Dropdown";

import { CalendarDays } from "lucide-react";

const Header = memo(() => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLoginClick = () => setIsOpen(false);

  const linkClass =
    "transition-colors duration-500 hover:text-[#FF00E5] hover:underline hover:decoration-2 hover:underline-offset-5";

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
          to: "/blogs",
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
    setSelectedLanguage(language);
    try {
      await i18n.changeLanguage(language.key);
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

        {/* --- DESKTOP NAVIGATION (Hidden on XL) --- */}
        <nav className="hidden xl:flex flex-row gap-x-[2.5vw] font-normal xl:text-base text-nav items-center">
          {navLinks.map((link) =>
            link.items ? (
              <Dropdown
                key={link.label}
                title={link.label}
                items={link.items}
                hoverMode={true} // Enabled hover
              />
            ) : (
              <SmartNavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </SmartNavLink>
            ),
          )}
        </nav>

        {/* --- DESKTOP ACTIONS (Hidden on XL) --- */}
        <div
          className="
            hidden xl:flex
            flex-row
            justify-center items-center
            gap-x-[1vw]
            xl:text-base
            md:text-base
            text-[0.8vw]
            font-normal
            text-nav
          "
        >
          {/* Translations Dropdown */}
          <Dropdown
            title="Language"
            items={languages}
            selected={selectedLanguage}
            onSelect={(language) => handleLanguageChange(language)}
            hoverMode={true} // Enabled hover
          />

          {/* Login Modal */}
          <LoginModal />

          {/* Book a Demo */}
          <AppButton
            to="/book-a-demo"
            text={t("header.book_a_demo")}
            withLeftIcon={true}
            leftIcon={<CalendarDays className="size-5" />}
          />
        </div>

        {/* --- MOBILE ACTIONS (Visible < XL) --- */}
        <div className="xl:hidden flex flex-row items-center gap-4">
          {/* 1. Login Modal in Mobile Header */}
          <LoginModal />

          {/* 2. Hamburger Menu */}
          <button
            type="button"
            aria-label="Hamburger menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex flex-col justify-between md:w-[4vw] w-[6vw] md:h-[3vw] h-[3.5vw] p-0 focus:outline-none"
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
        </div>

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
              onLoginClick={handleLoginClick}
              t={t}
            />
          )}
        </AnimatePresence>
      </header>
    </div>
  );
});

export default Header;

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";
import { cn } from "../../../lib/util";

const LoginModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const modalItems = [
    {
      key: "amilo",
      title: t("header.login_modal.amilo.title"),
      desc: t("header.login_modal.amilo.description"),
      btnText: `${t("header.login_modal.amilo.button")} Amilo`,
      onClick: () => (window.location.href = "https://vip.amilo.co/"),
      variant: "secondary",
    },
    {
      key: "sglink",
      title: t("header.login_modal.sglink.title"),
      desc: t("header.login_modal.sglink.description"),
      btnText: `${t("header.login_modal.sglink.button")} SG LINK`,
      onClick: () => (window.location.href = "https://admin.sglinkapi.com/"),
      variant: "secondary",
    },
    {
      key: "signup",
      title: t("header.login_modal.sign_up.title"),
      desc: t("header.login_modal.sign_up.description"),
      btnText: t("header.login_modal.sign_up.button"),
      to: "/book-a-demo",
      variant: "primary",
    },
  ];

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (!isTouch) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouch]);

  const handleMouseEnter = () => {
    if (!isTouch) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      hoverTimeoutRef.current = setTimeout(() => setOpen(false), 200);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Link with Chevron */}
      <div
        onClick={() => isTouch && setOpen((p) => !p)}
        className={cn(
          "flex items-center gap-x-1 cursor-pointer transition-colors duration-300",
          "text-nav font-normal text-base hover:text-[#FF00E5]",
          open && "text-[#FF00E5]", // Keep pink when open
        )}
      >
        <span>{t("header.login_signup")}</span>

        {/* Animated Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className={cn(
            "w-3 h-3 transition-transform duration-300",
            "stroke-[#1A1A1A]",
            open ? "rotate-180 stroke-[#FF00E5]" : "rotate-0",
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Dropdown Content */}
      {open && (
        <div
          className="
            absolute top-full left-1/2 -translate-x-1/2 z-50
            mt-2 md:mt-[1vw]
            w-[90vw] md:w-auto md:min-w-[50vw]
            bg-white rounded-2xl md:rounded-[1vw]
            border border-[#FF00E5] shadow-lg
            p-6 md:p-[2vw]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2vw]">
            {modalItems.map((item) => (
              <div
                key={item.key}
                className="flex flex-col gap-3 md:gap-[0.8vw]"
              >
                <span className="text-[#19191D] font-bold text-lg md:text-base">
                  {item.title}
                </span>
                <p className="text-[#757577] text-sm md:text-base leading-relaxed font-normal max-w-[200px] md:max-w-none">
                  {item.desc}
                </p>
                <div className="mt-2 md:mt-auto">
                  <AppButton
                    to={item.to}
                    onClick={item.onClick}
                    variant={item.variant}
                    text={item.btnText}
                    className="w-fit px-6 py-2 md:px-[1.5vw] md:py-[0.4vw]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";
import { cn } from "../../../lib/util";

const LoginModal = ({ footer = false, placement = "auto" }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  const effectivePlacement =
    placement === "auto" ? (footer ? "top" : "bottom") : placement;

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
      {/* Trigger Button */}
      <div
        onClick={() => isTouch && setOpen((p) => !p)}
        className={cn(
          // Shared styles for both
          "cursor-pointer transition-colors duration-300 flex items-center",

          footer
            ? // Footer specific styles (Added 'gap-2' for chevron spacing)
              "bg-white hover:bg-secondary-hover active:bg-secondary-active border border-violet-300 active:border-secondary-active text-primary active:text-white font-normal shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_-2px_-2px_6px_rgba(167,139,250,0.3)] px-4 py-[5px] rounded-lg gap-2"
            : // Header specific styles
              `gap-x-1 text-nav font-normal text-base hover:text-[#FF00E5] ${
                open && "text-[#FF00E5]"
              }`,
        )}
      >
        <span>{t("header.login_signup")}</span>

        {/* Animated Chevron (Removed !footer check) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          className={cn(
            "w-3 h-3 transition-transform duration-300",
            // If footer, use current text color (stroke-current), otherwise specific colors
            footer ? "stroke-current" : "stroke-[#1A1A1A]",
            // Rotation logic
            open ? `rotate-180 ${!footer && "stroke-[#FF00E5]"}` : "rotate-0",
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Modal Content */}
      {open && (
        <div
          className={cn(
            "absolute z-50 left-1/2 -translate-x-1/2",
            "w-[90vw] md:w-auto md:min-w-[600px]",
            "max-h-[85vh] overflow-y-auto overscroll-contain",
            "bg-white rounded-2xl md:rounded-xl",
            "border border-[#FF00E5] shadow-xl",
            "p-6 md:p-6",
            effectivePlacement === "top"
              ? "bottom-full mb-3 origin-bottom"
              : "top-full mt-3 origin-top",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalItems.map((item) => (
              <div key={item.key} className="flex flex-col gap-3">
                <span className="text-[#19191D] font-bold text-lg md:text-base">
                  {item.title}
                </span>
                <p className="text-[#757577] text-sm md:text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="mt-2 md:mt-auto">
                  <AppButton
                    to={item.to}
                    onClick={item.onClick}
                    variant={item.variant}
                    text={item.btnText}
                    className="w-full md:w-fit px-4 py-2 text-sm"
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

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AppButton from "./AppButton";

const LoginModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  // --- Configuration Data ---
  const modalItems = [
    {
      key: "amilo",
      title: t("header.login_modal.amilo.title"),
      desc: t("header.login_modal.amilo.description"),
      btnText: `${t("header.login_modal.amilo.button")} Amilo`,
      // Use onClick for external navigation
      onClick: () => (window.location.href = "https://vip.amilo.co/"),
      // 'secondary' in your AppButton config has the border/white bg style
      variant: "secondary",
      logo: null,
    },
    {
      key: "sglink",
      title: t("header.login_modal.sglink.title"),
      desc: t("header.login_modal.sglink.description"),
      btnText: `${t("header.login_modal.sglink.button")} SG LINK`,
      onClick: () => (window.location.href = "https://admin.sglinkapi.com/"),
      variant: "secondary",
      logo: null,
    },
    {
      key: "signup",
      title: t("header.login_modal.sign_up.title"),
      desc: t("header.login_modal.sign_up.description"),
      btnText: t("header.login_modal.sign_up.button"),
      // Use 'to' for internal routing (SmartNavLink logic)
      to: "/book-a-demo",
      // 'main' is your default solid gradient style
      variant: "primary",
      logo: null,
    },
  ];

  // --- Event Handlers (Unchanged) ---
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
      className="relative md:px-0 px-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Link */}
      <span
        onClick={() => isTouch && setOpen((p) => !p)}
        className="text-nav cursor-pointer font-normal text-base hover:text-primary transition-colors"
      >
        {t("header.login_signup")}
      </span>

      {/* Dropdown Content */}
      {open && (
        <div
          className="
            absolute top-full left-[-10vw] -translate-x-1/2 z-50
            mt-4 md:mt-[1vw]
            w-[90vw] md:w-auto md:min-w-[50vw]
            bg-white rounded-2xl md:rounded-[1vw]
            border border-[#FF00E5] shadow-lg
            p-6 md:p-[2vw]
          "
        >
          {/* CSS Grid for Even Spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2vw]">
            {modalItems.map((item) => (
              <div
                key={item.key}
                className="flex flex-col gap-3 md:gap-[0.8vw]"
              >
                {/* Title */}
                <span className="text-[#19191D] font-bold text-lg md:text-base">
                  {item.title}
                </span>

                {/* Description */}
                <p className="text-[#757577] text-sm md:text-base leading-relaxed font-normal max-w-[200px] md:max-w-none">
                  {item.desc}
                </p>

                {/* Button Area */}
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

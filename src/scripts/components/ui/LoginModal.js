import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { button as MotionButton } from "motion/react-client";
import { NavLink } from "react-router-dom";

const LoginModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Detect touch device
  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Close dropdown when clicking outside (for mobile)
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

  // Hover handlers (for desktop)
  const handleMouseEnter = () => {
    if (!isTouch) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouch) {
      hoverTimeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 200); // small delay prevents flicker
    }
  };

  // Click toggle (for mobile)
  const handleClick = () => {
    if (isTouch) setOpen((prev) => !prev);
  };

  return (
    <div
      className="relative md:px-0 px-[5vw] md:w-auto w-full"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <span
        onClick={handleClick}
        className="text-[#FF00E5] hover:text-shadow-[0_0_0.5vw_rgba(255,0,229,0.5)] transition-text-shadow duration-500 ease-in-out cursor-pointer font-bold"
      >
        {t("header.login_signup")}
      </span>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute top-full md:mt-[1vw] mt-[3vw]
            left-1/2 -translate-x-1/2
            md:w-auto w-[90vw]
            bg-white md:rounded-[1vw] rounded-[3vw]
            md:shadow-[0_0_0.5vw_rgba(255,0,229,0.2)]
            shadow-[0_0_1.5vw_rgba(255,0,229,0.3)]
            z-[1000] md:p-[2vw] p-[5vw]
            flex md:flex-row flex-col md:gap-[2vw] gap-[5vw]
          "
        >
          {/* Amilo */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.amilo.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.amilo.description")}
            </span>
            <MotionButton
              type="button"
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => (window.location.href = "https://vip.amilo.co/")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
                  {t("header.login_modal.amilo.button")}
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/header_svg_1.svg"
                  alt="Amilo Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </MotionButton>
          </div>

          {/* SGLink */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.sglink.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.sglink.description")}
            </span>
            <MotionButton
              type="button"
              className="md:p-[0.15vw] p-[0.5vw] rounded-full relative overflow-hidden cursor-pointer w-fit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() =>
                (window.location.href = "https://admin.sglinkapi.com/")
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F378A] to-[#FF00E5] rounded-full" />
              <div className="relative flex flex-row items-center gap-x-[1vw] px-[2vw] py-[0.5vw] bg-white rounded-full">
                <span className="text-[#4F378A] font-semibold md:text-[0.8vw] text-[3.3vw]">
                  {t("header.login_modal.sglink.button")}
                </span>
                <img
                  loading="lazy"
                  src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/header_svg_2.svg"
                  alt="SG Link Logo"
                  className="md:h-[1vw] h-[4vw] md:w-[4vw] w-[10vw]"
                />
              </div>
            </MotionButton>
          </div>

          {/* Sign Up */}
          <div className="flex flex-col gap-y-[0.5vw] md:w-[15vw] w-auto">
            <span className="text-[#19191D] font-bold md:text-[1vw] text-[3.5vw]">
              {t("header.login_modal.sign_up.title")}
            </span>
            <span className="text-[#757577] md:text-[0.8vw] text-[3.3vw] font-normal">
              {t("header.login_modal.sign_up.description")}
            </span>
            <NavLink
              to="/book-a-demo"
              end
              className="
                bg-gradient-to-r from-[#4F378A] from-0% via-[#FF00E5] via-60% to-[#FF00E5] to-100%
                bg-[length:200%_100%] bg-[position:0%_0%]
                hover:bg-[position:100%_0%]
                transition-[background-position] duration-1000 ease-in-out
                md:py-[0.6vw] py-[0.5vw] md:px-[1.5vw] px-[3vw] rounded-full
                text-white font-medium w-fit md:text-[0.8vw] text-[3.3vw]
              "
            >
              {t("header.login_modal.sign_up.button")}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;

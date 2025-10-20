import React from "react";
import { margin } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import SmartNavLink from "./SmartNavLink";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center bg-white text-center ${margin}`}
    >
      <h1 className="md:text-[3vw] text-[7vw] font-extrabold text-[#4F378A]">
        {t("not_found.title")}
      </h1>
      <p className="text-gray-[#1A1A1A]/70 md:text-[0.8vw] text-[3vw] md:my-[1vw] my-[3vw]">
        {t("not_found.description")}
      </p>

      <SmartNavLink
        to="/"
        className="
          bg-gradient-to-r from-[#4F378A] via-[#FF00E5] to-[#FF00E5]
          bg-[length:200%_100%] bg-[position:0%_0%]
          hover:bg-[position:100%_0%]
          transition-[background-position] duration-1000 ease-in-out
          text-white font-semibold rounded-full px-8 py-3
          shadow-md hover:shadow-lg cursor-pointer md:text-[0.8vw] text-[3vw]
        "
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {t("not_found.button")}
      </SmartNavLink>
    </div>
  );
};

export default NotFound;

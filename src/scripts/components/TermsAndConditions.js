import { margin } from "../utils/constants";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col justify-center items-center ${margin}`}>
      <div className="flex flex-col justify-center items-center md:py-[5vw] py-[10vw]">
        <span
          className="text-[#FF00E5] md:text-[5vw] text-[7vw] md:font-semibold font-bold text-center"
          style={{
            fontFamily: "Karla, system-ui, -apple-system, sans-serif",
          }}
        >
          {t("terms_and_conditions_page.header")}
        </span>
        <span
          className="text-[#63666D] md:text-[0.8vw] text-[2.2vw] md:font-medium font-semibold"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          {t("terms_and_conditions_page.subheader")}
        </span>
      </div>

      <div
        className="flex flex-col md:pb-[5vw] pb-[10vw] md:w-[50vw] w-full"
        style={{
          fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
        }}
      >
        <p className="text-[#63666D] md:text-[0.8vw] text-[2.2vw] font-normal text-justify opacity-70 whitespace-pre-line">
          {t("terms_and_conditions_page.message")}
        </p>

        <hr className="bg-[#63666D] h-[0.05vw] border-none opacity-70 mt-[2vw]" />

        <p className="text-[#63666D] opacity-60 md:text-[0.6vw] text-[2vw] font-normal mt-[1vw]">
          {t("terms_and_conditions_page.note")}
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

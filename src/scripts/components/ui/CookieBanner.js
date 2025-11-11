import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { updateGtmConsent } from "../../../tagmanager";

export default function () {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("analyticsConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (state) => {
    updateGtmConsent(state);
    localStorage.setItem("analyticsConsent", state);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed
        md:bottom-[3vw] md:left-[3vw] bottom-[5vw] left-0 right-0 md:mx-0 mx-auto
        bg-white shadow-[0_0.5vw_1vw_rgba(0,0,0,0.5)]
        md:rounded-[1.5vw] rounded-[3vw]
        md:px-[2vw] px-[6vw] md:pb-[2vw] pb-[6vw] md:pt-[1vw] pt-[4vw]
        md:w-[23vw] w-[90vw] z-9999
      "
    >
      <div className="flex flex-col md:gap-y-[1vw] gap-y-[3vw]">
        {/* Cookie Header */}
        <section
          className="flex flex-row md:gap-x-[1vw] gap-x-[2vw] justify-start items-center text-start"
          style={{
            fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
          }}
        >
          <img
            className="md:w-[2vw] md:h-[2vw] w-[10vw] h-[10vw]"
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@main/src/assets/cookies_icon.webp"
            alt="ShipX Cookie Icon"
          />
          <span className="md:text-[1.5vw] text-[6vw] font-semibold">
            Cookies
          </span>
        </section>
        {/* Cookie Description */}
        <section
          className="md:text-[0.7vw] text-[3vw]"
          style={{
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          <p className="text-wrap text-[#4D4D4D] text-light">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and understand how users interact with our website.
            <br />
            <br />
            Some cookies are essential for the site to function properly —
            others help us improve performance and user experience through
            analytics.
            <br />
            <br />
            You can choose to accept only the necessary cookies or allow all
            cookies for the best experience.
          </p>
        </section>
        {/* Cookie Buttons */}
        <section
          className="flex flex-row md:gap-x-[1vw] gap-x-[2vw] md:text-[0.65vw] text-[3vw]"
          style={{
            fontFamily: "Karla, system-ui, -apple-system, sans-serif",
          }}
        >
          <button
            type="button"
            className="md:p-[0.1vw] p-[0.55vw]  rounded-full relative overflow-hidden cursor-pointer"
            onClick={() => handleConsent("granted")}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 bg-linear-to-t from-[#4F378A] to-[#FF00E5] rounded-full" />

            {/* Inner white area */}
            <div className="relative flex flex-row items-center md:px-[0.9vw] px-[3vw] md:py-[0.5vw] py-[1vw] bg-white rounded-full font-medium">
              Accept Necessary Cookies
            </div>
          </button>
          <button
            type="button"
            onClick={() => handleConsent("granted")}
            className="bg-[#4F378A] text-white rounded-full md:px-[0.7vw] px-[3vw] md:py-[0.5vw] py-[1vw] font-medium"
          >
            Accept All Cookies
          </button>
        </section>
      </div>
    </div>
  );
}

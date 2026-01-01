import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import SEO from "../../ui/SEO";
import SubPageHero from "../../library/SubPageHero";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { themeGuide } from "../../../../styles/themeGuide";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // optional smooth scroll
  }, [pathname]);

  return (
    <>
      <SEO
        title={t("seo.privacy_policy_page.title")}
        description={t("seo.privacy_policy_page.description")}
        canonical={t("seo.privacy_policy_page.canonical")}
        ogImage={t("seo.privacy_policy_page.ogImage")}
      />

      <div className="w-full bg-white font-sans flex flex-col items-center mb-20">
        {/* --- Hero Banner --- */}
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/privacy_policy_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/privacy_policy_mobile.webp"
          alt="Privacy Policy Banner"
        />

        {/* --- Main Content --- */}
        <main
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-[8vw] md:py-[4vw] gap-y-[6vw] md:gap-y-[3vw]`}
        >
          {/* Header Block */}
          <div className="w-full flex flex-col gap-2 items-center text-center">
            <Badge variant="toolkit" size="default">
              Terms and Conditions
            </Badge>

            <HighlightedHeading
              text="Privacy Policy"
              highlight="Privacy Policy"
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />

            <p className="flex items-center justify-center text-center mx-auto w-full font-['Inter'] font-normal text-[#63666D] opacity-90 text-[14px] leading-[18px] max-w-[376px] md:text-[16px] md:leading-[20px] md:max-w-[822px] md:mb-[2vw] mb-[6vw]">
              {t("privacy_policy_page.subheader")}
            </p>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col md:w-[50vw]">
            <p className="text-[#63666D] md:text-[0.8vw] text-[2.2vw] font-normal text-justify opacity-70 whitespace-pre-line">
              {t("privacy_policy_page.message")}
            </p>

            <hr className="bg-[#63666D] h-[0.05vw] border-none opacity-70 mt-[2vw]" />

            <p className="text-[#63666D] opacity-60 md:text-[0.6vw] text-[2vw] font-normal mt-[1vw]">
              {t("privacy_policy_page.note")}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;

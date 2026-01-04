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
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-8 gap-6 md:py-16 md:gap-y-6`}
        >
          {/* Header Block */}
          <div className="w-full flex flex-col gap-2 items-center text-center">
            <div className="md:hidden">
              <Badge variant="toolkit" size="small">
                {t("privacy_policy_page.badge", "Privacy Policy")}
              </Badge>
            </div>
            <div className="hidden md:block">
              <Badge variant="toolkit" size="default">
                {t("privacy_policy_page.badge", "Privacy Policy")}
              </Badge>
            </div>

            <HighlightedHeading
              text={t("privacy_policy_page.header", "Privacy Policy")}
              highlight={t(
                "privacy_policy_page.highlightedText",
                "Privacy Policy",
              )}
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col md:w-[882px]">
            <p className=" font-['Inter'] font-normal text-justify text-base leading-[18px] whitespace-pre-line">
              {t("privacy_policy_page.message")}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import SEO from "../../ui/SEO";
import SubPageHero from "../../library/SubPageHero";
import { Badge } from "../../../../styles/badge";
import HighlightedHeading from "../../library/HighlightedHeading";
import { themeGuide } from "../../../../styles/themeGuide";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // optional smooth scroll
  }, [pathname]);

  return (
    <>
      <SEO
        title={t("seo.terms_and_conditions_page.title")}
        description={t("seo.terms_and_conditions_page.description")}
        canonical={t("seo.terms_and_conditions_page.canonical")}
        ogImage={t("seo.terms_and_conditions_page.ogImage")}
      />

      <div className="w-full bg-white font-sans flex flex-col items-center mb-20">
        {/* --- Hero Banner --- */}
        <SubPageHero
          src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/terms_and_conditions_hero_desktop.webp"
          srcMobile="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/hero_section/terms_and_conditions_hero_mobile.webp"
          alt="Terms and Conditions Banner"
        />

        {/* --- Main Content --- */}
        <main
          className={`mx-auto relative ${themeGuide.paddingX} flex flex-col items-center w-full py-8 gap-6 md:py-16 md:gap-y-6`}
        >
          {/* Header Block */}
          <div className="w-full flex flex-col gap-2 items-center text-center">
            <div className="md:hidden">
              <Badge variant="toolkit" size="small">
                Terms and Conditions
              </Badge>
            </div>
            <div className="hidden md:block">
              <Badge variant="toolkit" size="default">
                Terms and Conditions
              </Badge>
            </div>

            <HighlightedHeading
              text="ShipX User Agreement"
              highlight="ShipX"
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col md:w-[882px]">
            <p className=" font-['Inter'] font-normal text-justify text-base leading-[18px] whitespace-pre-line">
              {t("terms_and_conditions_page.message")}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default TermsAndConditions;

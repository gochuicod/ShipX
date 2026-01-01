import { useTranslation } from "react-i18next";
import SEO from "../../../ui/SEO";
import ToolsHeroSection from "../../../library/ToolsHeroSection";
import { Badge } from "../../../../../styles/badge";
import HighlightedHeading from "../../../library/HighlightedHeading";
import ClaimsForm from "./ClaimsForm";

const ClaimsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title="File a Claim | ShipX"
        description="Submit a claim for lost, damaged, or delayed shipments."
        canonical="https://shipx.com/file-a-claim"
        ogImage="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@8cee8dfe271cc72185efeb75f3adbb7bb97ec7f0/src/assets/logo-shipx.webp"
      />

      <div className="w-screen min-h-screen flex flex-col">
        {/* Reusable Hero Section from UI folder */}
        <ToolsHeroSection activePage="file-a-claim" />

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center w-full py-[10vw] md:py-[5vw] px-[5vw]">
          {/* HEADER SECTION (Moved out of the form component) */}
          <div className="flex flex-col items-center gap-y-[2vw] md:gap-y-[0.8vw] mb-[6vw] md:mb-[3vw]">
            <Badge variant="toolkit" size="default">
              {t("file_a_claim.header_section.badge_text")}
            </Badge>
            <HighlightedHeading
              text={t("file_a_claim.header_section.title")}
              className="text-2xl 2xl:text-4xl font-semibold mt-2 text-center"
            />
            <p className="text-[#63666D]/75 font-medium md:text-[0.9vw] text-[3.5vw] text-center w-full md:max-w-[40vw] leading-[1.4]">
              {t("file_a_claim.header_section.description")}
            </p>
          </div>
          <ClaimsForm />
        </div>
      </div>
    </>
  );
};

export default ClaimsPage;

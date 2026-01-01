import { useTranslation } from "react-i18next";
import SEO from "../../../ui/SEO";
import ToolsHeroSection from "../../../library/ToolsHeroSection";
import { Badge } from "../../../../../styles/badge";
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
        <div className="flex flex-col items-center justify-center w-full py-12 md:py-16 lg:py-20 px-4 md:px-8">
          {/* HEADER SECTION */}
          {/* Layout: 
              - Mobile/Tablet: Flex-col (Stacked), Centered
              - Desktop (lg): Flex-row, Center aligned vertically, Gap 32px
          */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 w-full max-w-sm md:max-w-2xl lg:max-w-4xl mb-8">
            {/* Left Block: Badge & Title */}
            {/* - Mobile/Tablet: Centered 
                - Desktop: Aligned to End (Right side of this block) 
            */}
            <div className="flex flex-col justify-center items-center lg:items-end gap-2 w-full lg:flex-1">
              <Badge variant="toolkit" size="default">
                {t("file_a_claim.header_section.badge_text")}
              </Badge>
              <h1 className="font-['Inter'] font-semibold text-[28px] leading-8 lg:text-[32px] lg:leading-10 text-[#1E2939] opacity-90 tracking-[-1px] text-center lg:text-right w-full">
                {t("file_a_claim.header_section.title")}
              </h1>
            </div>

            {/* Right Block: Description */}
            {/* - Mobile/Tablet: Centered text 
                - Desktop: Left aligned text, Aligned to Start 
            */}
            <div className="flex flex-col justify-center items-center lg:items-start w-full lg:flex-1">
              <p className="font-['Inter'] font-normal text-[14px] leading-[18px] lg:text-[16px] lg:leading-[20px] text-[#4D525C] lg:text-[#63666D] opacity-90 text-center lg:text-left w-full">
                {t("file_a_claim.header_section.description")}
              </p>
            </div>
          </div>

          <ClaimsForm />
        </div>
      </div>
    </>
  );
};

export default ClaimsPage;

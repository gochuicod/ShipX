import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../library/AppButton";
import PartnerGrid from "../../library/PartnerGrid";

import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import { partnersSectionData } from "../../../utils/constants";

import { CircleArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../../library/Container";

export default function PartnersSection() {
  const { t } = useTranslation();

  return (
    <Container
      className={cn(
        "flex flex-col lg:flex-row justify-center items-center gap-8",
        "w-full mx-auto",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* Left side */}
      <div
        className="
          flex flex-col
          w-full
          items-center justify-center
          md:items-center md:justify-center
          lg:items-end lg:justify-end
          scroll-mt-[120px]
        "
        id="partners"
      >
        <Badge variant="toolkit" size="default">
          {t("partners_section.badge")}
        </Badge>

        <HighlightedHeading
          text={t("partners_section.headline")}
          highlight={t("partners_section.headline_highlighted")}
          className={cn(
            "lg:text-[32px] lg:leading-10 md:text-[28px] md:leading-8 text-[28px] leading-8 font-semibold mt-2",
            "lg:text-end md:text-center text-center",
          )}
          disableNewlines
        />

        <Description
          className={cn(
            "text-sm md:text-base text-center lg:text-end mb-4",
            "lg:w-auto md:w-[60%] w-full",
          )}
        >
          {t("partners_section.description")}
        </Description>

        <AppButton
          text={t("partners_section.button")}
          withRightIcon
          rightIcon={<CircleArrowRight className="size-5" />}
        />
      </div>

      {/* Right side */}
      <div className="lg:w-[60%] md:w-full w-full">
        <PartnerGrid partners={partnersSectionData} />
      </div>
    </Container>
  );
}

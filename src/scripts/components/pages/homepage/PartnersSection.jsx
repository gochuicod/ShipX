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
        "flex flex-col 2xl:flex-row justify-center items-start gap-x-8",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* Left side */}
      <div
        className="
          flex flex-col
          w-full
          items-center justify-center
          2xl:items-end 2xl:justify-end
        "
      >
        <Badge variant="toolkit" size="default">
          {t("partners_section.badge")}
        </Badge>

        <HighlightedHeading
          text={t("partners_section.headline")}
          highlight={t("partners_section.headline_highlighted")}
          className="
            text-2xl
            font-semibold
            mt-2
            text-center
            2xl:text-end
          "
        />

        <Description
          className="
            text-sm md:text-base
            text-center
            2xl:text-end
            mb-4
            w-full
            md:w-[80%]
            2xl:w-auto
          "
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
      <div className="w-full mt-8 2xl:mt-0 2xl:w-[60%]">
        <PartnerGrid partners={partnersSectionData} />
      </div>
    </Container>
  );
}

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
        "flex lg:flex-row md:flex-col flex-col justify-center items-start gap-x-8",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* Left side of the section */}
      <div
        className="
                    flex flex-col
                    w-full
                    lg:justify-end justify-center
                    lg:items-end items-center
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
                        lg:text-end md:text-center text-center
                        font-semibold
                        mt-2
                    "
        />
        <Description
          className="
            md:text-base text-sm
            lg:text-end md:text-center text-center
            mb-4
            lg:w-auto md:w-[80%] w-full
          "
        >
          {t("partners_section.description")}
        </Description>
        <AppButton
          text={t("partners_section.button")}
          withRightIcon={true}
          rightIcon={<CircleArrowRight className="size-5" />}
        />
      </div>
      {/* Right side of the section */}
      <div className="lg:w-[60%] w-full lg:mt-0 mt-8">
        <PartnerGrid partners={partnersSectionData} />
      </div>
    </Container>
  );
}

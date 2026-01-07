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

export default function PartnersSection() {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        themeGuide.paddingX,
        "lg:pt-32 lg:pb-0 pt-16 md:pb-16 pb-12 flex 2xl:flex-row md:flex-col flex-col justify-center items-start gap-x-8",
      )}
    >
      {/* Left side of the section */}
      <div
        className="
                    flex flex-col
                    2xl:w-[35%] w-full
                    2xl:justify-end justify-center
                    2xl:items-end items-center
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
                        2xl:text-end md:text-center text-center
                        font-semibold
                        mt-2
                    "
        />
        <Description
          className="
            md:text-base text-sm
            2xl:text-end md:text-center text-center
            mb-4
            2xl:w-auto md:w-[80%] w-full
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
      <div className="2xl:w-[65%] w-full 2xl:mt-0 mt-8">
        <PartnerGrid partners={partnersSectionData} />
      </div>
    </div>
  );
}

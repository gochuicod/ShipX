import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import PartnerCard from "../../library/PartnerCard";
import FeatureItem from "../../library/FeatureItem";
import AppButton from "../../library/AppButton";
import ShowcaseSlider from "../../library/ShowcaseSlider";
import ShowcaseCard from "../../library/ShowcaseCard";

import { CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  platformSectionPartners,
  getPlatformSectionFeatures,
  getPlatformShowcaseData,
} from "../../../utils/constants";

import Container from "../../library/Container";

export default function PlatformSection() {
  const { t } = useTranslation();

  // dynamically translated data
  const features = getPlatformSectionFeatures(t);
  const showcase = getPlatformShowcaseData(t);

  return (
    <div className={cn("flex flex-col", themeGuide.sectionPaddingY)}>
      {/* First row */}
      <Container
        className={cn(
          "flex 2xl:flex-row flex-col-reverse justify-center items-center gap-x-8",
        )}
      >
        <div
          id="platform"
          className="flex flex-col 2xl:w-[35%] w-full 2xl:justify-end justify-center 2xl:items-end items-center"
        >
          <Badge variant="toolkit" size="default">
            {t("our_platform_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("our_platform_section.title")}
            highlight={t("our_platform_section.title_highlighted")}
            className="2xl:text-[32px] text-[28px] 2xl:text-end text-center font-semibold mt-2"
            disableNewlines={{ base: true, "2xl": false }}
          />
          <Description className="md:text-base text-sm 2xl:text-end text-center mb-4 2xl:w-[70%] md:w-[55%] w-full">
            {t("our_platform_section.description")}
          </Description>
          <div className="flex flex-row gap-x-8">
            {platformSectionPartners.map((partner, index) => (
              <PartnerCard
                key={index}
                logo={partner.logo}
                name={partner.name}
                size="small"
                className="w-fit"
              />
            ))}
          </div>
        </div>

        <div className="2xl:w-[65%] w-full 2xl:mt-0 mt-8 flex 2xl:justify-start justify-center 2xl:items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/shipx_dashboard_mockup_v3.webp"
            alt="ShipX Dashboard Mockup"
            className="p-1"
          />
        </div>
      </Container>

      {/* Second row: features + showcase */}
      <Container
        className={cn(
          "flex flex-col justify-center items-start 2xl:flex-row gap-8 w-full pt-16 pb-32",
        )}
      >
        {/* Features Sidebar */}
        <div className="flex 2xl:flex-col flex-wrap gap-4 w-auto justify-center items-center shrink-0 2xl:mx-0 mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>

        {/* Sliding Showcase Area */}
        <div className="flex flex-col w-full min-w-0 max-w-[878px] 2xl:mx-0 mx-auto">
          <ShowcaseSlider>
            {showcase.map((card) => (
              <ShowcaseCard key={card.id} {...card} />
            ))}
          </ShowcaseSlider>

          {/* Action Footer */}
          <div className="flex items-center justify-end">
            <AppButton
              text={t("our_platform_section.cards.right_section_cards.button")}
              withLeftIcon={true}
              leftIcon={<CalendarDays className="size-5" />}
              className="w-fit"
              to="/book-a-demo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

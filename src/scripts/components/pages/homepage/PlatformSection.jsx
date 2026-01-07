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

import ParallaxSection from "../../ui/ParallaxSection";

import { CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  platformSectionPartners,
  getPlatformSectionFeatures,
  getPlatformShowcaseData,
} from "../../../utils/constants";

export default function PlatformSection() {
  const { t } = useTranslation();

  // dynamically translated data
  const features = getPlatformSectionFeatures(t);
  const showcase = getPlatformShowcaseData(t);

  return (
    <ParallaxSection className="flex flex-col">
      {/* First row */}
      <div
        className={cn(
          themeGuide.paddingX,
          "flex xl:flex-row flex-col-reverse justify-center items-center gap-x-8",
        )}
        id="platform"
      >
        <div className="flex flex-col xl:w-[35%] w-full xl:justify-end justify-center xl:items-end items-center">
          <Badge variant="toolkit" size="default">
            {t("our_platform_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("our_platform_section.title")}
            highlight={t("our_platform_section.title_highlighted")}
            className="text-2xl xl:text-end text-center font-semibold mt-2"
          />
          <Description className="md:text-base text-sm xl:text-end text-center mb-4 xl:w-[70%] md:w-[55%] w-full">
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

        <div className="lg:w-[65%] w-full xl:mt-0 mt-8">
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/shipx_dashboard_mockup_v3.webp"
            alt="ShipX Dashboard Mockup"
            className="p-1"
          />
        </div>
      </div>

      {/* Second row: features + showcase */}
      <div
        className={cn(
          themeGuide.paddingX,
          "flex flex-col justify-center items-center xl:flex-row gap-8 w-full pt-16 pb-32",
        )}
      >
        {/* Features Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 w-auto justify-items-center shrink-0">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>

        {/* Sliding Showcase Area */}
        <div className="flex flex-col flex-1 max-w-[800px] w-full min-w-0">
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
      </div>
    </ParallaxSection>
  );
}

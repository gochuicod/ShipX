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
          "flex lg:flex-row flex-col-reverse justify-center items-center gap-x-8",
        )}
      >
        <div
          id="platform"
          className="flex flex-col lg:w-[35%] md:w-full w-full lg:justify-end justify-center lg:items-end md:items-center items-center"
        >
          <Badge variant="toolkit" size="default">
            {t("our_platform_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("our_platform_section.title")}
            highlight={t("our_platform_section.title_highlighted")}
            className="lg:text-[32px] md:text-[28px] text-[28px] lg:text-end md:text-center text-center font-semibold mt-2"
            disableNewlines={{ base: true, lg: false }}
          />
          <Description className="md:text-base text-sm lg:text-end md:text-center text-center mb-4 lg:w-[70%] md:w-[55%] w-full">
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

        <div className="lg:w-[65%] md:w-full w-full lg:mt-0 md:mt-8 mt-8 flex lg:justify-start md:justify-center justify-center lg:items-center md:items-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/shipx_dashboard_mockup_v4.webp"
            alt="ShipX Dashboard Mockup"
            className="p-1 md:max-w-[704px]"
          />
        </div>
      </Container>

      {/* Second row: features + showcase */}
      <Container
        className={cn(
          "flex flex-col justify-center items-start lg:flex-row gap-8 w-full pt-16 pb-32",
        )}
      >
        {/* Features Sidebar */}
        <div className="flex lg:flex-col md:flex-wrap flex-wrap gap-4 w-auto justify-center items-center shrink-0 lg:mx-0 md:mx-auto mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>

        {/* Sliding Showcase Area */}
        <div className="flex flex-col w-full min-w-0 max-w-[878px] lg:mx-0 md:mx-auto mx-auto">
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

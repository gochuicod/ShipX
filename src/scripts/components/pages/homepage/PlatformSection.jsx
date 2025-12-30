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

import {
  platformSectionPartners,
  platformSectionFeatures,
  platformShowcaseData,
} from "../../../utils/constants";

import { CalendarDays } from "lucide-react";

export default function PlatformSection() {
  return (
    <ParallaxSection className="flex flex-col">
      {/* First row of the section */}
      <div
        className={cn(
          themeGuide.paddingX,
          "flex xl:flex-row flex-col-reverse justify-center items-center gap-x-8",
        )}
        id="platform"
      >
        {/* Left side of the section */}
        <div
          className="
                      flex flex-col
                      xl:w-[35%] w-full
                      xl:justify-end justify-center
                      xl:items-end items-center
                  "
        >
          <Badge variant="toolkit" size="default">
            Our Platform
          </Badge>
          <HighlightedHeading
            text="Our Unified Platform for\nGlobal Logistics"
            highlight="Global Logistics"
            className="
                          text-2xl
                          xl:text-end text-center
                          font-semibold
                          mt-2
                      "
          />
          <Description
            className="
                          md:text-base text-sm
                          xl:text-end text-center
                          mb-4
                          xl:w-[70%] md:w-[55%] w-full
                      "
          >
            Simplify cross-border trade with a single dashboard for shipping,
            fulfillment and compliance.
          </Description>
          <div className="flex flex-row gap-x-8">
            {platformSectionPartners.map((partner, index) => {
              return (
                <PartnerCard
                  key={index}
                  logo={partner.logo}
                  name={partner.name}
                  size="small"
                  className="w-fit"
                />
              );
            })}
          </div>
        </div>
        {/* Right side of the section */}
        <div className="xl:w-[65%] w-full xl:mt-0 mt-8">
          <img
            src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/platform_section/shipx_dashboard_mockup_v3.webp"
            alt="ShipX Dashboard Mockup"
            className="p-1"
          />
        </div>
      </div>
      {/* Second row (Logistics Services) */}
      <div
        className={cn(
          themeGuide.paddingX,
          "flex flex-col justify-center items-center xl:flex-row gap-8 items-start w-full pt-16 pb-32",
        )}
      >
        {/* Features Sidebar */}
        <div
          className="
          grid 
          grid-cols-1           /* Mobile: 1 column */
          md:grid-cols-2        /* Medium: 2 columns (2x2) */
          xl:grid-cols-1        /* XL: Back to sidebar (1 column) */
          gap-4 
          w-full
          xl:w-[288px]
          justify-items-center 
          shrink-0
        "
        >
          {platformSectionFeatures.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>

        {/* Sliding Showcase Area */}
        <div className="flex flex-col flex-1 max-w-[800px] w-full min-w-0">
          <ShowcaseSlider>
            {platformShowcaseData.map((card) => (
              <ShowcaseCard key={card.id} {...card} />
            ))}
          </ShowcaseSlider>

          {/* Action Footer */}
          <div className="flex items-center justify-end">
            <AppButton
              text="Book a Demo"
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

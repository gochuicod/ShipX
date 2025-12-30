import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import AppButton from "../../library/AppButton";
import PartnerGrid from "../../library/PartnerGrid";

import { Badge } from "../../../../styles/badge";
import { themeGuide } from "../../../../styles/themeGuide";

import { cn } from "../../../../lib/util";

import { partnersSectionData } from "../../../utils/constants";

import ParallaxSection from "../../ui/ParallaxSection";

import { CircleArrowRight } from "lucide-react";

export default function PartnersSection() {
  return (
    <ParallaxSection>
      <div
        className={cn(
          themeGuide.paddingX,
          "lg:pt-32 lg:pb-0 md:pt-16 md:pb-16 pt-12 pb-12 flex 2xl:flex-row flex-col justify-center items-start gap-x-8",
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
            Our Partners
          </Badge>
          <HighlightedHeading
            text="Powering Growth\nwith World-Class Partners"
            highlight="World-Class Partners"
            className="
                          text-2xl
                          2xl:text-end text-center
                          font-semibold
                          mt-2
                      "
          />
          <Description
            className="
                          md:text-base text-sm
                          2xl:text-end text-center
                          mb-4
                          2xl:w-auto md:w-[80%] w-full
                      "
          >
            We've built a unified network of leading marketplaces, logistics
            carriers, and technology providers to ensure your business thrives
            globally.
          </Description>
          <AppButton
            text="Partner with Us"
            withRightIcon={true}
            rightIcon={<CircleArrowRight className="size-5" />}
          />
        </div>
        {/* Right side of the section */}
        <div className="2xl:w-[65%] w-full 2xl:mt-0 mt-8">
          <PartnerGrid partners={partnersSectionData} />
        </div>
      </div>
    </ParallaxSection>
  );
}

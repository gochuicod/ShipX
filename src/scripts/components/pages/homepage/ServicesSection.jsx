import { themeGuide } from "../../../../styles/themeGuide";
import ServicesItems from "../../library/ServicesItems";
import ServiceCard from "../../library/ServiceCard";
import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import AppButton from "../../library/AppButton";

import { Badge } from "../../../../styles/badge";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { cn } from "../../../../lib/util";
import ParallaxSection from "../../ui/ParallaxSection";

import {
  servicesSectionServiceItems,
  servicesSectionCardData,
} from "../../../utils/constants";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState("express");
  const activeData = servicesSectionCardData[activeServiceId];

  return (
    <ParallaxSection>
      <div
        id="services"
        className={cn(
          themeGuide.paddingX,
          "py-12 md:py-16 2xl:py-46 flex flex-col items-center overflow-hidden",
        )}
      >
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-md:gap-4 w-full max-w-[1200px]">
          <div className="flex flex-col w-full lg:w-[35%] items-center lg:items-end text-center lg:text-right">
            <Badge variant="toolkit" size="default">
              Our Services
            </Badge>
            <HighlightedHeading
              text="A Unified Platform for\nCross-Border Logistics"
              highlight="Unified Platform"
              className="text-2xl font-semibold mt-2"
            />
          </div>
          <div className="flex flex-col flex-1 items-center lg:items-start text-center lg:text-left">
            <Description className="mb-4 md:text-base text-sm lg:w-[85%]">
              ShipX aggregates solutions from Amilo & SG Link to offer a
              comprehensive suite of services. Whether you need Express
              Worldwide shipping, USA Destination Fulfillment, or specialized
              FBA handling, we manage the complexities of global compliance and
              documentation for you.
            </Description>
            <AppButton
              text="Book a Demo"
              withLeftIcon={true}
              leftIcon={<CalendarDays className="size-5" />}
              className="w-fit"
              to="/book-a-demo"
            />
          </div>
        </div>

        {/* --- INTERACTIVE CONTENT SECTION --- */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full mt-12 gap-8 md:gap-12">
          {/* NAV: Horizontal Wrap on Tablet/Mobile, Vertical on Desktop */}
          <div className="flex flex-wrap justify-center xl:flex-col gap-4 w-full xl:w-fit shrink-0 md:max-w-[704px] xl:max-w-none">
            {servicesSectionServiceItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveServiceId(item.id)}
                className="cursor-pointer transition-transform duration-200 active:scale-95"
              >
                <ServicesItems
                  variant="list"
                  isActive={activeServiceId === item.id}
                  icon={item.icon}
                  heading={item.title}
                />
              </div>
            ))}
          </div>

          {/* DISPLAY: Centered Card Area */}
          <div className="flex justify-center w-full max-w-[714px]">
            {activeData && (
              <ServiceCard
                key={activeServiceId}
                {...activeData}
                onCtaClick={() =>
                  console.log(`Inquiry for ${activeData.title}`)
                }
              />
            )}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import { Badge } from "../../../../styles/badge";

import ServicesItems from "../../library/ServicesItems";
import ServiceCard from "../../library/ServiceCard";
import HighlightedHeading from "../../library/HighlightedHeading";
import Description from "../../library/Description";
import AppButton from "../../library/AppButton";
import Container from "../../library/Container";

import {
  servicesSectionServiceItems,
  servicesSectionCardKeys,
  servicesSectionCardStaticData,
} from "../../../utils/constants";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState("express");
  const { t } = useTranslation();

  const activeKey = servicesSectionCardKeys[activeServiceId];
  const activeStatic = servicesSectionCardStaticData[activeServiceId];

  // 1. Fetch the array of pricing objects dynamically based on the active tab
  // This looks at: services_section.cards.[express/commercial/etc].services_covered
  const activePricingData = activeKey
    ? t(`${activeKey}.services_covered`, {
        returnObjects: true,
        defaultValue: [],
      })
    : [];

  // 2. Build the data object for the card
  const activeData = activeKey
    ? {
        title: t(`${activeKey}.title`),
        description: t(`${activeKey}.description`),
        ctaText: t(`${activeKey}.service_name`),
        ...activeStatic,
      }
    : null;

  return (
    <Container
      className={cn(
        "flex flex-col items-center overflow-hidden md:gap-8 gap-4",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* --- HEADER --- */}
      <div
        id="services"
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-md:gap-4 w-full md:max-w-[704px] lg:max-w-[1072px]"
      >
        <div className="flex flex-col w-full lg:w-[35%] md:w-full items-center lg:items-end md:items-center text-center lg:text-right md:text-center">
          <Badge variant="toolkit" size="default">
            {t("services_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("services_section.headline")}
            highlight={t("services_section.headline_highlighted")}
            className="lg:text-[32px] lg:leading-10 md:text-[28px] md:leading-8 text-[28px] leading-8 font-semibold mt-2"
            disableNewlines
          />
        </div>
        <div className="flex flex-col flex-1 items-center lg:items-start md:items-center text-center lg:text-left md:text-center">
          <Description className="mb-4 md:text-base text-sm lg:w-[85%] md:w-full w-full">
            {t("services_section.description")}
          </Description>
          <AppButton
            text={t("services_section.button")}
            withRightIcon
            rightIcon={<CircleArrowRight className="size-5" />}
            className="w-fit"
            to="/book-a-demo"
          />
        </div>
      </div>

      {/* --- INTERACTIVE CONTENT --- */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full gap-4 md:gap-8">
        {/* NAV */}
        <div
          className={cn(
            "flex lg:flex-col md:flex-wrap flex-wrap",
            "justify-center gap-4",
            "w-fit md:max-w-[704px] max-w-[376px]",
            "shrink-0",
          )}
        >
          {/* Mapping over buttons (Express, Commercial, etc.) */}
          {servicesSectionServiceItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveServiceId(item.id)}
              className="cursor-pointer transition-transform duration-200 active:scale-95 "
            >
              <ServicesItems
                variant="list"
                isActive={activeServiceId === item.id}
                icon={item.icon}
                heading={t(`${servicesSectionCardKeys[item.id]}.title`)}
              />
            </div>
          ))}
        </div>

        {/* DISPLAY CARD */}
        <div className="flex justify-center w-full max-w-[714px]">
          {activeData && (
            <ServiceCard
              key={activeServiceId} // Force re-render when switching tabs to reset internal state
              {...activeData}
              onCtaClick={() => console.log(`Inquiry for ${activeData.title}`)}
              // 3. Pass the dynamic pricing array here
              pricingData={activePricingData}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

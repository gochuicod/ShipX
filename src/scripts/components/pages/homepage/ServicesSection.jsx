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

  // Build activeData from translations + static assets
  const activeData = activeKey
    ? {
        title: t(`${activeKey}.title`),
        description: t(`${activeKey}.description`),
        ctaText: t(`${activeKey}.service_name`),
        servicesCovered:
          Object.values(
            t(`${activeKey}.services_covered`, { returnObjects: true }),
          ) || [],
        ...activeStatic,
      }
    : null;

  const expressPricing = t("services_section.cards.services_pricing.Express", {
    returnObjects: true,
    defaultValue: [],
  });

  return (
    <Container
      className={cn(
        "flex flex-col items-center overflow-hidden",
        themeGuide.sectionPaddingY,
      )}
    >
      {/* --- HEADER --- */}
      <div
        id="services"
        className="flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start gap-8 max-md:gap-4 w-full max-w-[1200px]"
      >
        <div className="flex flex-col w-full 2xl:w-[35%] items-center 2xl:items-end text-center 2xl:text-right">
          <Badge variant="toolkit" size="default">
            {t("services_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("services_section.headline")}
            highlight={t("services_section.headline_highlighted")}
            className="text-2xl font-semibold mt-2"
            disableNewlines
          />
        </div>
        <div className="flex flex-col flex-1 items-center 2xl:items-start text-center 2xl:text-left">
          <Description className="mb-4 md:text-base text-sm 2xl:w-[85%]">
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
      <div className="flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start w-full mt-12 gap-8 md:gap-12">
        {/* NAV */}
        <div
          className={cn(
            "flex 2xl:flex-col flex-wrap",
            "justify-center gap-4",
            "2xl:w-fit w-full",
            "shrink-0",
          )}
        >
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
                heading={t(`${servicesSectionCardKeys[item.id]}.title`)}
              />
            </div>
          ))}
        </div>

        {/* DISPLAY CARD */}
        <div className="flex justify-center w-full max-w-[714px]">
          {activeData && (
            <ServiceCard
              key={activeServiceId}
              {...activeData}
              onCtaClick={() => console.log(`Inquiry for ${activeData.title}`)}
              pricingData={expressPricing}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CalendarDays } from "lucide-react";

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
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 max-md:gap-4 w-full max-w-[1200px]"
      >
        <div className="flex flex-col w-full lg:w-[35%] items-center lg:items-end text-center lg:text-right">
          <Badge variant="toolkit" size="default">
            {t("services_section.badge")}
          </Badge>
          <HighlightedHeading
            text={t("services_section.headline")}
            highlight={t("services_section.headline_highlighted")}
            className="text-2xl font-semibold mt-2"
          />
        </div>
        <div className="flex flex-col flex-1 items-center lg:items-start text-center lg:text-left">
          <Description className="mb-4 md:text-base text-sm lg:w-[85%]">
            {t("services_section.description")}
          </Description>
          <AppButton
            text={t("services_section.button")}
            withLeftIcon
            leftIcon={<CalendarDays className="size-5" />}
            className="w-fit"
            to="/book-a-demo"
          />
        </div>
      </div>

      {/* --- INTERACTIVE CONTENT --- */}
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start w-full mt-12 gap-8 md:gap-12">
        {/* NAV */}
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
            />
          )}
        </div>
      </div>
    </Container>
  );
}

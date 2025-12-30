import AppButton from "../../library/AppButton";
import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import OfficeModal from "../../library/OfficeModal";

import ParallaxSection from "../../ui/ParallaxSection";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import { Badge } from "../../../../styles/badge";

import { officesSectionCountries } from "../../../utils/constants";

import { useTranslation } from "react-i18next";
import { useState } from "react";

function CountryButtons() {
  const { t } = useTranslation();
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <>
      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-6">
        {officesSectionCountries.map((item) => {
          const officeKey = item.name.toLowerCase().replace(/\s/g, "_");
          const officeData = t(`offices_section.offices.${officeKey}`, {
            returnObjects: true,
          });

          const office = {
            ...officeData,
            icon: item.icon,
          };

          return (
            <AppButton
              key={officeKey}
              variant="tertiary"
              text={item.name}
              withLeftIcon
              leftIcon={item.icon}
              iconRounded
              onClick={() => setSelectedOffice(office)}
            />
          );
        })}
      </div>

      <OfficeModal
        isOpen={!!selectedOffice}
        onClose={() => setSelectedOffice(null)}
        office={selectedOffice} // pass full office object
      />
    </>
  );
}

export default function OfficesSection() {
  return (
    <ParallaxSection>
      <div
        className={cn(
          themeGuide.paddingX,
          "flex xl:flex-row flex-col-reverse justify-center items-center gap-x-8 py-32",
          "bg-linear-to-b from-[#FAF5FF] to-[#FFFFFF]",
        )}
      >
        {/* LEFT: Image + mobile buttons */}
        <div className="xl:w-[55%] w-full flex flex-col items-center">
          <div className="relative w-full h-auto">
            <img
              src="https://cdn.jsdelivr.net/gh/gochuicod/ShipX@shipx-v2/src/assets/offices_section/offices_section_map_image.webp"
              alt="ShipX Global Network Map"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Buttons BELOW image on md and below */}
          <div className="block xl:hidden w-full">
            <CountryButtons />
          </div>
        </div>

        {/* RIGHT: Text + desktop buttons */}
        <div
          className="
            flex flex-col
            xl:w-[45%] w-full
            xl:justify-start justify-center
            xl:items-start items-center
          "
        >
          <Badge variant="toolkit" size="default">
            Our Offices
          </Badge>

          <HighlightedHeading
            text="Local presence, global corridors\n— the ShipX advantage"
            highlight="the ShipX advantage"
            className="
              text-2xl
              xl:text-start text-center
              font-semibold
              mt-2
            "
          />

          <Description
            className="
              md:text-base text-sm
              xl:text-start text-center
              mb-4
              w-full
            "
          >
            Our Network Of Regional Hubs And Domain Experts Ensures Your
            Business Thrives Globally, Without Losing Its Local Edge
          </Description>

          {/* Buttons on the RIGHT for xl+ */}
          <div className="hidden xl:block w-full">
            <CountryButtons />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}

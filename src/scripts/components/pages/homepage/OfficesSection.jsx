import AppButton from "../../library/AppButton";
import Description from "../../library/Description";
import HighlightedHeading from "../../library/HighlightedHeading";
import OfficeModal from "../../library/OfficeModal";

import { cn } from "../../../../lib/util";
import { themeGuide } from "../../../../styles/themeGuide";
import { Badge } from "../../../../styles/badge";

import { officesSectionCountries } from "../../../utils/constants";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import Map from "../../svgs/Map";

// 1. Accept the onHover prop here
function CountryButtons({ onHover }) {
  const { t } = useTranslation();
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <>
      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-6">
        {officesSectionCountries.map((item) => {
          const officeKey = item.country_key;
          const countryName = t(item.country_key); // Get the translated name

          // Create office object with icon
          const office = {
            country_name: countryName,
            address: item.location_key ? t(item.location_key) : "",
            email: item.email_key ? t(item.email_key) : "",
            icon: item.icon,
          };

          return (
            <div
              key={officeKey}
              // 2. Add mouse event listeners here to trigger the state change
              onMouseEnter={() => onHover && onHover(countryName)}
              onMouseLeave={() => onHover && onHover(null)}
            >
              <AppButton
                variant="quaternary"
                text={countryName}
                withLeftIcon
                leftIcon={item.icon}
                iconRounded
                onClick={() => setSelectedOffice(office)}
              />
            </div>
          );
        })}
      </div>

      <OfficeModal
        isOpen={!!selectedOffice}
        onClose={() => setSelectedOffice(null)}
        office={selectedOffice}
      />
    </>
  );
}

export default function OfficesSection() {
  const { t } = useTranslation();
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
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
          {/* 3. Pass the dynamic state instead of the hardcoded string */}
          <Map activeCountry={hoveredCountry} />
        </div>

        {/* Buttons BELOW image on md and below */}
        <div className="block xl:hidden w-full">
          <CountryButtons onHover={setHoveredCountry} />
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
          {t("our_offices_section.badge")}
        </Badge>

        <HighlightedHeading
          text={t("our_offices_section.title")}
          highlight={t("our_offices_section.title_heading")}
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
          {t("our_offices_section.description")}
        </Description>

        {/* Buttons on the RIGHT for xl+ */}
        <div className="hidden xl:block w-full">
          <CountryButtons onHover={setHoveredCountry} />
        </div>
      </div>
    </div>
  );
}

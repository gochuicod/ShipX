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

function CountryButtons() {
  const { t } = useTranslation();
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <>
      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-6">
        {officesSectionCountries.map((item) => {
          const officeKey = item.country_key; // use the country_key directly

          // Create office object with icon
          const office = {
            country_name: t(item.country_key),
            address: item.location_key ? t(item.location_key) : "",
            email: item.email_key ? t(item.email_key) : "",
            icon: item.icon,
          };

          return (
            <AppButton
              key={officeKey}
              variant="tertiary"
              text={t(item.country_key)}
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
        office={selectedOffice}
      />
    </>
  );
}

export default function OfficesSection() {
  const { t } = useTranslation();

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
          <CountryButtons />
        </div>
      </div>
    </div>
  );
}
